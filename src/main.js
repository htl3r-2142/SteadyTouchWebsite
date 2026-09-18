import { createApp } from 'vue'

// Schrift lokal statt von Google Fonts (Datenschutz)
import '@fontsource/figtree/400.css'
import '@fontsource/figtree/600.css'
import '@fontsource/figtree/700.css'
import '@fontsource/figtree/800.css'

import './style.css'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
