<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
    validator: (v) => v >= 0 && v <= 100,
  },
})
</script>

<template>
  <div class="progress">
    <div class="progress-labels">
      <span class="progress-title">{{ label }}</span>
      <span class="progress-value">{{ value }}%</span>
    </div>
    <div
      class="progress-track"
      role="progressbar"
      :aria-valuenow="value"
      aria-valuemin="0"
      aria-valuemax="100"
      :aria-label="label"
    >
      <div class="progress-fill" :style="{ width: value + '%' }"></div>
    </div>
  </div>
</template>

<style scoped>
.progress {
  width: 100%;
}

.progress-labels {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

.progress-title {
  color: var(--text-muted);
}

.progress-value {
  font-weight: 600;
  color: var(--text);
  font-variant-numeric: tabular-nums;
}

.progress-track {
  width: 100%;
  height: 10px;
  border-radius: 999px;
  background: var(--track-bg);
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  border-radius: 999px;
  background: var(--accent);
  transition: width 0.4s ease;
}

@media (prefers-reduced-motion: reduce) {
  .progress-fill {
    transition: none;
  }
}
</style>
