<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import * as THREE from 'three'

const host = ref(null)
const canvas = ref(null)

// A procedural node network (not a literal hand): points distributed evenly
// over a sphere (Fibonacci lattice) with slight radius jitter, connected to
// their nearest neighbours. Same raw/filtered duality as the rest of the
// site — a noisy "signal" layer and a smoothed layer riding on top of it.
const NODE_COUNT = 30
const K_NEAREST = 3
const SPHERE_RADIUS = 1.75

function buildNetwork() {
  const points = []
  const goldenAngle = Math.PI * (3 - Math.sqrt(5))
  for (let i = 0; i < NODE_COUNT; i++) {
    const y = 1 - (i / (NODE_COUNT - 1)) * 2
    const radiusAtY = Math.sqrt(Math.max(0, 1 - y * y))
    const theta = goldenAngle * i
    const jitter = 0.82 + Math.random() * 0.36
    const x = Math.cos(theta) * radiusAtY * SPHERE_RADIUS * jitter
    const z = Math.sin(theta) * radiusAtY * SPHERE_RADIUS * jitter
    points.push(new THREE.Vector3(x, y * SPHERE_RADIUS * 1.08 * jitter, z))
  }

  const edgeSet = new Set()
  const connections = []
  for (let i = 0; i < points.length; i++) {
    const distances = []
    for (let j = 0; j < points.length; j++) {
      if (i === j) continue
      distances.push([j, points[i].distanceTo(points[j])])
    }
    distances.sort((a, b) => a[1] - b[1])
    for (let k = 0; k < K_NEAREST; k++) {
      const j = distances[k][0]
      const key = i < j ? `${i}-${j}` : `${j}-${i}`
      if (!edgeSet.has(key)) {
        edgeSet.add(key)
        connections.push([i, j])
      }
    }
  }
  return { points, connections }
}

const { points: BASE, connections: CONNECTIONS } = buildNetwork()

const ACCENT = new THREE.Color('#7fd6c9')
const GHOST = new THREE.Color('#f4f5f3')

function easeOutBack(x) {
  const c1 = 1.70158
  const c3 = c1 + 1
  return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2)
}

function springStep(state, target, dt, stiffness, damping) {
  const force = (target - state.pos) * stiffness - state.vel * damping
  state.vel += force * dt
  state.pos += state.vel * dt
}

let renderer, scene, camera, frameId, resizeObserver
let disposed = false

onMounted(() => {
  const el = canvas.value
  if (!el || typeof window === 'undefined') return

  try {
    renderer = new THREE.WebGLRenderer({ canvas: el, alpha: true, antialias: true })
  } catch {
    return
  }

  const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100)
  camera.position.set(0, 0, 8.4)
  camera.lookAt(0, 0, 0)

  const netGroup = new THREE.Group()
  netGroup.rotation.set(-0.08, 0.3, 0)
  scene.add(netGroup)

  const jointGeo = new THREE.SphereGeometry(1, 12, 10)
  const boneGeo = new THREE.CylinderGeometry(1, 1, 1, 6, 1)

  const rawJointMat = new THREE.MeshBasicMaterial({ color: GHOST, transparent: true, opacity: 0.22 })
  const rawBoneMat = new THREE.MeshBasicMaterial({ color: GHOST, transparent: true, opacity: 0.13 })
  const filteredJointMat = new THREE.MeshBasicMaterial({ color: ACCENT, transparent: true, opacity: 0.85 })
  const filteredBoneMat = new THREE.MeshBasicMaterial({ color: ACCENT, transparent: true, opacity: 0.6 })
  const glowMat = new THREE.MeshBasicMaterial({
    color: ACCENT,
    transparent: true,
    opacity: 0.13,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  })
  const allMaterials = [rawJointMat, rawBoneMat, filteredJointMat, filteredBoneMat, glowMat]
  const baseOpacity = allMaterials.map((m) => m.opacity)

  const rawJoints = new THREE.InstancedMesh(jointGeo, rawJointMat, BASE.length)
  const filteredJoints = new THREE.InstancedMesh(jointGeo, filteredJointMat, BASE.length)
  const glowJoints = new THREE.InstancedMesh(jointGeo, glowMat, BASE.length)
  const rawBones = new THREE.InstancedMesh(boneGeo, rawBoneMat, CONNECTIONS.length)
  const filteredBones = new THREE.InstancedMesh(boneGeo, filteredBoneMat, CONNECTIONS.length)

  rawJoints.visible = !reducedMotion
  rawBones.visible = !reducedMotion

  netGroup.add(glowJoints, rawBones, filteredBones, rawJoints, filteredJoints)

  const dummy = new THREE.Object3D()
  const UP = new THREE.Vector3(0, 1, 0)
  const filtered = BASE.map((p) => p.clone())
  const rawPos = BASE.map(() => new THREE.Vector3())
  const effectiveBase = BASE.map(() => new THREE.Vector3())
  const jointSeeds = BASE.map(() => Math.random() * Math.PI * 2)
  const scatterSeeds = BASE.map(() => {
    const dir = new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize()
    return dir.multiplyScalar(2.3 + Math.random() * 1.5)
  })

  const JOINT_RADIUS = 0.075
  const BONE_RADIUS = 0.028
  const JITTER_AMPLITUDE = reducedMotion ? 0 : 0.04
  const SMOOTHING = 0.06
  const ASSEMBLY_DURATION = reducedMotion ? 0.001 : 1.7

  // Pointer-chase: the network leans toward the cursor anywhere on the page;
  // when idle it drifts on its own via a slow wander target.
  const springX = { pos: 0, vel: 0 }
  const springY = { pos: 0, vel: 0 }
  let pointerNX = 0
  let pointerNY = 0
  let hasPointerEver = false
  let lastMoveT = -99

  function onPointerMove(e) {
    const rect = host.value?.getBoundingClientRect()
    if (!rect || rect.width === 0 || rect.height === 0) return
    pointerNX = Math.max(-1, Math.min(1, ((e.clientX - rect.left) / rect.width - 0.5) * 2))
    pointerNY = Math.max(-1, Math.min(1, ((e.clientY - rect.top) / rect.height - 0.5) * 2))
    hasPointerEver = true
    lastMoveT = clockElapsed
  }
  window.addEventListener('pointermove', onPointerMove, { passive: true })

  // Home position: off to the side on wide screens (clear of the centered
  // headline), below the text on narrow/portrait screens. Recomputed on
  // resize from the actual visible frustum so it never runs off-canvas.
  let HOME_X = 0
  let HOME_Y = 0

  function resize() {
    const rect = host.value?.getBoundingClientRect()
    if (!rect || rect.width === 0 || rect.height === 0) return
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    renderer.setPixelRatio(dpr)
    renderer.setSize(rect.width, rect.height, false)
    const aspect = rect.width / rect.height
    camera.aspect = aspect
    camera.updateProjectionMatrix()

    if (aspect < 0.85) {
      HOME_X = 0
      HOME_Y = -3.9
    } else {
      const halfHeight = camera.position.z * Math.tan((camera.fov * Math.PI) / 360)
      const halfWidth = halfHeight * aspect
      HOME_X = Math.min(1.9, halfWidth * 0.36)
      HOME_Y = -0.15
    }
  }

  resizeObserver = new ResizeObserver(resize)
  if (host.value) resizeObserver.observe(host.value)
  resize()

  let tabVisible = document.visibilityState !== 'hidden'
  const onVisibility = () => {
    tabVisible = document.visibilityState !== 'hidden'
  }
  document.addEventListener('visibilitychange', onVisibility)

  const clock = new THREE.Clock()
  let clockElapsed = 0

  function animate() {
    if (disposed) return
    frameId = requestAnimationFrame(animate)
    if (!tabVisible) return

    const dt = Math.min(clock.getDelta(), 1 / 30)
    clockElapsed = clock.elapsedTime
    const t = clockElapsed

    // Assembly: the network condenses from a scattered cloud into form on load.
    const formT = Math.min(t / ASSEMBLY_DURATION, 1)
    const eased = easeOutBack(formT)
    const scatterFactor = 1 - eased
    const fadeIn = Math.min(t / 0.7, 1)
    if (fadeIn < 1) {
      allMaterials.forEach((m, i) => {
        m.opacity = baseOpacity[i] * fadeIn
      })
    }

    for (let i = 0; i < BASE.length; i++) {
      effectiveBase[i].copy(BASE[i]).addScaledVector(scatterSeeds[i], scatterFactor)

      const seed = jointSeeds[i]
      const jx = Math.sin(t * 5.3 + seed) * 0.6 + Math.sin(t * 11.7 + seed * 2.1) * 0.4
      const jy = Math.cos(t * 4.7 + seed * 1.3) * 0.6 + Math.sin(t * 9.1 + seed) * 0.4
      const jz = Math.sin(t * 6.1 + seed * 0.7) * 0.5
      rawPos[i].set(
        effectiveBase[i].x + jx * JITTER_AMPLITUDE,
        effectiveBase[i].y + jy * JITTER_AMPLITUDE,
        effectiveBase[i].z + jz * JITTER_AMPLITUDE,
      )
      filtered[i].lerp(rawPos[i], SMOOTHING)

      dummy.position.copy(rawPos[i])
      dummy.scale.setScalar(JOINT_RADIUS * 0.85)
      dummy.rotation.set(0, 0, 0)
      dummy.updateMatrix()
      rawJoints.setMatrixAt(i, dummy.matrix)

      dummy.position.copy(filtered[i])
      dummy.scale.setScalar(JOINT_RADIUS)
      dummy.updateMatrix()
      filteredJoints.setMatrixAt(i, dummy.matrix)

      dummy.scale.setScalar(JOINT_RADIUS * 2.6)
      dummy.updateMatrix()
      glowJoints.setMatrixAt(i, dummy.matrix)
    }

    for (let i = 0; i < CONNECTIONS.length; i++) {
      const [a, b] = CONNECTIONS[i]
      placeBone(dummy, rawPos[a], rawPos[b], BONE_RADIUS * 0.7, UP)
      rawBones.setMatrixAt(i, dummy.matrix)
      placeBone(dummy, filtered[a], filtered[b], BONE_RADIUS, UP)
      filteredBones.setMatrixAt(i, dummy.matrix)
    }

    rawJoints.instanceMatrix.needsUpdate = true
    filteredJoints.instanceMatrix.needsUpdate = true
    glowJoints.instanceMatrix.needsUpdate = true
    rawBones.instanceMatrix.needsUpdate = true
    filteredBones.instanceMatrix.needsUpdate = true

    if (!reducedMotion) {
      const idleX = Math.sin(t * 0.17) * 0.55
      const idleY = Math.cos(t * 0.13) * 0.35
      const sinceMove = t - lastMoveT
      const influence = hasPointerEver ? Math.max(0, Math.min(1, 1 - (sinceMove - 2.5) / 1.5)) : 0
      const targetX = idleX + (pointerNX - idleX) * influence
      const targetY = idleY + (pointerNY - idleY) * influence

      springStep(springX, targetX, dt, 55, 11)
      springStep(springY, targetY, dt, 55, 11)

      netGroup.position.x = HOME_X + springX.pos * 0.55
      netGroup.position.y = HOME_Y - springY.pos * 0.45
      netGroup.rotation.y = 0.3 + springX.pos * 0.4
      netGroup.rotation.x = -0.08 - springY.pos * 0.28
    }

    renderer.render(scene, camera)
  }

  frameId = requestAnimationFrame(animate)

  onBeforeUnmount(() => {
    disposed = true
    cancelAnimationFrame(frameId)
    resizeObserver?.disconnect()
    document.removeEventListener('visibilitychange', onVisibility)
    window.removeEventListener('pointermove', onPointerMove)
    jointGeo.dispose()
    boneGeo.dispose()
    rawJointMat.dispose()
    rawBoneMat.dispose()
    filteredJointMat.dispose()
    filteredBoneMat.dispose()
    glowMat.dispose()
    renderer.dispose()
  })
})

function placeBone(dummy, a, b, radius, UP) {
  dummy.position.copy(a).add(b).multiplyScalar(0.5)
  const dir = new THREE.Vector3().subVectors(b, a)
  const len = dir.length()
  dummy.scale.set(radius, len, radius)
  dummy.quaternion.setFromUnitVectors(UP, dir.normalize())
  dummy.updateMatrix()
}
</script>

<template>
  <div ref="host" class="network-graphic" aria-hidden="true">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<style scoped>
.network-graphic {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

canvas {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
