<script >
import MainLayout from './components/Layout/MainLayout.vue'
import MainNav from './components/Layout/MainNav.vue'
import ProductForm from "./components/Form/ProductForm.vue"
import ProductsTable from "./components/Product/ProductsTable.vue"
/* Importation des données depuis un fichier json - La conversion est automatique */


export default {
  name: 'App',
  components: {
    MainLayout,
    MainNav,
    ProductForm,
    ProductsTable
  },
  data() {
    return {
      userNavItemsArray : [
        {
          name: "Settings",
          link: "#",
          target: "_self"
        },
        {
          name: "Profile",
          link: "#",
          target: "_self"
        }
      ],
      navItemsArray : [
        {
          name: "Edit",
          link: "#",
          target: "_self",
          emit: [
            { event: "updatePage", value: {"EditPage": true}}
          ],
          class: "link-body-emphasis"
        },
        {
          name: "Preview",
          link: "#",
          emit: [
            { event: "updatePage", value: {"PreviewPage": true}}
          ],
          target: "_self",
          class: "link-body-emphasis"
        },
        {
          name: "Settings",
          link: "#",
          emit: [
            { event: "updatePage", value: {"settingsPage": true}}
          ],
          target: "_self",
          class: "link-body-emphasis"
        }
      ],
      /* On lie les données importées depuis le fichier JSON */
      products: products
    }
  },
  methods: {
    /* payload représente les données envoyées par l'événement */
    addProduct(payload) {
      this.products.push(payload)
    },
    deleteProduct(product) {
      /* Ici on va parcourir le tableau products et supprimer le produit transmis */



    }
  }
}
</script>

<template>
  <!-- Monter les composants ici -->
  <main-layout>
    <template #header>
      <main-nav
        :navItems="navItemsArray"
        :userNavItems="userNavItemsArray"
        :showUserNav="true"
      />
    </template>

    <section class="d-flex wrap">
      <!-- insérer un écouter d'évènement personnalisé qui appel la focntion addProduct -->
      <product-form
        @addProduct="addProduct"
        class="col-6"
      />
      <!-- 
        Ici, nous allons écouter un événement qui stipule
        de supprimer un produit de la liste et appeler
        la fonction de suppression deleteProduct
      -->
      <products-table
        class="col-6"
        :products="products"  
      />
    </section>
  
  </main-layout>
</template>

<style scoped>
</style>
