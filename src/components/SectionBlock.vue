<template>
  <section :id="id" v-bind="sectionClass ? { class: sectionClass } : {}">
    <div class="wrap">
      <div :class="wide ? 'section-wide-grid' : 'section-grid'">
        <span class="eyebrow">{{ eyebrow }}</span>
        <template v-if="wide">
          <h2 class="serif">{{ title }}</h2>
          <slot />
        </template>
        <div v-else>
          <h2 class="serif">{{ title }}</h2>
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  eyebrow: { type: String, required: true },
  title: { type: String, required: true },
  id: { type: String, default: undefined },
  sectionClass: { type: [String, Array, Object], default: undefined },
  wide: { type: Boolean, default: false },
})
</script>
