<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: String,
  rollen: Array,
  email: String,
  bild: String
})

// E-Mail beim @ teilen, damit sie nur dort umbricht und nicht mitten im Wort
const emailName = computed(() => props.email.split('@')[0])
const emailDomain = computed(() => props.email.split('@')[1])
</script>

<template>
  <li class="team-karte">
    <img v-if="bild" :src="bild" :alt="'Foto von ' + name" class="foto" />
    <!-- solange wir noch keine Fotos haben -->
    <div v-else class="foto platzhalter" aria-hidden="true"></div>

    <div class="info">
      <h2>{{ name }}</h2>
      <p v-for="rolle in rollen" :key="rolle">{{ rolle }}</p>

      <a :href="'mailto:' + email" class="email">
        <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20">
          <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="2" />
          <path d="M3 7l9 6 9-6" fill="none" stroke="currentColor" stroke-width="2" />
        </svg>
        <span>{{ emailName }}<wbr />@{{ emailDomain }}</span>
      </a>
    </div>
  </li>
</template>

<style scoped>
/* eine Person = eine Reihe: Foto links, Infos rechts */
.team-karte {
  display: flex;
  gap: 28px;
  align-items: stretch;
  border: 2px solid var(--gruen);
  border-radius: 10px;
  padding: 20px;
}

.foto {
  width: 140px;
  flex-shrink: 0;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  /* eher oben ausschneiden, damit der Kopf nicht abgeschnitten wird */
  object-position: center 25%;
  border-radius: 8px;
}

.platzhalter {
  background-color: var(--grau);
}

.info {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
}

h2 {
  color: var(--gruen);
  font-size: 1.3rem;
  margin: 0 0 8px;
}

p {
  margin: 0;
  color: var(--text-hell);
}

/* Abstand zwischen Rollen und Linie */
p:last-of-type {
  margin-bottom: 16px;
}

/* E-Mail immer ganz unten, mit Linie darüber */
.email {
  margin-top: auto;
  padding-top: 12px;
  border-top: 1px solid var(--grau);
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.95rem;
  text-decoration: none;
  overflow-wrap: anywhere;
}

.email svg {
  flex-shrink: 0;
  color: var(--gruen);
}

.email span {
  text-decoration: underline;
}

.email:hover span {
  color: var(--gruen);
}

/* Handy: Foto über den Infos */
@media (max-width: 500px) {
  .team-karte {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .info {
    width: 100%;
  }

  .email {
    justify-content: center;
  }
}
</style>
