<script setup>
defineProps({
  id: String,
  name: String,
  logo: String,
  url: String
})
</script>

<template>
  <li :id="id" class="sponsor">
    <!-- mit url ist die ganze Karte ein Link, ohne url nur eine Karte -->
    <component
      :is="url ? 'a' : 'div'"
      :href="url || undefined"
      :aria-label="url ? 'Zur Website von ' + name : undefined"
      class="karte"
    >
      <div class="logo-feld">
        <!-- bei einem Link sagt schon das aria-label alles, darum hier kein alt-Text -->
        <img :src="logo" :alt="url ? '' : 'Logo von ' + name" />
      </div>

      <h3>{{ name }}</h3>
    </component>
  </li>
</template>

<style scoped>
.sponsor {
  display: flex;
}

.karte {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  text-align: center;
  text-decoration: none;
  background-color: var(--hintergrund);
  border-radius: 24px;
  padding: 24px;
}

/* zeigt beim Drüberfahren, dass man die Karte anklicken kann */
a.karte:hover {
  box-shadow: 0 0 0 3px var(--blau);
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
</style>
