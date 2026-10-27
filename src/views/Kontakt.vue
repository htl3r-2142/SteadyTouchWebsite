<script setup>
import Team from '../components/Team.vue'
import FolgtUns from '../components/FolgtUns.vue'
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

    <FolgtUns class="folgt-uns" />
  </section>
</template>

<style scoped>
.kontakt {
  padding-top: 72px;
  padding-bottom: 32px;
}

h1 {
  color: var(--blau);
  font-size: 3rem;
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
  max-width: 760px;
}

/* gleich breit wie die Teamkarten */
.folgt-uns {
  margin-top: 64px;
  max-width: 760px;
}

@media (max-width: 800px) {
  .kontakt {
    padding-top: 40px;
  }

  h1 {
    font-size: 2.4rem;
  }

  .einleitung {
    margin-bottom: 32px;
  }

  .folgt-uns {
    margin-top: 48px;
  }
}
</style>
