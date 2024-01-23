<script>
    export default {
        name: "MainLayout"
    }
</script>
<template>
    <!-- redéfinir les slots  -->
        <!-- - nommer les slots -->
        <!-- - rendu consitionnel de slots / expliquer -->
        <!-- - injecter dans le slot Header -->
    <div class="container">
        <header
            
            class="p-3 mb-3 border-bottom"
        >
            <!-- - nommer le slot header -->
            <slot
            
            ></slot>
        </header>
        <main>
            <!-- -Doit on nommer le slot default ? C'est quoi le slot default ? -->
            <slot></slot>
        </main>
        <footer>
            <!-- - nommer le slot footer -->
            <slot
                  
            ></slot>
        </footer>
    </div>
</template>