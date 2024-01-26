import { defineStore } from 'pinia'
/* Importation des données depuis un fichier json - La conversion est automatique */
/* import products from "../data/productList.json" */
/* @ est un raccourcis pour partir du dossier src */
import products from "@/data/productList.json"

export const useProductsStore = defineStore('products', {
    state: () => {
      return {
        products: products,
        editProductMode: false,
        productToEditId: null
      }
    },
    getters: {
      getProducts : (state) => state.products,
      getEditProductMode : (state) => state.editProductMode,
      getProductToEditId: (state) => state.productToEditId,
      getProductById: (state) => (id) => {
        return state.products.find(product => product.id === id)
      }
    },
    actions: {
      addProduct(product) {
        this.products.push(product)
      },
      updateProduct(product) {
        console.log("update in store", product)
        const index = this.products.findIndex(el => {
            return el.id === product.id
        })
        this.products[index] = product
        this.resetEditionMode()
      },
      setEditProductMode(mode) {
        console.log("mode Edition : ", mode)
        this.editProductMode = mode
      },
      setProductToEditId(id) {
        console.log("Product Id : ", id)
        this.productToEditId = id
      },
      resetEditionMode() {
        this.productToEditId = null
        this.editProductMode = false 
      }
    }
  })