# APP Bootstap Vue Example

** Réorganiser l'application **
- Architecture de l'application et des composants

** Importer depuis JSON **
- Utilisation d'un fichier JSON pour importer vos produits et catégorie

** Compléter le CRUD de Produit **
- Supprimer un nouveau produit
- Voir un nouveau produit (bonus)
- Éditer un nouveau produit (bonus)

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

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
