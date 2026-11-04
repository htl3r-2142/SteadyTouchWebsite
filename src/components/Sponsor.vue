<script setup>
defineProps({
  name: String,
  logo: String,
  url: String
})
</script>

<template>
  <li class="sponsor">
    <!-- mit url ist das Logo ein Link, ohne url nur ein Bild -->
    <component :is="url ? 'a' : 'div'" :href="url || undefined" class="logo-feld">
      <!-- bei einem Link sagt der alt-Text, wohin er führt (für Screenreader) -->
      <img :src="logo" :alt="url ? 'Zur Website von ' + name : 'Logo von ' + name" />
    </component>

    <h3>{{ name }}</h3>
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

/* zeigt beim Drüberfahren, dass man das Logo anklicken kann */
a.logo-feld:hover {
  box-shadow: 0 0 0 2px var(--blau);
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
</style>
