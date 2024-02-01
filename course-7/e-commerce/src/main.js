import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
// Importer un composant pour l rendre accesible GLOBALEMENT
// import ProductsTable from "@/components/Product/ProductsTable.vue"

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

// Utilisation de la method .component() pour rendre disponible globalement le composant
// app.component(ProductsTable)

app.mount('#app')