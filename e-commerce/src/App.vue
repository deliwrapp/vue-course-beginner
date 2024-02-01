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
    
    <router-view v-slot="{ Component }">
      <transition name="slide-fade">
        <component :is="Component" />
      </transition>
    </router-view>

  </main-layout>
</template>


<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s ease;
    height: 100%;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    height: 0;
  }

  /*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
  position: absolute;
  z-index: -1;
  height: 100%;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
  height: 0;
}
.slide-fade-leave-to {
  display: none;
}
</style>
