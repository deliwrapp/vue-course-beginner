<script setup>
import {ref} from 'vue'
import MainLayout from './components/Layout/MainLayout.vue'
import MainNav from './components/Layout/MainNav.vue'

let NavItemsArray = ref(
  [
    {
      name: "Edit",
      link: "#",
      target: "_self",
      emit: [
        { event: "updatePage", value: {"EditPage": true}}
      ],
      class: "link-body-emphasis"
    },
    {
      name: "Preview",
      link: "#",
      emit: [
        { event: "updatePage", value: {"PreviewPage": true}}
      ],
      target: "_self",
      class: "link-body-emphasis"
    },
    {
      name: "Settings",
      link: "#",
      emit: [
        { event: "updatePage", value: {"settingsPage": true}}
      ],
      target: "_self",
      class: "link-body-emphasis"
    }
  ]
)

let UserNavItemsArray = ref(
  [
    {
      name: "Settings",
      link: "#",
      target: "_self"
    },
    {
      name: "Profile",
      link: "#",
      target: "_self"
    }
  ]
)

</script>

<template>
  <main-layout>
    <template #header>
      <main-nav
        :navItems="NavItemsArray"
        :userNavItems="UserNavItemsArray"
        :showUserNav="true"
      />
    </template>
    
    <!-- Injecter ici les données dans le slot default 
    du composant main-layout -->


    <!-- Injection dans le slot footer -->
    <!-- <template #footer></template> -->
    
  </main-layout>
</template>

<style scoped>
</style>
