import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
// Importer un composant pour l rendre accesible GLOBALEMENT
// import ProductsTable from "@/components/Product/ProductsTable.vue"
import { useAppStore } from '@/stores'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)

// ❌ Depending on the order of imports this will fail
// const appStore = useAppStore()

router.beforeEach((to) => {
    // ✅ This will work because the router starts its navigation after
    // the router is installed and pinia will be installed too
    const appStore = useAppStore()

    if (to.meta.requiresAuth && !appStore.isAuthenticated) {
        return { name: 'LoginPage' }
    }
    if (to.meta.isAdmin && !appStore.isAdmin) {
        return { name: 'LoginPage' }
    }
})

app.use(router)

// Utilisation de la method .component() pour rendre disponible globalement le composant
// app.component(ProductsTable)

app.mount('#app')