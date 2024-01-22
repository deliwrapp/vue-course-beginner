# exercice_my_first_app

Example to learn VUE

Compléter le main.js

Créer un composant en mode Option API

**Descriptif du composant :**
- Option Name    : le nom du composant
- Option data()  : Les données du composant
- Option props   : Une Props de type String => msg
- Option methods : 
    -- Une Methode (Fonction logique) qui modifie une "data" affiché dans le template quand on l'qppele
- Le Template affiche la props {{msg}}
- Le Template affiche une "data"
- Un boutton permet de modifier la data via la gestion de l'événement "click"


**Objectifs :**
- Compléter le script main.js
- Afficher votre composant dans le Composant racine App.vue
- **"Bind"** la props :msg depuis le composant App.vue
- Utiliser les méthodes et les "data" définis dans le composant enfant


**Objectifs secondaire :**
- Utiliser les directive **v-if** et **v-else**
- Créer un composant similaire en mode Composition API
- Créer un raccourcis de SCRIPT dans le package.json


## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
