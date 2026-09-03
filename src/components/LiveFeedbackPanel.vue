<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { gestures } from '../data/gestures'

// Solange keine Kamera/Gestenerkennung angebunden ist, wird hier ein
// simuliertes Positionssignal erzeugt: ein "Rohsignal" mit Zittern und ein
// gefiltertes Signal (gleitender Mittelwert), dessen Glättung live an den
// Filterstärke-Regler gekoppelt ist. Zeigt ehrlich, WAS gefiltert werden
// würde, ohne echte Kamera-/Sensordaten vorzutäuschen.
const activeGesture = ref(null)
const filterStrength = ref(50)
let resetTimer = null
let gestureStartT = 0

function simulate(gesture) {
  activeGesture.value = gesture
  gestureStartT = elapsedT
  clearTimeout(resetTimer)
  resetTimer = setTimeout(() => {
    activeGesture.value = null
  }, GESTURE_DURATION * 1000)
}

const GESTURE_DURATION = 2.2
const canvas = ref(null)
const scopeHost = ref(null)
let elapsedT = 0

function clamp01(x) {
  return Math.max(0, Math.min(1, x))
}
function smoothstep(x) {
  const t = clamp01(x)
  return t * t * (3 - 2 * t)
}
function bump(u, center, width) {
  const d = (u - center) / width
  return Math.exp(-d * d)
}

function gestureEnvelope(id, u) {
  switch (id) {
    case 'tap':
      return (bump(u, 0.25, 0.05) + bump(u, 0.55, 0.05)) * 0.65
    case 'hold':
      if (u < 0.15) return smoothstep(u / 0.15) * 0.55
      if (u < 0.8) return 0.55
      return 0.55 * (1 - smoothstep((u - 0.8) / 0.2))
    case 'swipe':
      return (smoothstep(u) - 0.5) * 1.1
    case 'drag':
      if (u < 0.2) return smoothstep(u / 0.2) * 0.5
      if (u < 0.75) return 0.5 + Math.sin(u * 30) * 0.03
      return 0.5 * (1 - smoothstep((u - 0.75) / 0.25))
    case 'zoom':
      return Math.sin(u * 18) * Math.sin(u * Math.PI) * 0.5
    default:
      return 0
  }
}

let renderer2d, resizeObserver, frameId
let disposed = false

onMounted(() => {
  const el = canvas.value
  if (!el) return
  renderer2d = el.getContext('2d')
  if (!renderer2d) return

  const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
  const tremorScale = reducedMotion ? 0.35 : 1

  const PX_PER_SAMPLE = 2
  let raw = []
  let filtered = []
  let filteredValue = 0
  let cssWidth = 0
  let cssHeight = 0

  function resize() {
    const rect = scopeHost.value?.getBoundingClientRect()
    if (!rect || rect.width === 0 || rect.height === 0) return
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    cssWidth = rect.width
    cssHeight = rect.height
    el.width = rect.width * dpr
    el.height = rect.height * dpr
    renderer2d.setTransform(dpr, 0, 0, dpr, 0, 0)
  }

  resizeObserver = new ResizeObserver(resize)
  if (scopeHost.value) resizeObserver.observe(scopeHost.value)
  resize()

  let last = performance.now()

  function tick(now) {
    if (disposed) return
    frameId = requestAnimationFrame(tick)
    const dt = Math.min((now - last) / 1000, 1 / 20)
    last = now
    elapsedT += dt

    const t = elapsedT
    const tremor =
      (Math.sin(t * 5.3) * 0.4 + Math.sin(t * 11.1 + 1.3) * 0.25 + Math.sin(t * 17.4 + 2.7) * 0.15) *
      0.22 *
      tremorScale

    let gestureValue = 0
    if (activeGesture.value) {
      const u = clamp01((t - gestureStartT) / GESTURE_DURATION)
      gestureValue = gestureEnvelope(activeGesture.value.id, u)
    }

    const rawValue = tremor + gestureValue
    const alpha = 0.85 - (filterStrength.value / 100) * 0.835
    filteredValue += (rawValue - filteredValue) * alpha

    raw.push(rawValue)
    filtered.push(filteredValue)
    const maxSamples = Math.ceil(cssWidth / PX_PER_SAMPLE) + 2
    if (raw.length > maxSamples) {
      raw = raw.slice(raw.length - maxSamples)
      filtered = filtered.slice(filtered.length - maxSamples)
    }

    draw()
  }

  function draw() {
    if (cssWidth === 0 || cssHeight === 0) return
    const ctx = renderer2d
    ctx.clearRect(0, 0, cssWidth, cssHeight)

    const midY = cssHeight * 0.52
    const amp = cssHeight * 0.34

    ctx.strokeStyle = 'rgba(244, 245, 243, 0.12)'
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(0, midY)
    ctx.lineTo(cssWidth, midY)
    ctx.stroke()

    plotLine(ctx, raw, midY, amp, 'rgba(244, 245, 243, 0.32)', 1.2, 0)
    plotLine(ctx, filtered, midY, amp, '#7fd6c9', 2, 8)
  }

  function plotLine(ctx, series, midY, amp, color, width, glow) {
    if (series.length < 2) return
    ctx.beginPath()
    const startX = cssWidth - (series.length - 1) * PX_PER_SAMPLE
    for (let i = 0; i < series.length; i++) {
      const x = startX + i * PX_PER_SAMPLE
      const y = midY - series[i] * amp
      if (i === 0) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    }
    ctx.strokeStyle = color
    ctx.lineWidth = width
    ctx.lineJoin = 'round'
    ctx.lineCap = 'round'
    if (glow) {
      ctx.shadowColor = color
      ctx.shadowBlur = glow
    } else {
      ctx.shadowBlur = 0
    }
    ctx.stroke()
    ctx.shadowBlur = 0
  }

  let tabVisible = document.visibilityState !== 'hidden'
  const onVisibility = () => {
    tabVisible = document.visibilityState !== 'hidden'
    if (tabVisible) last = performance.now()
  }
  document.addEventListener('visibilitychange', onVisibility)

  frameId = requestAnimationFrame(function loop(now) {
    if (tabVisible) tick(now)
    else frameId = requestAnimationFrame(loop)
  })

  onBeforeUnmount(() => {
    disposed = true
    cancelAnimationFrame(frameId)
    clearTimeout(resetTimer)
    resizeObserver?.disconnect()
    document.removeEventListener('visibilitychange', onVisibility)
  })
})
</script>

<template>
  <div class="panel">
    <div class="scope-block">
      <div ref="scopeHost" class="scope-wrap">
        <canvas
          ref="canvas"
          role="img"
          aria-label="Simulierter Signalverlauf: verrauschtes Rohsignal und geglättetes, gefiltertes Signal"
        ></canvas>
      </div>
      <p class="scope-legend">
        <span class="legend-dot legend-dot--ghost"></span> Rohsignal (Zittern)
        <span class="legend-dot legend-dot--steady"></span> gefiltert
      </p>
      <p class="scope-note">
        Simulierter Signalverlauf – echte Kamera-Anbindung folgt in einer
        späteren Version.
      </p>
    </div>

    <div class="feedback">
      <div
        class="status"
        :class="{ active: activeGesture }"
        role="status"
        aria-live="polite"
      >
        <span class="status-label">Erkannte Geste</span>
        <span class="status-value">
          {{ activeGesture ? activeGesture.name : 'Keine Geste erkannt' }}
        </span>
        <span v-if="activeGesture" class="status-replaces">
          entspricht: {{ activeGesture.replaces }}
        </span>
      </div>

      <div class="simulate">
        <p class="simulate-label">
          Geste simulieren
          <span class="simulate-hint">(bis die Kameraerkennung angebunden ist)</span>
        </p>
        <div class="simulate-buttons">
          <button
            v-for="gesture in gestures"
            :key="gesture.id"
            type="button"
            class="simulate-button"
            @click="simulate(gesture)"
          >
            {{ gesture.name }}
          </button>
        </div>
      </div>

      <div class="filter">
        <label for="filter-strength">
          Filterstärke
          <span class="filter-value">{{ filterStrength }}%</span>
        </label>
        <input
          id="filter-strength"
          type="range"
          min="0"
          max="100"
          v-model.number="filterStrength"
        />
        <p class="filter-hint">
          Passt live an, wie stark das Zittern im simulierten Signal oben
          herausgefiltert wird.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.panel {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 2rem;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--panel-bg);
}

.scope-block {
  display: flex;
  flex-direction: column;
}

.scope-wrap {
  flex: 1;
  aspect-ratio: 4 / 3;
  border-radius: 8px;
  border: 1px solid rgba(127, 214, 201, 0.18);
  background: linear-gradient(160deg, #10151a 0%, #0d1215 100%);
  overflow: hidden;
}

.scope-wrap canvas {
  display: block;
  width: 100%;
  height: 100%;
}

.scope-legend {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.75rem;
  letter-spacing: 0.03em;
  color: var(--text-muted);
  margin: 0.75rem 0 0;
}

.legend-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
}

.legend-dot--ghost {
  background: var(--text-muted);
  opacity: 0.6;
}

.legend-dot--steady {
  background: #7fd6c9;
  box-shadow: 0 0 6px rgba(127, 214, 201, 0.7);
  margin-left: 0.6rem;
}

.scope-note {
  margin: 0.35rem 0 0;
  font-size: 0.78rem;
  color: var(--text-muted);
}

.feedback {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.status {
  padding: 1.25rem;
  border-radius: 8px;
  background: var(--track-bg);
  transition: background 0.25s ease;
}

.status.active {
  background: var(--accent-bg);
}

.status-label {
  display: block;
  font-size: 0.8rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.status-value {
  display: block;
  font-size: 1.4rem;
  font-weight: 600;
  margin-top: 0.25rem;
}

.status-replaces {
  display: block;
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-top: 0.25rem;
}

.simulate-label {
  margin: 0 0 0.75rem;
  font-size: 0.85rem;
  color: var(--text-muted);
}

.simulate-hint {
  font-size: 0.8rem;
}

.simulate-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.simulate-button {
  font: inherit;
  font-size: 0.85rem;
  padding: 0.5rem 0.9rem;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text);
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease;
}

.simulate-button:hover,
.simulate-button:focus-visible {
  border-color: var(--accent);
  color: var(--accent);
}

.filter label {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: 0.5rem;
}

.filter-value {
  font-weight: 600;
  color: var(--text);
  font-variant-numeric: tabular-nums;
}

.filter input[type='range'] {
  width: 100%;
  accent-color: var(--accent);
}

.filter-hint {
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: var(--text-muted);
}

@media (max-width: 720px) {
  .panel {
    grid-template-columns: 1fr;
  }
}
</style>
