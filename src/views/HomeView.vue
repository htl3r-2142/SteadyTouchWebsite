<script setup>
import { defineAsyncComponent } from 'vue'
import { RouterLink } from 'vue-router'
import Logo from '../components/Logo.vue'
import ProgressBar from '../components/ProgressBar.vue'

// Async: keeps three.js out of the initial bundle so it doesn't delay first paint.
const NetworkGraphic3D = defineAsyncComponent(() => import('../components/NetworkGraphic3D.vue'))

// Platzhalter – hier später den echten Projektfortschritt eintragen (0-100).
const PROJECT_PROGRESS = 15

const TITLE = 'STEADYTOUCH'
// Deterministic per-letter scatter so the headline visibly "settles" on load,
// echoing the tremor-to-steady idea in the typography itself.
const titleLetters = TITLE.split('').map((char, i) => {
  const seed = i * 137.5
  const dx = (Math.sin(seed) * 26).toFixed(1)
  const dy = (Math.cos(seed * 1.7) * 22 - 14).toFixed(1)
  const dr = (Math.sin(seed * 0.6) * 18).toFixed(1)
  return { char, style: { '--i': i, '--dx': `${dx}px`, '--dy': `${dy}px`, '--dr': `${dr}deg` } }
})
</script>

<template>
  <div>
    <section class="hero">
      <NetworkGraphic3D class="hero-canvas" />
      <div class="hero-vignette" aria-hidden="true"></div>
      <div class="hero-content">
        <span class="hero-eyebrow">Diplomarbeit &middot; HTL Rennweg &middot; 4BI</span>
        <h1 class="hero-title">
          <span
            v-for="(letter, i) in titleLetters"
            :key="i"
            class="hero-letter"
            :style="letter.style"
            >{{ letter.char }}</span
          >
        </h1>
        <p class="hero-subtitle">Stabile Gestensteuerung für digitale Interfaces</p>
        <Logo :size="40" class="hero-logo" />
        <RouterLink to="/uebungsbereich" class="hero-cta">
          Übungsbereich entdecken
          <span aria-hidden="true">&rarr;</span>
        </RouterLink>
      </div>
    </section>

    <section class="intro">
      <h2>Über das Projekt</h2>
      <p>
        SteadyTouch ist ein kamerabasiertes System, das Handbewegungen
        erkennt und Zittern herausfiltert, um Menschen mit motorischen
        Einschränkungen – etwa bei Parkinson, Tremor oder MS – eine
        stabile Gestensteuerung für digitale Interfaces zu ermöglichen.
        Eine Web-App mit simuliertem Betriebssystem und Beispiel-Apps
        wie Telefon oder Notizen macht die Steuerung direkt erlebbar.
      </p>
    </section>

    <section class="progress-section" aria-labelledby="progress-heading">
      <h2 id="progress-heading">Projektfortschritt</h2>
      <ProgressBar label="Aktueller Stand" :value="PROJECT_PROGRESS" />
    </section>
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 6rem 1.5rem;
  overflow: hidden;
  color: #f4f5f3;
  background:
    radial-gradient(ellipse 60% 45% at 22% 20%, rgba(95, 179, 179, 0.22), transparent 60%),
    radial-gradient(ellipse 55% 50% at 80% 75%, rgba(60, 90, 110, 0.35), transparent 65%),
    linear-gradient(160deg, #10151a 0%, #1a232a 45%, #0d1215 100%);
}

.hero-canvas {
  z-index: 0;
}

.hero-vignette {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background: radial-gradient(ellipse 65% 55% at 50% 46%, rgba(9, 13, 16, 0.62), transparent 72%);
}

.hero-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 720px;
}

.hero-eyebrow {
  font-size: 0.8rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(244, 245, 243, 0.65);
  margin-bottom: 1.75rem;
}

.hero-title {
  font-family: var(--font-display);
  font-weight: 300;
  font-size: clamp(2.2rem, 8vw, 6.5rem);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  white-space: nowrap;
  margin: 0;
  color: #f4f5f3;
  text-shadow: 0 2px 24px rgba(5, 8, 10, 0.55);
}

.hero-letter {
  display: inline-block;
  animation: letter-settle 900ms cubic-bezier(0.16, 1.4, 0.3, 1) both;
  animation-delay: calc(var(--i) * 45ms + 150ms);
}

@keyframes letter-settle {
  from {
    transform: translate(var(--dx), var(--dy)) rotate(var(--dr));
    opacity: 0;
    filter: blur(2px);
  }
  to {
    transform: none;
    opacity: 1;
    filter: blur(0);
  }
}

.hero-subtitle,
.hero-logo,
.hero-cta {
  animation: fade-up 700ms ease both;
  animation-delay: 900ms;
}

.hero-logo {
  animation-delay: 1000ms;
}

.hero-cta {
  animation-delay: 1100ms;
}

@keyframes fade-up {
  from {
    transform: translateY(10px);
    opacity: 0;
  }
  to {
    transform: none;
    opacity: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-letter,
  .hero-subtitle,
  .hero-logo,
  .hero-cta {
    animation: none;
    opacity: 1;
    transform: none;
    filter: none;
  }
}

.hero-subtitle {
  font-family: var(--font-display);
  font-size: clamp(0.95rem, 2vw, 1.15rem);
  letter-spacing: 0.06em;
  color: rgba(244, 245, 243, 0.75);
  margin: 1rem 0 0;
}

.hero-logo {
  color: rgba(244, 245, 243, 0.85);
  margin-top: 2.5rem;
}

.hero-cta {
  margin-top: 3rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(244, 245, 243, 0.85);
  text-decoration: none;
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding-bottom: 3px;
  border-bottom: 1px solid rgba(244, 245, 243, 0.35);
  transition: color 0.2s ease, border-color 0.2s ease;
}

.hero-cta:hover {
  color: #f4f5f3;
  border-color: var(--accent-light);
}

.intro,
.progress-section {
  max-width: 640px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
}

.intro h2,
.progress-section h2 {
  margin: 0 0 1rem;
}

.intro p {
  color: var(--text-muted);
}

.progress-section {
  border-top: 1px solid var(--border);
  padding-top: 3rem;
}

@media (max-width: 600px) {
  .hero {
    padding: 5rem 1.25rem;
  }

  .intro,
  .progress-section {
    padding: 3rem 1.25rem;
  }
}
</style>
