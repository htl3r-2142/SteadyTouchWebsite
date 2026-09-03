<script setup>
import { RouterLink } from 'vue-router'
import Logo from '../components/Logo.vue'
import ProgressBar from '../components/ProgressBar.vue'

// Platzhalter – hier später den echten Projektfortschritt eintragen (0-100).
const PROJECT_PROGRESS = 15
</script>

<template>
  <div>
    <section class="hero">
      <div class="hero-content">
        <span class="hero-eyebrow">Diplomarbeit &middot; HTL Rennweg &middot; 4BI</span>
        <h1 class="hero-title">SteadyTouch</h1>
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
  color: #f4f5f3;
  background:
    radial-gradient(ellipse 60% 45% at 22% 20%, rgba(95, 179, 179, 0.22), transparent 60%),
    radial-gradient(ellipse 55% 50% at 80% 75%, rgba(60, 90, 110, 0.35), transparent 65%),
    linear-gradient(160deg, #10151a 0%, #1a232a 45%, #0d1215 100%);
}

.hero-content {
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
  font-size: clamp(3rem, 10vw, 6.5rem);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin: 0;
  color: #f4f5f3;
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
