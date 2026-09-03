<script setup>
import { RouterLink } from 'vue-router'

const links = [
  { to: '/', label: 'Home' },
  { to: '/uebungsbereich', label: 'Übungsbereich' },
  { to: '/team', label: 'Team' },
  { to: '/impressum', label: 'Impressum' },
]
</script>

<template>
  <footer class="footer">
    <nav class="footer-links" aria-label="Footer-Navigation">
      <RouterLink v-for="link in links" :key="link.to" :to="link.to">
        {{ link.label }}
      </RouterLink>
    </nav>
    <p>Diplomarbeit &middot; HTL Rennweg &middot; 4BI</p>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding: 2.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}

.footer-links a {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.85rem;
  letter-spacing: 0.03em;
}

.footer-links a:hover {
  color: var(--accent);
}

.footer p {
  font-size: 0.8rem;
  color: var(--text-muted);
}
</style>
