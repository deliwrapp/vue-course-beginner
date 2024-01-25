<script>
    export default {
        name: 'ProductForm',
        emits: ['addProduct', "updateProduct"],
        /* Utilisation d'un hook du cycle de vie du composant */
        mounted() {
            console.log(this)
        },
        updated() {
            console.log(this.productToEdit)
            console.log("hello")
            if (this.editMode && this.productToEdit != null && !this.confirmEditMode 
                || this.editMode && this.productToEdit != this.currentProduct
              ) {
              this.name = this.productToEdit.name
              this.description = this.productToEdit.description
              this.price = this.productToEdit.price
              this.vta = this.productToEdit.vta
              this.category = this.productToEdit.category
              this.confirmEditMode = true
              this.currentProduct = this.productToEdit
            }
        },
        data() {
            return {
                name: "biscuit",
                description: "Oh qu'ils sont bon !!",
                price: 99,
                vta: 20,
                category: "sweet",
                confirmEditMode: false,
                currentProduct: null
            }
        },
        props: {
          editMode: {
            type: Boolean,
            default: false
          },
          productToEdit: {
            type: Object,
            default: null
          }
        },
        methods: {
            submitForm() {
              if (this.editMode && this.productToEdit != null) {
                const product = {
                  id: this.productToEdit.id,
                  name: this.name,
                  description: this.description,
                  price: this.price,
                  vta: this.vta,
                  category: this.category
                }
                this.$emit("updateProduct", product)
                this.confirmEditMode = false
                this.currentProduct = null
              } else {
                const product = {
                  id: Math.floor(Math.random() * Date.now()),
                  name: this.name,
                  description: this.description,
                  price: this.price,
                  vta: this.vta,
                  category: this.category
                }
                this.$emit("addProduct", product)
              }
            }
        }
    }
</script>

<template>
    <section>
        <h2 class="w-f">Product Form</h2>
        <form @submit.prevent="submitForm">
          <div class="mb-3">
            <label for="name" class="form-label">Nom</label>
            <input 
                type="text"
                class="form-control" 
                id="name"
                name="name"
                aria-describedby="name-help"
                v-model="name"
                required
            >
            <div id="name-help" class="form-text">productorUn Nom!</div>
          </div>
          <div class="mb-3">
            <label for="price" class="form-label">Prix</label>
            <input 
                type="number"
                class="form-control" 
                id="price"
                name="price"
                min="1"
                aria-describedby="price-help"
                v-model="price"
                required
            >
            <div id="price-help" class="form-text">Un Prix</div>
          </div>
          <div class="mb-3">
            <label for="vta" class="form-label">TVA</label>
            <input 
                type="number"
                class="form-control" 
                id="vta"
                name="vta"
                aria-describedby="vta-help"
                v-model="vta"
                required
            >
            <div id="vta-help" class="form-text">La TVA</div>
          </div>
          <div class="mb-3">
            <label for="category" class="form-label">Catégorie</label>
            <select 
                id="category"
                class="form-select" 
                v-model="category"
                required
            >
              <option value="meat">Viande</option>
              <option value="vegetable">Légume</option>
              <option value="drink">Boisson</option>
              <option value="sweet">Confiserie</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <textarea 
                class="form-control" 
                id="description" 
                name="description"
                rows="3"
                v-model="description"
            >
            </textarea>
          </div>
          
          <button 
            class="btn"
            type="submit"
            :class="editMode ? 'btn-primary' : 'btn-success'"
          >
            {{editMode ? "Mettre à Jour" : "Enregistrer"}}
          </button>
        </form>
    </section>

</template>