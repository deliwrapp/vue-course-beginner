import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

/* 
Ici l'application va "monter" (injecter dans le DOM/dans index.html)
premier composant racine App. Il est relier à la div identifié par
id="app" dans index.html (aller voir ce fichier !!!)
*/
createApp(App).mount('#app')



/*
=> Importer la valeur par default du fichier (export default)
import chebaka from './services/libOne.js'

=> Importer une valeur NOMMÉE  du fichier (export const = maConstante)
import {function1} from './services/libOne.js'

=> Importer et exporter une valeur NOMMÉE (export function1)
export {function1 as uneFunction} from './services/libOne.js'

=> Exporter la valeur par default du fichier (export default) 
=> as est un raccourcis pour renommer une variable
export {default as uneValeurDefaultNamed} from './services/libOne.js'

*/
