<script setup>
import SocialLinks from './SocialLinks.vue'

// karte = mit hellblauem Hintergrund (Startseite), ohne = einfach auf der Seite (Kontakt)
defineProps({
  text: {
    type: String,
    default: 'Wollt ihr mehr über unser Projekt wissen, dann folgt uns auf Social Media.'
  },
  karte: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <section class="folgt-uns" :class="{ karte: karte }" aria-labelledby="folgt-uns-titel">
    <h2 id="folgt-uns-titel">Folgt uns</h2>
    <p>{{ text }}</p>
    <SocialLinks />
  </section>
</template>

<style scoped>
.folgt-uns {
  color: var(--blau);
}

.karte {
  background-color: var(--flaeche);
  border-radius: 24px;
  padding: 28px 40px 20px;
}

h2 {
  font-size: 2rem;
  font-weight: 800;
  margin: 0 0 12px;
}

p {
  color: var(--text);
  margin: 0 0 8px;
}

@media (max-width: 600px) {
  .karte {
    padding: 24px 20px 16px;
    border-radius: 18px;
  }

  h2 {
    font-size: 1.6rem;
  }
}
</style>
