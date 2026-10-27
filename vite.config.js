import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // steadytouch.at liegt direkt unter "/"
  // für GitHub Pages wird beim Build "--base=/SteadyTouchWebsite/" mitgegeben (siehe deploy.yml)
  base: '/',
})
