import { createRouter, createWebHistory } from 'vue-router'
import Startseite from '../views/Startseite.vue'

const routes = [
  { path: '/', name: 'startseite', component: Startseite, meta: { title: 'Startseite' } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Seitentitel ändern, damit Screenreader die neue Seite ansagen
router.afterEach((to) => {
  document.title = to.meta.title ? to.meta.title + ' | SteadyTouch' : 'SteadyTouch'
})

export default router
