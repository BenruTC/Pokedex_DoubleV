import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Importar Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

// Opcional: importar JS de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import '@/assets/css/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
