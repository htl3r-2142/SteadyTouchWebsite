<script setup>
import { ref } from 'vue'
import { gestures } from '../data/gestures'

// Solange keine Kamera/Gestenerkennung angebunden ist, kann hier eine Geste
// simuliert werden, um zu zeigen, wie das Echtzeit-Feedback reagieren wird.
const activeGesture = ref(null)
let resetTimer = null

function simulate(gesture) {
  activeGesture.value = gesture
  clearTimeout(resetTimer)
  resetTimer = setTimeout(() => {
    activeGesture.value = null
  }, 2200)
}

const filterStrength = ref(50)
</script>

<template>
  <div class="panel">
    <div class="camera">
      <div class="camera-placeholder">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M3 7a2 2 0 0 1 2-2h2l1.2-1.6A2 2 0 0 1 9.8 2.6h4.4a2 2 0 0 1 1.6.8L17 5h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"
            stroke="currentColor"
            stroke-width="1.4"
          />
          <circle cx="12" cy="12" r="3.4" stroke="currentColor" stroke-width="1.4" />
        </svg>
        <p>Kamera-Vorschau folgt in einer späteren Version</p>
      </div>
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
          Passt an, wie stark Zittern aus den erkannten Bewegungen herausgefiltert
          wird.
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

.camera {
  display: flex;
}

.camera-placeholder {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  aspect-ratio: 4 / 3;
  border: 1px dashed var(--border);
  border-radius: 8px;
  color: var(--text-muted);
  text-align: center;
  padding: 1.5rem;
}

.camera-placeholder p {
  font-size: 0.85rem;
  max-width: 20ch;
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
