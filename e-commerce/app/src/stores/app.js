
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const STORE_NAME = 'app'
const STORE_LOCALE_STORAGE_KEY = 'app'


const getDefaultState = () => {
    return {
        isAuthenticated: false,
        isAdmin: false
    }
}
const getCurrentState = () => {
  const localeData = localStorage.getItem(STORE_LOCALE_STORAGE_KEY)
  return localeData ? JSON.parse(localeData) : getDefaultState()
}

export const useAppStore = defineStore(STORE_NAME, () => {
    const isAuthenticated = ref(getCurrentState().isAuthenticated)
    const isAdmin = ref(getCurrentState().isAdmin)

    function updateLocaleStorage() {
        let data = {
            isAuthenticated: isAuthenticated.value,
            isAdmin: isAdmin.value
        }
        localStorage.setItem(STORE_LOCALE_STORAGE_KEY, JSON.stringify(data))
    }

    const getIsAuthenticated = computed(() => isAuthenticated.value)
    function setIsAuthenticated(val) {
        if (!val) {
            setIsAdmin(false) 
        }
        isAuthenticated.value = val
        updateLocaleStorage()
    }

    const getIsAdmin = computed(() => isAdmin.value)
    function setIsAdmin(val) {
        isAdmin.value = val
        updateLocaleStorage()
    }
  
    return { 
        isAuthenticated, isAdmin, 
        getIsAuthenticated, setIsAuthenticated,
        getIsAdmin, setIsAdmin
    }
})