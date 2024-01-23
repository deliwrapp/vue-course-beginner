<script>
    export default {
        name: "MainLayout"
    }
</script>
<template>
    <div class="container">
        <header
            v-if="$slots.header"
            class="p-3 mb-3 border-bottom"
        >
            <slot name="header"></slot>
        </header>
        <main>
            <slot v-if="$slots.default"></slot>
        </main>
        <footer>
            <slot
                v-if="$slots.footer"
                name="footer"
            ></slot>
        </footer>
    </div>
</template>