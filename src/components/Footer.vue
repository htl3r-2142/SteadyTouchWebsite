<script setup>
import { social } from '../data/social.js'

const jahr = new Date().getFullYear()

// nur Profile mit Link anzeigen
const socialLinks = social.filter((s) => s.url)
</script>

<template>
  <footer class="footer dunkel">
    <div class="container spalten">
      <div class="info">
        <h2>SteadyTouch</h2>
        <p>
          Assistive Gestensteuerung zur Stabilisierung von Handbewegungen für Menschen mit motorischen Einschränkungen.<br>
          <strong>Diplomarbeitsprojekt der HTL Rennweg Wien</strong>
        </p>
      </div>

      <nav aria-label="Projekt">
        <h2>Projekt</h2>
        <ul>
          <li><RouterLink to="/">Startseite</RouterLink></li>
        </ul>
      </nav>

      <nav aria-label="Rechtliches">
        <h2>Rechtliches</h2>
        <ul>
          <li><RouterLink to="/kontakt">Kontakt</RouterLink></li>
          <li><RouterLink to="/impressum">Impressum</RouterLink></li>
        </ul>
      </nav>

      <div>
        <h2>Social Media</h2>
        <ul>
          <li v-for="link in socialLinks" :key="link.name">
            <a :href="link.url">{{ link.name }}</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="container">
      <p class="copyright">&copy; {{ jahr }} SteadyTouch &middot; HTL Rennweg Wien</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--dunkelblau);
  color: var(--hintergrund);
  padding-top: 56px;
  margin-top: 64px;
}

/* 4 Spalten, die erste ist breiter */
.spalten {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
}

.info {
  max-width: 400px;
}

h2 {
  color: var(--weiss);
  font-size: 1.05rem;
  margin: 0 0 14px;
}

p {
  margin: 0;
  font-size: 0.95rem;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* genug Abstand, damit man die Links gut trifft */
li a {
  display: inline-block;
  padding: 4px 0;
  font-size: 0.95rem;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.copyright {
  border-top: 1px solid #4a5a6b;
  margin-top: 48px;
  padding: 20px 0;
  text-align: center;
  font-size: 0.85rem;
}

/* Tablet: 2 Spalten */
@media (max-width: 800px) {
  .spalten {
    grid-template-columns: 1fr 1fr;
    gap: 32px 24px;
  }

  .info {
    grid-column: 1 / -1;
  }
}

/* Handy: alles untereinander */
@media (max-width: 450px) {
  .spalten {
    grid-template-columns: 1fr;
  }
}
</style>
