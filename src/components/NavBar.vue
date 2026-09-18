<script setup>
import logo from '../assets/logo.png'
</script>

<template>
  <header class="header">
    <div class="container header-inhalt">
      <RouterLink to="/" class="marke">
        <img :src="logo" alt="" width="47" height="51" />
        <span>SteadyTouch</span>
      </RouterLink>

      <nav aria-label="Hauptnavigation">
        <ul>
          <li><RouterLink to="/">Startseite</RouterLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  border-bottom: 1px solid var(--grau);
}

.header-inhalt {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
  gap: 16px;
}

.marke {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.2rem;
}

nav ul {
  display: flex;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;
}

nav a {
  display: inline-block;
  padding: 8px 4px;
  text-decoration: none;
  border-bottom: 3px solid transparent;
}

nav a:hover {
  border-bottom-color: var(--grau);
}

/* aktuelle Seite markieren (RouterLink setzt aria-current automatisch) */
nav a[aria-current='page'] {
  font-weight: 600;
  border-bottom-color: var(--gruen);
}
</style>
