<script setup>
import Sponsor from '../components/Sponsor.vue'
import { sponsoren } from '../data/sponsoren.js'
</script>

<template>
  <div class="container kopf">
    <h1>Sponsoren</h1>
    <p>Diese Unternehmen unterstützen uns bei unserer Diplomarbeit SteadyTouch.</p>
  </div>

  <!-- hellblauer Streifen mit den Sponsoren -->
  <section class="sponsoren-bereich" aria-labelledby="sponsoren-titel">
    <div class="container">
      <h2 id="sponsoren-titel">Besonderer Dank an unsere Sponsoren</h2>

      <ul class="sponsoren">
        <Sponsor
          v-for="sponsor in sponsoren"
          :key="sponsor.id"
          :id="sponsor.id"
          :name="sponsor.name"
          :logo="sponsor.logo"
          :url="sponsor.url"
        />
      </ul>
    </div>
  </section>
</template>

<style scoped>
.kopf {
  padding-top: 64px;
  padding-bottom: 48px;
}

h1 {
  color: var(--blau);
  font-size: 2.4rem;
  font-weight: 800;
  margin: 0 0 16px;
}

.kopf p {
  max-width: 70ch;
  margin: 0;
}

.sponsoren-bereich {
  background-color: var(--flaeche);
  padding: 64px 0 72px;
}

h2 {
  color: var(--blau);
  font-size: 1.8rem;
  font-weight: 800;
  text-align: center;
  margin: 0 0 56px;
}

/* 3 Spalten, also 2 Reihen bei 6 Sponsoren */
.sponsoren {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

/* Tablet: 2 Spalten */
@media (max-width: 900px) {
  .sponsoren {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}

/* Handy: untereinander */
@media (max-width: 600px) {
  .kopf {
    padding-top: 40px;
    padding-bottom: 32px;
  }

  h1 {
    font-size: 2.2rem;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 32px;
  }

  .sponsoren-bereich {
    padding: 48px 0;
  }

  .sponsoren {
    grid-template-columns: 1fr;
    max-width: 380px;
    margin: 0 auto;
  }
}
</style>
