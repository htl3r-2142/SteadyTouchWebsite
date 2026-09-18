<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <!-- Link zum Überspringen der Navigation (für Tastatur / Screenreader) -->
  <a href="#main" class="skip-link">Zum Inhalt springen</a>

  <NavBar />

  <main id="main" tabindex="-1">
    <RouterView />
  </main>

  <Footer />
</template>

<style scoped>
main {
  flex: 1;
}

main:focus {
  outline: none;
}
</style>
