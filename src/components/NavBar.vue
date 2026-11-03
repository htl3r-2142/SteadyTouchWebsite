<script setup>
import logo from '../assets/logo_horizontal_klein.png'
</script>

<template>
  <header class="header">
    <div class="container header-inhalt">
      <RouterLink to="/" class="marke">
        <!-- der Name ist Teil vom Bild, darum muss er im alt-Text stehen -->
        <img :src="logo" alt="SteadyTouch - zur Startseite" width="187" height="56" />
      </RouterLink>

      <nav aria-label="Hauptnavigation">
        <ul>
          <li><RouterLink to="/">Startseite</RouterLink></li>
          <li><RouterLink to="/kontakt">Kontakt</RouterLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
/* Header bleibt beim Scrollen oben stehen */
.header {
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: var(--hintergrund);
  border-bottom: 1px solid var(--flaeche);
}

.header-inhalt {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  min-height: 88px;
  gap: 8px 16px;
}

.marke {
  display: flex;
}

nav ul {
  display: flex;
  gap: 40px;
  list-style: none;
  margin: 0;
  padding: 0;
}

nav a {
  display: inline-block;
  padding: 10px 2px;
  color: var(--text);
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
  text-underline-offset: 6px;
}

/* aktuelle Seite: Farbe vom Logo und fett (RouterLink setzt aria-current automatisch) */
nav a[aria-current='page'] {
  color: var(--dunkelblau);
  font-weight: 700;
}

/* Handy */
@media (max-width: 500px) {
  .header-inhalt {
    min-height: 72px;
    padding-top: 8px;
    padding-bottom: 8px;
  }

  .marke img {
    width: 134px;
    height: 40px;
  }

  nav ul {
    gap: 16px;
  }
}
</style>
