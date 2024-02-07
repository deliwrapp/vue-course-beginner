<script>
import { mapState, mapActions } from 'pinia'
import { useProductsStore } from '../../stores'

export default {
    name: 'ProductsTable',
    data() {
        return {
            activeColor: 'green',
            borderSize: 5
        }
    },
    props: {
        products: {
            type: Array,
            default: () => []
        },
        price: {
            type: Number,
            default: 10
        },
        vta: {
            type: Number,
            default: 20
        }
    },
    methods: {
        editProduct(productId) {
            this.setEditProductMode(true)
            this.setProductToEditId(productId)
        },
        ...mapActions(useProductsStore, ["deleteProduct", "setEditProductMode", "setProductToEditId"])
    },
    computed: {
        ...mapState(useProductsStore, ["getProducts"]),
        vtaCalculation: () => (price, vta) => {
            if (typeof price != "number" ) {
                /* throw new Error('Parameter is not a number!') */
                return "Error price is not a number"
            }
            let tax = (price / 100) * vta
            return price + tax
        },
        vtaCalculationLocal() {
            let tax = (this.price / 100) * this.vta
            return this.price + tax
        },
        getCategoryClass: () => (category) => {
            if (category == "sweet") {
                return "text-bg-warning"            
            }
            if (category == "drink") {
                return "text-bg-primary"                
            }
            if (category == "meat") {
                return "text-bg-danger"                
            }
            if (category == "vegetable") {
                return "text-bg-success"                
            }
            return "text-bg-light"
        }
    }
}
</script>

<template>
    <section id="products-table" class="container">
        <h2 class="text-center">Products Table</h2>
        <p>Exemple de Computed Local</p>
        <p>{{ vtaCalculationLocal }}</p>
        <!-- style="color: red; border: 2px ;" -->
        <table 
            :style="{ color: activeColor, border: borderSize + 'px solid ' + activeColor }"
            class="table"
        >
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Description</th>
                    <th scope="col">Price HT</th>
                    <th scope="col">TVA</th>
                    <th scope="col">Prix TTC</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody
                class="table-group-divider"
            >
            <transition-group name="list">
                <tr 
                    v-for="item in getProducts"
                    :key="item.id"
                >
                    <td>
                        <router-link
                            :to="{name: 'ProductDetailsPage', params: {id: item.id}}"
                        >
                            {{ item.name }}
                        </router-link>
                    </td>
                    <td>
                        <span
                            class="badge"
                            :class="getCategoryClass(item.category)"
                        >
                            {{ item.category }}
                        </span>
                    </td>
                    <td>
                        <p>
                            {{item.description}}
                        </p>
                    </td>
                    <td
                        :class="item.category"
                    >
                        
                        {{ item.price }} €
                    </td>
                    <td>
                        <span :class="item.vta == 20 ?  'badge text-bg-danger' : 'badge text-bg-info' ">
                            {{ item.vta }} %
                        </span>
                    
                    </td>
                    <!-- Appel à une fonction computed -->
                    <td>{{ vtaCalculation(item.price, item.vta) }} €</td>
                    <td>
                        <button 
                            class="btn btn-primary"
                            @click="editProduct(item.id)"
                        >
                            Éditer
                        </button>
                        <!-- Ajouter un bouton de suppression d'un produit -->
                        <!-- au clic, appel de la fonction emitDeleteProduct(product) -->
                        <button 
                            class="btn btn-danger"
                            @click="deleteProduct(item.id)"
                        >
                            Supprimer
                        </button>
                    </td>
                </tr>
            </transition-group> 
            </tbody>
        </table>
    </section>
</template>

<style scoped>

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>