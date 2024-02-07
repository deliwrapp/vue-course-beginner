<script>
import { mapState } from 'pinia'
import { useAppStore  } from '@/stores'
import {ProductDetails} from '@/components'

export default {
    name: "ProductDetailsPage",
    components: {
        ProductDetails
    },
    data() {
        return {
            productId: this.$route.params.id
        }
    },
    computed: {
        ...mapState(useAppStore, ["getIsAuthenticated", "getIsAdmin"])
    }
}
</script>
<template>
    <section class="container row">
        <button 
            v-if="getIsAuthenticated && getIsAdmin" 
            class="btn btn-lg btn-warning text-center"
            @click="$router.push({name: 'ProductAdmin'})"
        >
            Retour à l'administration
        </button>
        <router-link
            to="/products"
            class="btn btn-lg text-center"
        >
            Retour à la Liste
        </router-link>
        <section class="col-12">
            <h2 class="text-center">Product Detail Page</h2>
            <product-details
                :productId="productId"
            />
        </section>
    </section>
</template>