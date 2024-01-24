<script>
    export default {
        name: 'ProductForm',
        emits: ['addProduct'],
        /* Utilisation d'un hook du cycle de vie du composant */
        mounted() {
            console.log(this)
        },
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
                category: "sweet"
            }
        },
        methods: {
            submitForm() {
                const product = {
                  id: Math.floor(Math.random() * Date.now()),
                  name: this.name,
                  description: this.description,
                  price: this.price,
                  vta: this.vta,
                  category: this.category
                }
                console.log(product)
                this.$emit("addProduct", product)
                this.$parent.$emit("addProduct", product)
                this.$root.$emit("addProduct", product)
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
          
          <button class="btn btn-primary" type="submit">Save</button>
        </form>
    </section>

</template>