import { createApp } from 'vue'
import App from './App.vue'
import { createRuntimeError, propagateError } from './errorHandling.js'
import './style.css'

const mountTarget = document.querySelector('#app')

if (mountTarget === null) {
  throw new Error('Unable to start SteadyTouch: mount target "#app" was not found')
}

const app = createApp(App)

app.config.errorHandler = (error, _instance, info) => {
  propagateError(createRuntimeError(error, info))
}

app.mount(mountTarget)
