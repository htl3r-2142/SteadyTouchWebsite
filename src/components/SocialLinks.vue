<script setup>
import { social } from '../data/social.js'

// nur Profile anzeigen, bei denen schon ein Link eingetragen ist
const links = social.filter((s) => s.url)
</script>

<template>
  <ul class="social">
    <li v-for="link in links" :key="link.name">
      <a :href="link.url">
        <!-- Instagram Icon -->
        <svg v-if="link.name === 'Instagram'" aria-hidden="true" viewBox="0 0 24 24" width="24" height="24">
          <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2" />
          <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2" />
          <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
        </svg>
        
        <!-- Facebook Icon -->
        <svg v-if="link.name === 'Facebook'" aria-hidden="true" viewBox="0 0 24 24" width="24" height="24">
          <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2" />
          <path d="M16 8h-2a2 2 0 0 0-2 2v11M9 13h6" fill="none" stroke="currentColor" stroke-width="2" />
        </svg>

        <span>{{ link.name }}</span>
      </a>
    </li>
  </ul>
</template>

<style scoped>
.social {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px 24px;
}

/* große Klickfläche (mind. 44px), damit man den Link auch mit zittriger Hand trifft */
a {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-height: 44px;
  padding: 0 4px;
  text-decoration: none;
  font-weight: 600;
}

svg {
  flex-shrink: 0;
}

a:hover span {
  text-decoration: underline;
}
</style>
