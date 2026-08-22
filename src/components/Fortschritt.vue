<template>
  <SectionBlock
    id="fortschritt"
    section-class="section--panel section--wide"
    eyebrow="Fortschritt"
    title="Wo wir gerade stehen"
    wide
  >
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
  </SectionBlock>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SectionBlock from './SectionBlock.vue'

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

function tagFor(status) {
  return status === 'done' ? 'erledigt' : status === 'active' ? 'in arbeit' : 'offen'
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
