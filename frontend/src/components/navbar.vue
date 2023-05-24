<template>
  <div>
    <b-navbar bg="transparent" expand="lg" variant="light" class="navbar" fixed="top">
      <Sidebar />
      <b-container fluid>
        <b-navbar-brand href="/">
          <img
            src="https://cdn.discordapp.com/attachments/1110232564624539700/1110910397038460998/Zara-Logo.png"
            style="margin-left: 100px; width: 200px; height: 90px"
          />
        </b-navbar-brand>

        <b-navbar-toggle target="navbarScroll" />

        <b-collapse id="navbarScroll" is-nav>
          <b-nav class="me-auto my-2 my-lg-0" style="max-height: 100px" navbar-scroll>
            <b-nav-item href="/" style="font-size: 15px; margin-left: 20px"></b-nav-item>
          </b-nav>

          <div>
            <b-nav-item href="/Search" style="color: #212529; font-family: Helvetica Neue; font-size: 12px; margin-right: 20px; text-decoration: underline">
              SEARCH
            </b-nav-item>
          </div>

          <div>
            <b-nav-item href="/login" style="color: #212529; font-family: Helvetica Neue; font-size: 12px">
              LOG IN
            </b-nav-item>
          </div>

          <div>
            <b-nav-item href="/help" style="color: #212529; font-family: Helvetica Neue; font-size: 12px; margin-left: 20px">
              HELP
            </b-nav-item>
          </div>

          <svg class="layout-header-shop-cart-link__icon" style="margin-right: 20px" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="inherit" stroke="inherit">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.708 5a2.5 2.5 0 0 1 4.584 0H9.708zM8.645 5a3.502 3.502 0 0 1 6.71 0H19v15H5V5h3.645zM6 6v13h12V6H6z"></path>
          </svg>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
import { BNavbar, BNavbarBrand, BNavbarToggle, BCollapse, BNav, BNavItem, BContainer } from 'bootstrap-vue';
import Sidebar from './sidbar.vue';
import {defineComponent} from "vue"

export default defineComponent({
  components: {
    BNavbar,
    BNavbarBrand,
    BNavbarToggle,
    BCollapse,
    BNav,
    BNavItem,
    BContainer,
    Sidebar
  }
});
</script>
<style scoped>
.navbar {
  background-color: transparent;
}

.navbar-brand img {
  margin-left: 100px;
  width: 200px;
  height: 90px;
}

.nav-link {
  color: #212529;
  font-family: Helvetica Neue;
  font-size: 12px;
  margin-right: 20px;
  text-decoration: none;
}

.nav-link:hover {
  text-decoration: underline
}

.layout-header-shop-cart-link__icon {
  margin-right: 20px;
}


</style>
