<script setup>
import Team from '../components/Team.vue'
import { team } from '../data/team.js'
</script>

<template>
  <section class="container kontakt" aria-labelledby="kontakt-titel">
    <h1 id="kontakt-titel">Kontakt</h1>
    <p class="einleitung">
      Du hast Fragen zu SteadyTouch oder willst uns Feedback geben? Schreib uns einfach eine
      E-Mail.
    </p>

    <ul class="team">
      <Team
        v-for="person in team"
        :key="person.name"
        :name="person.name"
        :rollen="person.rollen"
        :email="person.email"
        :bild="person.bild"
      />
    </ul>
  </section>
</template>

<style scoped>
.kontakt {
  padding-top: 64px;
  padding-bottom: 32px;
}

h1 {
  color: var(--gruen);
  font-size: 2.6rem;
  font-weight: 800;
  margin: 0 0 16px;
}

.einleitung {
  max-width: 70ch;
  margin: 0 0 48px;
}

.team {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 700px;
}

@media (max-width: 800px) {
  .kontakt {
    padding-top: 40px;
  }

  h1 {
    font-size: 2.2rem;
  }
}
</style>
