<script >
import MainLayout from './components/Layout/MainLayout.vue'
import MainNav from './components/Layout/MainNav.vue'
import ProductForm from "./components/Form/ProductForm.vue"
import ProductsTable from "./components/Product/ProductsTable.vue"
/* Importation des données depuis un fichier json - La conversion est automatique */
import products from "./data/productList.json"

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
      products: products,
      editMode: false,
      productToEdit: null
    }
  },
  methods: {
    editProduct(product) {
      this.productToEdit = product != null ? product : null
      this.editMode = product != null ? true : false
    },
    updateProduct(product) {
      this.resetEditionMode()
      const index = this.products.findIndex(el => {
          return el.id === product.id
      })
      this.products[index] = product
      console.log("update", product)
    },
    deleteProduct(product) {
      /* Ici on va parcourir le tableau products et supprimer le produit transmis */
      this.products = this.products.filter(el => el.id != product.id)
    },
    resetEditionMode() {
      this.productToEdit = null
      this.editMode = false 
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
      <product-form
        @updateProduct="updateProduct"
        class="col-6"
        :editMode="editMode"
        :productToEdit="productToEdit"
      />
      <products-table
        class="col-6"
        :products="products"
        @editProduct="editProduct"
        @deleteProduct="deleteProduct"
      />
    </section>
  
  </main-layout>
</template>

<style scoped>
</style>
