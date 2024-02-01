<script>
import { mapState } from 'pinia'
import { useProductsStore  } from '@/stores'
import {ProductDetailsCard} from '@/components'

export default {
    name: "ProductListPage",
    components: {
        ProductDetailsCard
    },
    computed: {
        ...mapState(useProductsStore, ["getProducts"])
    }
}
</script>
<template>
    <section class="container row">
        <product-details-card
            v-for="product in getProducts"
            :key="product.id"
            :product="product"
            class="col-4"
        />
    </section>
</template>