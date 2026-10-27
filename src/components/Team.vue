<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: String,
  rollen: Array,
  email: String,
  bild: String,
  bildPosition: {
    type: String,
    default: 'center 25%'
  }
})

// E-Mail beim @ teilen, damit sie nur dort umbricht und nicht mitten im Wort
const emailName = computed(() => props.email.split('@')[0])
const emailDomain = computed(() => props.email.split('@')[1])
</script>

<template>
  <li class="team-karte">
    <img
      v-if="bild"
      :src="bild"
      :alt="'Foto von ' + name"
      class="foto"
      :style="{ objectPosition: bildPosition }"
    />
    <!-- falls noch kein Foto da ist -->
    <div v-else class="foto platzhalter" aria-hidden="true"></div>

    <h3>{{ name }}</h3>
    <p class="rollen">
      <span v-for="rolle in rollen" :key="rolle">{{ rolle }}</span>
    </p>

    <a :href="'mailto:' + email" class="email">
      <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18">
        <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.8" />
        <path d="M3 7l9 6 9-6" fill="none" stroke="currentColor" stroke-width="1.8" />
      </svg>
      <span>{{ emailName }}<wbr />@{{ emailDomain }}</span>
    </a>
  </li>
</template>

<style scoped>
.team-karte {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: var(--hintergrund);
  border-radius: 24px;
  padding: 24px 18px 12px;
}

/* rundes Foto */
.foto {
  width: 100%;
  max-width: 230px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 50%;
  /* hellblauer Ring, damit man den Kreis auch bei weißem Fotohintergrund sieht */
  border: 4px solid var(--flaeche);
}

.platzhalter {
  background-color: var(--grau);
}

h3 {
  width: 100%;
  color: var(--blau);
  font-size: 1.2rem;
  font-weight: 800;
  margin: 24px 0 0;
  padding-top: 20px;
  border-top: 2px solid var(--flaeche);
}

.rollen {
  display: flex;
  flex-direction: column;
  margin: 12px 0 20px;
  line-height: 1.45;
}

/* E-Mail immer ganz unten, mit Linie darüber */
.email {
  width: 100%;
  margin-top: auto;
  padding: 12px 0;
  border-top: 2px solid var(--flaeche);
  min-height: 44px;
  font-size: 0.82rem;
  text-decoration: none;
  overflow-wrap: anywhere;
}

/* Icon steht direkt vor dem Text, auch wenn die Adresse umbricht */
.email svg {
  vertical-align: -4px;
  margin-right: 6px;
  color: var(--text-hell);
}

.email:hover span {
  color: var(--blau);
  text-decoration: underline;
}
</style>
