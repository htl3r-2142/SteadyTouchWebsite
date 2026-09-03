<script setup>
import { onMounted, onUnmounted } from 'vue'

const props = defineProps({
  gesture: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['close'])

function handleKeydown(event) {
  if (event.key === 'Escape') emit('close')
}

onMounted(() => document.addEventListener('keydown', handleKeydown))
onUnmounted(() => document.removeEventListener('keydown', handleKeydown))
</script>

<template>
  <div class="overlay" @click.self="$emit('close')">
    <div
      class="dialog"
      role="dialog"
      aria-modal="true"
      :aria-label="`Geste: ${gesture.name}`"
    >
      <button type="button" class="close" aria-label="Schließen" @click="$emit('close')">
        &times;
      </button>

      <div class="video">
        <div class="video-placeholder">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M8 5v14l11-7-11-7Z" fill="currentColor" />
          </svg>
          <p>Demo-Video folgt</p>
        </div>
      </div>

      <div class="content">
        <span class="eyebrow">{{ gesture.replaces }}</span>
        <h3>{{ gesture.name }}</h3>
        <ol class="steps">
          <li v-for="(step, i) in gesture.steps" :key="i">{{ step }}</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: var(--overlay-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.dialog {
  position: relative;
  width: 100%;
  max-width: 640px;
  max-height: 90vh;
  overflow-y: auto;
  background: var(--bg);
  border-radius: 14px;
  border: 1px solid var(--border);
}

.close {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--text);
  font-size: 1.4rem;
  line-height: 1;
  cursor: pointer;
  z-index: 1;
}

.video {
  aspect-ratio: 16 / 9;
  background: #10151a;
  border-radius: 14px 14px 0 0;
}

.video-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  color: rgba(244, 245, 243, 0.6);
}

.video-placeholder p {
  font-size: 0.85rem;
}

.content {
  padding: 1.75rem 2rem 2rem;
}

.eyebrow {
  display: block;
  font-size: 0.8rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.4rem;
}

.content h3 {
  margin: 0 0 1.25rem;
  font-size: 1.5rem;
  font-weight: 600;
}

.steps {
  margin: 0;
  padding-left: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  color: var(--text-muted);
}

.steps li::marker {
  color: var(--accent);
  font-weight: 600;
}

@media (max-width: 600px) {
  .content {
    padding: 1.5rem 1.25rem 1.75rem;
  }
}
</style>
