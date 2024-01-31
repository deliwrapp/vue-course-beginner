<script>
import { mapState } from 'pinia'
import { useProductsStore } from '@/stores'

export default {
    name: "ProductDetails",
    // Récupérer le paramètre de route qui contient l'id de notre produit

    // Récupérer le produit correspondant à l'id dans le paramètre de route
    // en utilisant le store product
    computed: {
        ...mapState(useProductsStore, ["getProductById"]),
    }
}
</script>
<template>
    <article>
        <header>
            <h2>{{ product.name }}</h2>
        </header>
        <section>
            <p>{{ product.desciption }}</p>
        </section>
        <footer></footer>
    </article>
    
</template>