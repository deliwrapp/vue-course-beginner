<script>
    export default {
        name: 'MainLayout'
    }
</script>

<template>
    <div class="container">
        <!-- $slots représente les slots du composant -->
        <header
            v-if="$slots.header"
        >
            <slot name="header"></slot>
        </header>
        <!-- $slots représente les slots du composant -->
        <main
            v-if="$slots.default"
        >
            <slot></slot>
        </main>
        <!-- $slots représente les slots du composant -->
        <footer
            v-if="$slots.footer"
        >
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
}
header, main, footer {
    width: 100%;
    min-height: 4rem;
}
</style>