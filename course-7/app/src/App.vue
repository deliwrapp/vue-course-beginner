<script >
import MainLayout from './components/Layout/MainLayout.vue'
import MainNav from './components/Layout/MainNav.vue'

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
          name: "Settings",
          link: "#",
          target: "_self"
        },
        {
          name: "Profile",
          link: "#",
          target: "_self"
        }
      ],
      navItemsArray : [
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
      <router-link to="/">Home</router-link> 
      | 
      <router-link to="/product-admin">Product Admin</router-link>
    </template>
    
    <router-view></router-view>

  </main-layout>
</template>

<style scoped>
</style>
