<script setup>
const jahr = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container spalten">
      <div>
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
          <li><RouterLink to="/kontakt">Kontakt</RouterLink></li>
        </ul>
      </nav>

      <nav aria-label="Rechtliches">
        <h2>Rechtliches</h2>
        <ul>
          <li><RouterLink to="/impressum">Impressum</RouterLink></li>
        </ul>
      </nav>
    </div>

    <div class="container">
      <p class="copyright">&copy; {{ jahr }} SteadyTouch &middot; HTL Rennweg Wien</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--dunkelblau);
  color: var(--weiss);
  padding-top: 48px;
  margin-top: 64px;
}

.spalten {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 32px;
}

.spalten > div {
  max-width: 400px;
}

h2 {
  font-size: 1rem;
  margin: 0 0 12px;
}

p {
  margin: 0;
  font-size: 0.9rem;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.copyright {
  border-top: 1px solid #5a6b7c;
  margin-top: 40px;
  padding: 20px 0;
  text-align: center;
  font-size: 0.85rem;
}
</style>
