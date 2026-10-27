import { createRouter, createWebHistory } from 'vue-router'
import Startseite from '../views/Startseite.vue'
import Kontakt from '../views/Kontakt.vue'
import Impressum from '../views/Impressum.vue'
import NichtGefunden from '../views/NichtGefunden.vue'

// title und beschreibung sieht man bei Google in den Suchergebnissen
const routes = [
  {
    path: '/',
    name: 'startseite',
    component: Startseite,
    meta: {
      title: 'SteadyTouch – Gestensteuerung für Menschen mit motorischen Einschränkungen',
      beschreibung: 'SteadyTouch erkennt Handgesten per Kamera und filtert Zittern heraus. Stabile Computerbedienung bei Parkinson, MS und anderen motorischen Einschränkungen – eine Diplomarbeit der HTL Rennweg Wien.'
    }
  },
  {
    path: '/kontakt',
    name: 'kontakt',
    component: Kontakt,
    meta: {
      title: 'Team & Kontakt | SteadyTouch',
      beschreibung: 'Das Team hinter SteadyTouch: Michaela Giffinger, Fabian Lielacher und Alessandro Tervit von der HTL Rennweg Wien. Fragen und Feedback einfach per E-Mail.'
    }
  },
  {
    path: '/impressum',
    name: 'impressum',
    component: Impressum,
    meta: {
      title: 'Impressum | SteadyTouch',
      beschreibung: 'Impressum von SteadyTouch, einem Diplomarbeitsprojekt der HTL Rennweg Wien.'
    }
  },
  // alle anderen Adressen
  {
    path: '/:pathMatch(.*)*',
    name: 'nicht-gefunden',
    component: NichtGefunden,
    meta: {
      title: 'Seite nicht gefunden | SteadyTouch',
      nichtIndexieren: true
    }
  }
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

// <meta> Tag im <head> setzen (oder neu anlegen, wenn es ihn noch nicht gibt)
function setzeMeta(name, inhalt) {
  let tag = document.querySelector(`meta[name="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', inhalt)
}

router.afterEach((to, from) => {
  // Seitentitel ändern, damit Screenreader die neue Seite ansagen (und für Google)
  document.title = to.meta.title || 'SteadyTouch'

  if (to.meta.beschreibung) {
    setzeMeta('description', to.meta.beschreibung)
  }

  // "Seite nicht gefunden" soll nicht bei Google landen
  setzeMeta('robots', to.meta.nichtIndexieren ? 'noindex' : 'index, follow')

  // Canonical = die "echte" Adresse der Seite. Immer steadytouch.at,
  // damit die Kopie auf GitHub Pages nicht als doppelte Seite zählt
  document.querySelector('link[rel="canonical"]')?.setAttribute('href', 'https://steadytouch.at' + to.path)

  // nach einem Seitenwechsel den Fokus auf den Inhalt setzen,
  // damit Tastatur- und Screenreader-Benutzer nicht wieder beim Header anfangen
  if (from.name) {
    setTimeout(() => document.getElementById('main')?.focus({ preventScroll: true }), 0)
  }
})

export default router
