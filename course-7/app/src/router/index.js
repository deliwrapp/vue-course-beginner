import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ProductAdmin from '../views/Admin/ProductAdmin.vue'
import ProductDetailsPage from '../views/ProductDetailsPage.vue'
import ProductListPage from '../views/ProductListPage.vue'

// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    {
        name:  "HomePage",
        path: '/', 
        component: HomePage 
    },
    { 
        name: 'ProductAdmin',
        path: '/admin/products',
        component: ProductAdmin 
    },
    { 
        name: 'ProductListPage',
        path: '/products',
        component: ProductListPage 
    },
    { 
        name: 'ProductDetailsPage',
        path: '/products/:id',
        component: ProductDetailsPage 
    },
  ]

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // Provide the history implementation to use.
    history: createWebHistory(import.meta.env.BASE_URL),
    routes, // short for `routes: routes`
})

export default router