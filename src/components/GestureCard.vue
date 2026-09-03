<script setup>
defineProps({
  gesture: {
    type: Object,
    required: true,
  },
})

defineEmits(['select'])
</script>

<template>
  <button type="button" class="card" @click="$emit('select', gesture)">
    <span class="card-icon" aria-hidden="true">
      <svg v-if="gesture.id === 'tap'" width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.4" />
        <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1" opacity="0.4" />
      </svg>
      <svg v-else-if="gesture.id === 'hold'" width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.4" />
        <path d="M12 8v4l2.5 2.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" />
      </svg>
      <svg v-else-if="gesture.id === 'swipe'" width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M4 12h13" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" />
        <path d="M13 7l5 5-5 5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <svg v-else-if="gesture.id === 'drag'" width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="5" width="6" height="6" rx="1" stroke="currentColor" stroke-width="1.4" opacity="0.5" />
        <rect x="13" y="13" width="6" height="6" rx="1" stroke="currentColor" stroke-width="1.4" />
        <path d="M11 9l6 6" stroke="currentColor" stroke-width="1.2" stroke-dasharray="1.5 2.2" />
      </svg>
      <svg v-else width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M9 4v5H4M15 20v-5h5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M20 4l-5 5M4 20l5-5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" />
      </svg>
    </span>
    <span class="card-body">
      <span class="card-name">{{ gesture.name }}</span>
      <span class="card-replaces">{{ gesture.replaces }}</span>
      <span class="card-short">{{ gesture.short }}</span>
    </span>
  </button>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.9rem;
  padding: 1.5rem;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--panel-bg);
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.card:hover,
.card:focus-visible {
  border-color: var(--accent);
  transform: translateY(-2px);
}

.card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--accent-bg);
  color: var(--accent);
}

.card-body {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.card-name {
  font-weight: 600;
  font-size: 1.05rem;
}

.card-replaces {
  font-size: 0.8rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--accent);
}

.card-short {
  font-size: 0.88rem;
  color: var(--text-muted);
}
</style>
