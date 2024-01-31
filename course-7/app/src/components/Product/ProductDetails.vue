<script>
import { mapState } from "pinia";
import { useProductsStore } from "@/stores";

export default {
  name: "ProductDetails",
  props: {
    productId: {
      type: [Number, String],
      default: null,
    },
  },
  // Récupérer le paramètre de route qui contient l'id de notre produit
  // Récupérer le produit correspondant à l'id dans le paramètre de route
  // en utilisant le store product
  computed: {
    ...mapState(useProductsStore, ["getProductById"]),
    getCurrentProduct() {
      console.log(this.getProductById(this.productId));
      return this.getProductById(this.productId);
    },
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
  <section v-if="getCurrentProduct != null" class="container py-5">
    <article class="row">
      <section class="col-lg-6">
        <img
          src="http://via.placeholder.com/640x360.jpg"
          class="img-fluid"
          alt="Product Image"
        />
      </section>
      <section class="col-lg-6">
        <h2 class="fw-bold">{{ getCurrentProduct.name }}</h2>
        <p class="text-muted">{{ getCurrentProduct.category }}</p>
        <h3 class="my-4">{{ getCurrentProduct.price }}€ HT</h3>
        <p class="text-muted">
          tva :{{ getCurrentProduct.vta }}% -
          {{ vtaCalculation(getCurrentProduct.price, getCurrentProduct.vta) }}€
          TTC
        </p>
        <p class="mb-4">A mini Description</p>
        <div class="d-flex gap-3 mb-4">
          <input
            type="number"
            class="form-control"
            value="1"
            style="max-width: 80px"
          />
          <button class="btn btn-primary" type="button">Add to Cart</button>
        </div>
        <div>
          <button class="btn btn-outline-secondary btn-sm" type="button">
            Add to Wishlist
          </button>
          <button class="btn btn-outline-secondary btn-sm" type="button">
            Compare
          </button>
        </div>
      </section>
    </article>
    <aside>
      <ul class="nav nav-tabs mt-5" id="productTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="description-tab"
            data-bs-toggle="tab"
            data-bs-target="#description"
            type="button"
            role="tab"
            aria-controls="description"
            aria-selected="true"
          >
            Description
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="specs-tab"
            data-bs-toggle="tab"
            data-bs-target="#specs"
            type="button"
            role="tab"
            aria-controls="specs"
            aria-selected="false"
          >
            Specifications
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="reviews-tab"
            data-bs-toggle="tab"
            data-bs-target="#reviews"
            type="button"
            role="tab"
            aria-controls="reviews"
            aria-selected="false"
          >
            Reviews
          </button>
        </li>
      </ul>
      <div class="tab-content" id="productTabContent">
        <div
          class="tab-pane fade show active"
          id="description"
          role="tabpanel"
          aria-labelledby="description-tab"
        >
          <p class="mt-3">
            {{ getCurrentProduct.description }}
          </p>
        </div>
        <div
          class="tab-pane fade"
          id="specs"
          role="tabpanel"
          aria-labelledby="specs-tab"
        >
          <table class="table mt-3">
            <tr>
              <th>Weight</th>
              <td>1kg</td>
            </tr>
            <tr>
              <th>Dimensions</th>
              <td>10 x 20 x 5 cm</td>
            </tr>
          </table>
        </div>
        <div
          class="tab-pane fade"
          id="reviews"
          role="tabpanel"
          aria-labelledby="reviews-tab"
        >
          <div class="mt-3">
            <h5>John Doe</h5>
            <p>I loved this product! It really changed the way I work.</p>
            <h5>Jane Smith</h5>
            <p>Great quality and excellent after-sales service.</p>
          </div>
        </div>
      </div>
    </aside>
  </section>
  <h2 v-else>Ce produit n'existe pas</h2>
</template>
