import { createRouter, createWebHistory } from 'vue-router'
import Startseite from '../views/Startseite.vue'
import Kontakt from '../views/Kontakt.vue'
import Impressum from '../views/Impressum.vue'

const routes = [
  { path: '/', name: 'startseite', component: Startseite, meta: { title: 'Startseite' } },
  { path: '/kontakt', name: 'kontakt', component: Kontakt, meta: { title: 'Kontakt' } },
  { path: '/impressum', name: 'impressum', component: Impressum, meta: { title: 'Impressum' } }
]

const router = createRouter({
  // BASE_URL kommt aus vite.config.js (base), sonst findet der Router auf GitHub Pages nichts
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // bei neuer Seite immer oben anfangen
  scrollBehavior() {
    return { top: 0 }
  }
})

// Seitentitel ändern, damit Screenreader die neue Seite ansagen
router.afterEach((to, from) => {
  document.title = to.meta.title ? to.meta.title + ' | SteadyTouch' : 'SteadyTouch'

  // nach einem Seitenwechsel den Fokus auf den Inhalt setzen,
  // damit Tastatur- und Screenreader-Benutzer nicht wieder beim Header anfangen
  if (from.name) {
    setTimeout(() => document.getElementById('main')?.focus({ preventScroll: true }), 0)
  }
})

export default router
