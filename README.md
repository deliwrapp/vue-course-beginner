# vue-course-beginner

A Beginner Vue App

---

## SUIVI DE VERSION
---
**app v-0.0.1**
- Découverte de la stucture d'un projet VUE
    - La structure Global
        - Dossier ./public
        - Dossier ./src
        - Fichier ./src/main.js
        - Dossier ./src/assets
        - Dossier ./src/components
        - Fichier ./index.html
        - Fichier ./package.json
        - Fichier ./vite.config.js 
- Création d'une Application
- Création d'un Composant
    - Création d’un composant simple
    - Registration
    - Syntaxe des SFC
    - Comparaison entre Option API et Composition API
    - Introduction au Cycle de vie d’une application et des composants
- La réactivité
    - Le Bind
    - Data : Les données du composant
    - Props : Recevoir des données
    - Transmettre des données d’un composant parent à un composant enfant

---

**app v-0.0.2**
- Fil rouge : Application de gestion de Stock
- V-Model et le mapping bi-directionnel
    - Création d’un formulaire
    - Comparaison entre Option et Composition API

- Intégration d'un Composant ProductsTable 
    - Pour afficher la liste des produits et ajouter des produit via le formulaire
        - Transmission des données via les _props_
    - Utilisation Computed: Les propriétés calculées
        -  Utilisation de computed pour afficher une valeur calculée en fonction d’autres données
        - Création de Computed pour calculer un prix en fonction d'une taxe (TVA) personalisable

---

**app v-0.0.3**
- Intégration du Framework CSS Bootstrap
- Intégration d'un Composant MainLayout
    - Utilisation de `<slot>`
    - Un slot _header_
    - Un slot _footer_
    - Un slot _default_
- Intégration d'un Composant MainNav
    - Utilisation de `v-if` pour le rendu conditionnel des menus
    - Transmission des liens de menu via les _props_
    - Itération avec `v-for` pour l'affichage des liens

---

**app v-0.0.4**
- Intégration d'un Composant ProductForm
    - Formulaire permettant la création d'un produit (auparavant dans App.vue)
    - Transmission des données au composant parent et réinjection des données dans ProductTable
- Initiation au événements
    - Les événements de composants
    - v-on et son raccourci @
    - @click
    - Modificateurs d'événements
    - Emmiter et Listener - emits - $emit 
    - @event
    - Les modificateurs d’événements
- Le Cycle de Vie du Composant et les Hooks
- Optimisation et mise en place d'un CRUD pour Product
- Import des donnée via un fichier JSON

---

