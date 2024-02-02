<script>
    import { mapState } from 'pinia'
    import { useAppStore  } from '@/stores'

    export default {
        name: "AdminDashboard",
        computed: {
            ...mapState(useAppStore, ["getIsAuthenticated", "getIsAdmin"])
        }
    }
</script>
<template>
    <h1>Admin Dashboard PAGE</h1>

</template>