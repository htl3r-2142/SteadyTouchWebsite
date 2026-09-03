<script setup>
import { ref } from 'vue'
import { gestures } from '../data/gestures'
import LiveFeedbackPanel from '../components/LiveFeedbackPanel.vue'
import GestureCard from '../components/GestureCard.vue'
import GestureDetailModal from '../components/GestureDetailModal.vue'

const selectedGesture = ref(null)
</script>

<template>
  <div class="page">
    <section class="header">
      <h1>Übungsbereich</h1>
      <p>
        Der Übungsbereich ist ein sicherer Raum, um die Gestensteuerung zu
        erlernen und zu testen, ohne dabei echte Eingaben auszulösen. Probier
        die Gesten aus und erhalte direktes visuelles Feedback zur Erkennung.
      </p>
    </section>

    <section class="feedback-section" aria-labelledby="feedback-heading">
      <h2 id="feedback-heading">Live-Feedback</h2>
      <LiveFeedbackPanel />
    </section>

    <section class="gestures-section" aria-labelledby="gestures-heading">
      <h2 id="gestures-heading">Verfügbare Gesten</h2>
      <p class="section-hint">
        Auf eine Geste klicken, um die genaue Ausführung als Video und
        Schritt-für-Schritt-Anleitung zu sehen.
      </p>
      <div class="gesture-grid">
        <GestureCard
          v-for="gesture in gestures"
          :key="gesture.id"
          :gesture="gesture"
          @select="selectedGesture = $event"
        />
      </div>
    </section>

    <GestureDetailModal
      v-if="selectedGesture"
      :gesture="selectedGesture"
      @close="selectedGesture = null"
    />
  </div>
</template>

<style scoped>
.page {
  max-width: 960px;
  margin: 0 auto;
  padding: 8.5rem 1.5rem 5rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.header {
  max-width: 640px;
}

.header h1 {
  margin-bottom: 1rem;
}

.header p {
  color: var(--text-muted);
}

.feedback-section h2,
.gestures-section h2 {
  margin-bottom: 1.25rem;
}

.section-hint {
  color: var(--text-muted);
  font-size: 0.9rem;
  margin: -0.75rem 0 1.5rem;
}

.gesture-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.25rem;
}

@media (max-width: 600px) {
  .page {
    padding: 6.5rem 1.25rem 3.5rem;
  }
}
</style>
