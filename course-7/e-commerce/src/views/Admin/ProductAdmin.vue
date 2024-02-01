<script>
import {ProductForm, ProductsTable} from "@/components"

export default {
    name: "ProductAdmin",
    components: {
        ProductForm,
        ProductsTable
    },
    data() {
        return {
            
        }
    },
    methods: {
        
    }
}
</script>

<template>
    <section class="d-flex wrap">
        <product-form class="col-6"/>
        <products-table class="col-6" s/>
    </section>
</template>