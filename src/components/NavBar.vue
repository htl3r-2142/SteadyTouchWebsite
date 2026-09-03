<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import Logo from './Logo.vue'

const links = [
  { to: '/', label: 'Home' },
  { to: '/uebungsbereich', label: 'Übungsbereich' },
  { to: '/team', label: 'Team' },
  { to: '/impressum', label: 'Impressum' },
]

const menuOpen = ref(false)
</script>

<template>
  <header class="nav">
    <RouterLink to="/" class="nav-brand" @click="menuOpen = false">
      <Logo :size="28" />
      <span>SteadyTouch</span>
    </RouterLink>

    <nav class="nav-links" aria-label="Hauptnavigation">
      <RouterLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="nav-link"
      >
        {{ link.label }}
      </RouterLink>
    </nav>

    <button
      type="button"
      class="nav-toggle"
      :aria-expanded="menuOpen"
      aria-controls="mobile-menu"
      :aria-label="menuOpen ? 'Menü schließen' : 'Menü öffnen'"
      @click="menuOpen = !menuOpen"
    >
      <span class="nav-toggle-bar" :class="{ open: menuOpen }"></span>
    </button>

    <Transition name="fade">
      <nav
        v-if="menuOpen"
        id="mobile-menu"
        class="nav-mobile"
        aria-label="Mobile Navigation"
      >
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="nav-mobile-link"
          @click="menuOpen = false"
        >
          {{ link.label }}
        </RouterLink>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 76px;
  background: rgba(13, 17, 20, 0.55);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: #f4f5f3;
  text-decoration: none;
  font-family: var(--font-display);
  font-size: 1rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.nav-links {
  display: flex;
  gap: 2.25rem;
}

.nav-link {
  color: rgba(244, 245, 243, 0.8);
  text-decoration: none;
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding-bottom: 4px;
  border-bottom: 1px solid transparent;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.nav-link:hover {
  color: #f4f5f3;
}

.nav-link.router-link-exact-active {
  color: #f4f5f3;
  border-bottom-color: var(--accent-light);
}

.nav-toggle {
  display: none;
  width: 32px;
  height: 32px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  align-items: center;
  justify-content: center;
}

.nav-toggle-bar,
.nav-toggle-bar::before,
.nav-toggle-bar::after {
  content: '';
  display: block;
  width: 22px;
  height: 1.5px;
  background: #f4f5f3;
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.nav-toggle-bar::before {
  transform: translateY(-7px);
}

.nav-toggle-bar::after {
  transform: translateY(5.5px);
}

.nav-toggle-bar.open {
  background: transparent;
}

.nav-toggle-bar.open::before {
  transform: translateY(0) rotate(45deg);
}

.nav-toggle-bar.open::after {
  transform: translateY(-1.5px) rotate(-45deg);
}

.nav-mobile {
  position: fixed;
  top: 76px;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  background: rgba(13, 17, 20, 0.97);
  padding: 1.5rem 2rem 2rem;
  gap: 1.25rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.nav-mobile-link {
  color: #f4f5f3;
  text-decoration: none;
  font-size: 1rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 760px) {
  .nav {
    padding: 0 1.25rem;
    height: 64px;
  }

  .nav-mobile {
    top: 64px;
  }

  .nav-links {
    display: none;
  }

  .nav-toggle {
    display: flex;
  }
}
</style>
