<script setup>
defineProps({
  name: String,
  logo: String,
  url: String
})
</script>

<template>
  <li class="sponsor">
    <div class="logo-feld">
      <img :src="logo" :alt="'Logo von ' + name" />
    </div>

    <h3>{{ name }}</h3>
    <a v-if="url" :href="url">Zur Website von {{ name }}</a>
  </li>
</template>

<style scoped>
.sponsor {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: var(--hintergrund);
  border-radius: 24px;
  padding: 24px;
}

/* weißes Feld, weil viele Logos für hellen Hintergrund gemacht sind */
.logo-feld {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 150px;
  padding: 16px;
  background-color: var(--weiss);
  border-radius: 16px;
}

.logo-feld img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

h3 {
  width: 100%;
  color: var(--blau);
  font-size: 1.2rem;
  font-weight: 800;
  margin: 20px 0 0;
}

/* genug Höhe, damit man den Link gut trifft */
a {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  margin-top: 4px;
  color: var(--blau);
  font-size: 0.95rem;
  text-underline-offset: 3px;
}

a:hover {
  color: var(--dunkelblau);
}
</style>
