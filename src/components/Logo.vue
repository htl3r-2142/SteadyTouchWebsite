<script setup>
defineProps({
  size: {
    type: Number,
    default: 40,
  },
})
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="SteadyTouch Logo"
  >
    <circle cx="24" cy="24" r="20" stroke="currentColor" stroke-width="1.5" />
    <path
      d="M9 24 Q13.5 15 18 24 Q22.5 33 27 24 L39 24"
      stroke="currentColor"
      stroke-width="1.75"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
    />
  </svg>
</template>
