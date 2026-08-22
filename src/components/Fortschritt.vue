<template>
  <section id="fortschritt" class="section--panel section--wide">
    <div class="wrap">
      <div class="section-wide-grid">
        <span class="eyebrow">Fortschritt</span>
        <h2 class="serif">Wo wir gerade stehen</h2>

        <div class="progress-top">
          <span class="progress-pct">{{ progressPercent }}%</span>
          <span class="progress-updated">{{ lastUpdated }}</span>
        </div>
        <div class="progress-track">
          <div class="progress-fill" :style="{ width: fillWidth + '%' }"></div>
        </div>

        <div class="timeline">
          <div
            v-for="m in milestones"
            :key="m.label"
            class="t-row"
            :class="m.status"
          >
            <span class="t-dot"></span>
            <span class="label">{{ m.label }}</span>
            <span class="tag">{{ tagFor(m.status) }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// ====== HIER EINFACH ANPASSEN, WENN SICH DER FORTSCHRITT ÄNDERT ======
const progressPercent = 15 // Zahl zwischen 0 und 100 ändern
const lastUpdated = 'Zuletzt aktualisiert — 13.08.2026'

const milestones = [
  { label: 'Projektidee & Konzept', status: 'done' },       // done | active | open
  { label: 'Recherche (Accessibility, Tracking-Methoden)', status: 'active' },
  { label: 'Kamera-basiertes Gesten-Tracking (Prototyp)', status: 'open' },
  { label: 'Filter-/KI-Algorithmus zur Zitterreduktion', status: 'open' },
  { label: 'Testumgebung mit Beispiel-Apps', status: 'open' },
  { label: 'Evaluierung & Dokumentation', status: 'open' },
]
// =======================================================================

if (!Number.isFinite(progressPercent) || progressPercent < 0 || progressPercent > 100) {
  throw new RangeError(`Fortschritt muss zwischen 0 und 100 liegen: ${progressPercent}`)
}

const statusTags = {
  done: 'erledigt',
  active: 'in arbeit',
  open: 'offen',
}

function tagFor(status) {
  if (!Object.hasOwn(statusTags, status)) {
    throw new RangeError(`Unbekannter Meilenstein-Status: ${status}`)
  }

  return statusTags[status]
}

// Balken erst nach dem Einblenden der Seite animiert auffüllen
const fillWidth = ref(0)
onMounted(() => {
  requestAnimationFrame(() => {
    setTimeout(() => {
      fillWidth.value = progressPercent
    }, 150)
  })
})
</script>