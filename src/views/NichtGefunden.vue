<template>
  <section class="container nicht-gefunden" aria-labelledby="nicht-gefunden-titel">
    <h1 id="nicht-gefunden-titel">Seite nicht gefunden</h1>
    <p>Diese Seite gibt es leider nicht. Vielleicht hat sich ein Tippfehler in die Adresse eingeschlichen.</p>
    <RouterLink to="/" class="zurueck">Zur Startseite</RouterLink>
  </section>
</template>

<style scoped>
.nicht-gefunden {
  padding-top: 96px;
  padding-bottom: 64px;
}

h1 {
  color: var(--blau);
  font-size: 2.4rem;
  font-weight: 800;
  margin: 0 0 16px;
}

p {
  max-width: 60ch;
  margin: 0 0 32px;
}

/* großer Link, gut zu treffen */
.zurueck {
  display: inline-block;
  padding: 14px 28px;
  min-height: 44px;
  background-color: var(--dunkelblau);
  color: var(--weiss);
  border-radius: 10px;
  font-weight: 600;
  text-decoration: none;
}

.zurueck:hover {
  background-color: var(--blau);
}
</style>
