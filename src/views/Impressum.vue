<script setup>
import { team } from '../data/team.js'
</script>

<template>
  <section class="container impressum" aria-labelledby="impressum-titel">
    <h1 id="impressum-titel">Impressum</h1>
    <p>Offenlegung gemäß § 25 Mediengesetz</p>

    <h2>Medieninhaber und Herausgeber</h2>
    <ul>
      <li v-for="person in team" :key="person.name">{{ person.name }}</li>
    </ul>
    <!-- Wohnort vom Medieninhaber, reicht als Ort (keine genaue Adresse nötig) -->
    <p>Wohnort: Wien, Österreich</p>
    <h2>Diplomarbeitsprojekt im Rahmen der:</h2>
    <p>
      HTL Rennweg<br />
      Rennweg 89b<br />
      1030 Wien<br />
      Österreich
    </p>


    <h2>Kontakt</h2>
    <ul>
      <li v-for="person in team" :key="person.email">
        <a :href="'mailto:' + person.email">{{ person.email }}</a>
      </li>
    </ul>

    <h2>Grundlegende Richtung</h2>
    <p>
      Diese Website stellt das Diplomarbeitsprojekt SteadyTouch vor. Sie informiert über die Idee,
      das Ziel und den Fortschritt des Projekts. Die Website ist nicht kommerziell.
    </p>

    <h2>Projekt</h2>
    <p>
      SteadyTouch ist eine Diplomarbeit an der Höheren Technischen Lehranstalt (HTL) Rennweg in
      Wien.
    </p>

    <h2>Urheberrecht</h2>
    <p>
      Die Texte und das Logo auf dieser Website wurden von uns erstellt. Eine Verwendung ist nur
      nach Rücksprache mit uns erlaubt.
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
  font-size: 3rem;
  font-weight: 800;
  margin: 0 0 8px;
}

h2 {
  color: var(--blau);
  font-size: 1.3rem;
  margin: 40px 0 8px;
}

p {
  margin: 0 0 8px;
  max-width: 70ch;
}

ul {
  list-style: none;
  margin: 0 0 8px;
  padding: 0;
}

a {
  overflow-wrap: anywhere;
}

a {
  color: var(--blau);
}

a:hover {
  color: var(--dunkelblau);
}

@media (max-width: 800px) {
  .impressum {
    padding-top: 40px;
  }

  h1 {
    font-size: 2.2rem;
  }
}
</style>
