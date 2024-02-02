<script setup>
    import { computed } from 'vue'
    import { useAppStore  } from '@/stores'

    const appStore = useAppStore()
    
    function switchAdmin() {
        appStore.setIsAdmin(!appStore.getIsAdmin)
        if (appStore.getIsAdmin && !appStore.getIsAuthenticated) {
            appStore.setIsAuthenticated(true)  
        }
    }
    function switchIsAuthenticated() {
        appStore.setIsAuthenticated(!appStore.getIsAuthenticated)
    }

    const isAuthenticated = computed(() => appStore.getIsAuthenticated)
    const isAdmin = computed(() => appStore.getIsAdmin)

</script>
<template>
    <section class="container">
        <h1>LOGIN PAGE</h1>
        <button 
            @click="switchIsAuthenticated"
            class="btn btn-success"
        >
            Switch Authentification
        </button>
        <p>
            {{ isAuthenticated }}
        </p>
        <button 
            @click="switchAdmin"
            class="btn btn-danger"
        >
            Switch Admin
        </button>
        <p>
            {{ isAdmin }}
        </p>
    </section>
</template>