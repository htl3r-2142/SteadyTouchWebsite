<script setup>
import Team from '../components/Team.vue'
import FolgtUns from '../components/FolgtUns.vue'
import { team } from '../data/team.js'
</script>

<template>
  <div class="container kopf">
    <h1>Team</h1>
    <p>
      Du hast Fragen zu SteadyTouch oder willst uns Feedback geben? Schreib uns einfach eine
      E-Mail.
    </p>
  </div>

  <!-- hellblauer Streifen mit den Teamkarten -->
  <section class="team-bereich" aria-labelledby="team-titel">
    <div class="container">
      <h2 id="team-titel">Wer steckt hinter SteadyTouch?</h2>

      <ul class="team">
        <Team
          v-for="person in team"
          :key="person.name"
          :name="person.name"
          :rollen="person.rollen"
          :email="person.email"
          :bild="person.bild"
          :bild-position="person.bildPosition"
        />
      </ul>
    </div>
  </section>

  <div class="container">
    <FolgtUns
      class="folgt-uns"
      :karte="false"
      text="Neuigkeiten und Einblicke in unser Projekt findet ihr auch auf Social Media."
    />
  </div>
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

.team-bereich {
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

/* 3 Karten nebeneinander */
.team {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

/* helle Trennlinie zwischen den Karten */
.team > li {
  position: relative;
}

.team > li + li::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: -22px;
  width: 4px;
  background-color: var(--hintergrund);
}

.folgt-uns {
  padding-top: 64px;
}

/* Tablet und Handy: Karten untereinander */
@media (max-width: 900px) {
  .team {
    grid-template-columns: 1fr;
    gap: 32px;
    max-width: 380px;
    margin: 0 auto;
  }

  .team > li + li::before {
    display: none;
  }
}

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

  .team-bereich {
    padding: 48px 0;
  }

  .folgt-uns {
    padding-top: 48px;
  }
}
</style>
