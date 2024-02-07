<script>

export default {
  name: "ProductDetailsCard",
  props: {
    product: {
      type: Object,
      default: null,
    },
  },
  computed: {
    vtaCalculation: () => (price, vta) => {
      if (typeof price != "number") {
        /* throw new Error('Parameter is not a number!') */
        return "Error price is not a number";
      }
      let tax = (price / 100) * vta;
      return price + tax;
    },
  },
};
</script>

<template>
  <article 
    v-if="product != null"
    class="card" 
    style="width: 18rem;"
  >
    <img src="..." class="card-img-top" alt="...">
    <section class="card-body">
      <h3 class="card-title">{{ product.name }}</h3>
      <p class="text-muted">{{ product.category }}</p>
      <p class="card-text">{{ product.price }}€</p>
      <p class="text-muted">
          tva :{{ product.vta }}% -
          {{ vtaCalculation(product.price, product.vta) }}€
          TTC
      </p>
      <router-link
        :to="{name: 'ProductDetailsPage', params: {id: product.id}}"
        class="btn btn-primary"
      >
        Voir L'article
      </router-link>
    </section>
  </article>
  <section
    v-else
    class="card" 
    style="width: 18rem;"
  >
    <img src="..." class="card-img-top" alt="...">
    <h3 >Ce produit n'existe pas</h3>
  </section>
</template>
