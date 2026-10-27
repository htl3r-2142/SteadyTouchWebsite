<script setup>
import { team, betreuung } from '../data/team.js'
</script>

<template>
  <section class="container impressum" aria-labelledby="impressum-titel">
    <h1 id="impressum-titel">Impressum</h1>
    <p class="hinweis">Offenlegung gemäß § 25 Mediengesetz</p>

    <p>
      HTL Rennweg<br />
      Rennweg 89b<br />
      1030 Wien<br />
      Österreich
    </p>
    <p>
      <strong>Vertreten durch:</strong><br />
      SteadyTouch Team
    </p>

    <h2>Projektteam</h2>
    <ul>
      <li v-for="person in team" :key="person.name">{{ person.name }}</li>
    </ul>

    <h2>Projektbetreuung</h2>
    <ul>
      <li v-for="person in betreuung" :key="person.name">{{ person.name }} - {{ person.rolle }}</li>
    </ul>

    <h2>Kontakt</h2>
    <ul class="kontakt">
      <li v-for="person in team" :key="person.email">
        <strong>{{ person.rollen.join('/') }}</strong> - {{ person.name }}<br />
        E-Mail: <a :href="'mailto:' + person.email">{{ person.email }}</a>
      </li>
    </ul>

    <h2>Projekt</h2>
    <p>
      SteadyTouch ist ein Diplomarbeitsprojekt der HTL Rennweg Wien.<br />
      Diese Website dient der Präsentation und Dokumentation im Rahmen der schulischen Ausbildung.
    </p>
  </section>
</template>

<style scoped>
.impressum {
  padding-top: 64px;
  padding-bottom: 32px;
}

h1 {
  color: var(--blau);
  font-size: 2.4rem;
  font-weight: 800;
  margin: 0 0 8px;
}

.hinweis {
  color: var(--text-hell);
  font-size: 0.9rem;
  margin-bottom: 32px;
}

h2 {
  color: var(--blau);
  font-size: 1.6rem;
  font-weight: 800;
  margin: 40px 0 16px;
}

p {
  margin: 0 0 16px;
  max-width: 70ch;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Abstand zwischen den Personen bei Kontakt */
.kontakt li + li {
  margin-top: 20px;
}

a {
  color: var(--blau);
  overflow-wrap: anywhere;
}

a:hover {
  color: var(--dunkelblau);
}

@media (max-width: 600px) {
  .impressum {
    padding-top: 40px;
  }

  h1 {
    font-size: 2.2rem;
  }

  h2 {
    font-size: 1.4rem;
  }
}
</style>
