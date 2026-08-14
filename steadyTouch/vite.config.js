import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// WICHTIG: '/DEIN-REPO-NAME/' durch den echten Namen deines GitHub-Repos ersetzen!
// Beispiel: wenn dein Repo "steadytouch-website" heißt -> base: '/steadytouch-website/'
// Falls die Seite unter username.github.io (User-Page, Repo heißt "username.github.io") läuft -> base: '/'
export default defineConfig({
  plugins: [vue()],
  base: '/SteadyTouchWebsite/',
})