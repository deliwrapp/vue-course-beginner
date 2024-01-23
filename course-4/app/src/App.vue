<script>
/* IMPORTER LES COMPOSANTS ICI */
import MainLayout from "./components/layout/MainLayout.vue"
import ProductsTable from "./components/product/ProductsTable.vue"

export default {
  name: "App",
  components: {
    MainLayout,
    ProductsTable
  },
  /* Utilisation d'un hook du cycle de vie du composant */
  updated() {
    console.log(this.name)
    console.log(this.description)
    console.log(this.price)
  },
  data() {
    return {
      name: "biscuit",
      description: "Oh qu'ils sont bon !!",
      price: 99,
      vta: 20,
      category: "sweet",
      products: [
        {
          id: 1,
          name: "biscuit",
          category: "sweet",
          description: "Oh qu'ils sont bon !!",
          price: 100,
          vta: 20
        }
      ]
    }
  },
  methods: {
    submitForm() {
      this.products.push({
        id: this.products.length + 1,
        name: this.name,
        category: this.category,
        description: this.description,
        price: this.price,
        vta: this.vta
      })
    }
  }
}

</script>

<template>
  <!-- Monter les composants ici -->
  <main-layout>

    <!-- v-slot + le nom du slot permet de chosir le slot de destination -->
    <template v-slot:header>
      <!-- contenu pour le slot header -->
      <h1 class="w-f">Mon Product Store</h1>
    </template>

    <!-- Injection dans le Slot default -->
    <section class="d-flex wrap">
      <section class="col-6">
        <h2 class="w-f">Product Form</h2>
        <form @submit.prevent="submitForm">
          <div class="w-f">
            <label for="name">Name</label>
            <!-- v-model permet de "bind" un input avec une data
            Le Bind est bi-directionnel, si on modifie l'input la data est modifiée,
            si on modifie la data, la valeur de l'input est modifiée. -->
            <input v-model="name" name="name"  type="text" id="name">
            <p>le nom est : {{ name }}</p>
          </div>
          <div class="w-f">
            <label for="price">Price</label>
            <input v-model="price" name="price" type="range" min="20" max="50" id="price"> €
          </div>
          <div class="w-f">
            <label for="vta">TVA</label>
            <input 
              v-model="vta"
              name="vta"
              type="number"
              id="vta"
            > %
          </div>
          <div class="w-f">
            <label for="category">CATEGORIE</label>
            <select
              v-model="category"
              name="category"
              id="category"
            >
              <option value="meat">Viande</option>
              <option value="vegetable">Légume</option>
              <option value="drink">Boisson</option>
              <option value="sweet">Confiserie</option>
            </select>
          </div>
          <div class="w-f">
            <textarea 
              v-model="description"
              name="description"
              id="description-form" 
              cols="30" rows="10"
            ></textarea>
          </div>
          <button type="submit">Save</button>
        </form>
      </section>
      <products-table
        class="col-6"
        :products="products"  
      />
    </section>

    <!-- # est un racourcis pour v-slot: -->
    <!-- <template #footer> -->
      <!-- contenu pour le slot header -->
      <!--<p class="w-f">Je suis un super footer</p> -->
    <!-- </template> -->
  
  </main-layout>
    
</template>

<style scoped>
  .d-flex {
    display: flex;
  }
  .wrap {
    flex-wrap: wrap;
  }
  .col-6 {
    width: 50%;
  }
  .w-f {
    width: 100%;
  }

</style>
