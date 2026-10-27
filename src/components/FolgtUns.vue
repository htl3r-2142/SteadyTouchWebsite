<script setup>
import SocialLinks from './SocialLinks.vue'
</script>

<template>
  <section class="folgt-uns" aria-labelledby="folgt-uns-titel">
    <h2 id="folgt-uns-titel">Folgt uns</h2>
    <p>Wollt ihr mehr über unser Projekt wissen, dann folgt uns auf Social Media.</p>
    <SocialLinks />
  </section>
</template>

<style scoped>
.folgt-uns {
  background-color: var(--flaeche);
  border-radius: 24px;
  padding: 28px 40px 20px;
  color: var(--blau);
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
  .folgt-uns {
    padding: 24px 20px 16px;
    border-radius: 18px;
  }

  h2 {
    font-size: 1.6rem;
  }
}
</style>
