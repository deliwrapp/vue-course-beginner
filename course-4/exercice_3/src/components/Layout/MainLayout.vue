<script>
    export default {
        name: "MainLayout"
    }
</script>
<template>
    <!-- redéfinir les slots  -->
        <!-- - nommé les slots -->
        <!-- - rendu consitionnel de slots / expliquer -->
        <!-- - injecter dans le slot Header -->
    <div class="container">
        <header
            
            class="p-3 mb-3 border-bottom"
        >
            <slot name="header"></slot>
        </header>
        <main>
            <slot></slot>
        </main>
        <footer>
            <slot
                
                name="footer"
            ></slot>
        </footer>
    </div>
</template>