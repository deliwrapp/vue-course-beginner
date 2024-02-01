<script >
import {MainLayout, MainNav} from './components'

export default {
  name: 'App',
  components: {
    MainLayout,
    MainNav
  },
  data() {
    return {
      userNavItemsArray : [
        {
          name: "Home",
          link: "/",
          target: "_self"
        }
      ],
      navItemsArray : [
        {
          name: "Home",
          link: "/",
          target: "_self",
          class: "link-body-emphasis"
        },
        {
          name: "Products",
          link: "/admin/products",
          target: "_self",
          class: "link-body-emphasis"
        }
      ]
    }
  }
}
</script>

<template>
  <!-- Monter les composants ici -->
  <main-layout>
    <template #header>
      <main-nav
        :navItems="navItemsArray"
        :userNavItems="userNavItemsArray"
        :showUserNav="true"
      />
    </template>
    
    <router-view></router-view>

  </main-layout>
</template>

<style scoped>

</style>
