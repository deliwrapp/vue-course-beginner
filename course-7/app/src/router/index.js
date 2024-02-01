import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
// Importer un fichier JSON contenant les routes du site
import sitemap from '../data/routesList.json'

// Cette fonction permet de s'assurer que le chemin d'import pour le composant
// commemence par un '/'
const sanitizeRoutePath = (path) => {
    return path[0] != '/' ?  path = '/' + path : path
}  

// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    {
        name:  "HomePage",
        path: '/', 
        component: HomePage 
    }
  ]

/* SCRIPT  */
sitemap.forEach(el => {
    let newRoute = setRoute(el)
    routes.push(newRoute)
  });

function setRoute(el, level = null) {
    let newRoute = {
        path: sanitizeRoutePath(el.path),
        component: () => import(/* @vite-ignore */ `../views/${el.component}`),
        name: el.name,
        props: { name: el.name, uuid: el.uuid },
        meta: el.meta ? el.meta : null,
        params: el.params ? el.params : null,
        query: el.query ? el.query : null,
        hash: el.hash ? el.hash : null,
        sensitive: el.sensitive ? el.sensitive : false,
        strict: el.strict ? el.strict : false,
      }
    if (level == null) {
        newRoute.children = el.children ? getChildrenData(el.children) : null
    }
    return newRoute
}
function getChildrenData(children) {
    const childrensArray = []
    children.forEach(el=> {
        let childRoute = setRoute(el)
        childrensArray.push(childRoute)
    })
return childrensArray
}

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // Provide the history implementation to use.
    history: createWebHistory(import.meta.env.BASE_URL),
    routes, // short for `routes: routes`
})

export default router