<script>
    export default {
        name: "MainNav",
        props: {
            navItems: {
                type: Array,
                required: false,
                default: function () {
                    return null
                }
            },
            showUserNav: {
                type: Boolean,
                required: false,
                default: function () {
                    return false
                }
            },
            userNavItems: {
                type: Array,
                required: false,
                default: function () {
                    return null
                }
            }
        }
    }
</script>

<template>
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
        </a>
        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li
                v-for="(item, index) in navItems"
                :key="index"
            >
                <router-link 
                    :to="item.link ? item.link : '#' "
                    :class="item.class ? item.class : null"
                    :target="item.target ? item.target : '_self'"
                    class="nav-link px-2 link-secondary"
                >
                    {{item.name ? item.name : 'link'}}
                </router-link>
            </li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" class="form-control" placeholder="Search..." aria-label="Search">
        </form>

        <div
            v-if="showUserNav === true"
            class="dropdown text-end"
        >
          <a href="#" class="d-block link-body-emphasis text-decoration-none dropdown-toggle show" data-bs-toggle="dropdown" aria-expanded="true">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle">
          </a>
          <ul class="dropdown-menu text-small" data-popper-placement="bottom-end" style="position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate(0px, 34px);">
            <li
                v-for="(item, index) in userNavItems"
                :key="index"
            >
                <router-link
                    :to="item.link ? item.link : '#' "
                    :class="item.class ? item.class : null"
                    :target="item.target ? item.target : '_self'"
                    class="dropdown-item"
                >
                    {{item.name ? item.name : 'link'}}
                </router-link>
            </li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
    </div>
</template>

<style scoped>
    * {
    transition: all .3s ease-in-out;
    }
    .router-link-active {
        font-weight: bold;
        font-size: 1.25rem;
        color: #42b983;
    }
    .router-link-active:hover {
        font-size: 1.5rem;
    }
</style>