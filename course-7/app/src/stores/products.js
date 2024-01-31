import { defineStore } from 'pinia'
/* Importation des données depuis un fichier json - La conversion est automatique */
/* import products from "../data/productList.json" */
/* @ est un raccourcis pour partir du dossier src */
import products from "@/data/productList.json"

const STORE_NAME = 'products'
const STORE_LOCALE_STORAGE_KEY = 'products'

const getDefaultState = () => products
const getCurrentState = () => {
  const localeData = localStorage.getItem(STORE_LOCALE_STORAGE_KEY)
  return localeData ? JSON.parse(localeData) : getDefaultState()
}

export const useProductsStore = defineStore(STORE_NAME, {
    state: () => {
      return {
        products: getCurrentState(),
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
      updateLocaleStorage() {
        localStorage.setItem(STORE_LOCALE_STORAGE_KEY, JSON.stringify(this.products))
      },
      addProduct(product) {
        this.products.push(product)
        this.updateLocaleStorage()
      },
      updateProduct(product) {
        console.log("update in store", product)
        const index = this.products.findIndex(el => {
            return el.id === product.id
        })
        this.products[index] = product
        this.updateLocaleStorage()
        this.resetEditionMode()
      },
      deleteProduct(productId) {
        /* Ici on va parcourir le tableau products et supprimer le produit transmis */
        this.products = this.products.filter(el => el.id != productId)
        this.updateLocaleStorage()
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