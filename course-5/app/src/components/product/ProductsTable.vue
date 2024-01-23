<script>
export default {
    name: 'ProductsTable',
    data() {
        return {
            nothing: null
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
    computed: {
        /* 
            Utlisation d'une Computed  avec les données issus du template
            !!! SYNTAXE PARTICULIERE
            Double Fonction fléché
            La première fonction permet "d'injecter" 
            les arguments de la fonction à la seconde 
        */
        vtaCalculation: () => (price, vta) => {
            let tax = (price / 100) * vta
            return price + tax
        },

        /* 
            Utlisation Computed  avec les données local du composant
            injecté via les props     
        */
        vtaCalculationLocal() {
            let tax = (this.price / 100) * this.vta
            return this.price + tax
        }
    }
}
</script>

<template>
    <section id="products-table">
        <h2>Products</h2>
        <p>Exemple de Computed Local</p>
        <p>{{ vtaCalculationLocal }}</p>
        <table>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Category</th>
                <th scope="col">Description</th>
                <th scope="col">Price HT</th>
                <th scope="col">TVA</th>
                <th scope="col">Prix TTC</th>
            </tr>
            <tr 
                v-for="(item, index) in products"
                :key="index"
            >
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.category }}</td>
                <td>{{ item.description }} - </td>
                <td>{{ item.price }} €</td>
                <td>{{ item.vta }} %</td>
                <!-- Appel à une fonction computed -->
                <td>{{ vtaCalculation(item.price, item.vta) }} €</td>
            </tr>
        </table>
    </section>
</template>