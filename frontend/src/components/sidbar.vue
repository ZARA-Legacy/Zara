<template>
  <div>
    <button class="ml-9" @click="toggleSidebar" aria-label="Open menu">
      <template v-if="!show">
        <svg class="layout-header__icon" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
          fill="inherit" stroke="inherit">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M20.4 5.9H3.6v-1h16.8v1zm0 6.6H3.6v-1h16.8v1zm0 6.6H3.6v-1h16.8v1z"></path>
        </svg>
      </template>
      <template v-else>
        <svg class="layout-sidebar__close-icon" width="24" height="24" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg" fill="inherit" stroke="inherit">
          <path
            d="M12 12.707l6.846 6.846.708-.707L12.707 12l6.847-6.846-.707-.708L12 11.293 5.154 4.446l-.707.708L11.293 12l-6.846 6.846.707.707L12 12.707z">
          </path>
        </svg>
      </template>
    </button>
    <template v-if="show">
      <navbar bg="light" :class="['mb-3', 'sidebar', show ? 'sidebar-open' : '']">
        <container fluid>
          <navbar-toggle @click="toggleOffcanvas" aria-controls="offcanvasNavbar" />
          <navbar-offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
            <offcanvas-body>
              <categories />
            </offcanvas-body>
          </navbar-offcanvas>
        </container>
      </navbar>
    </template>
    
  </div>
</template>


<script lang="ts">
import { ref } from 'vue';

export default {
  name: 'Sidebar',
  setup() {
    const show = ref(false);

    const toggleSidebar = () => {
      show.value = !show.value;
    };

    const toggleOffcanvas = () => {

    };

    return {
      show,
      toggleSidebar,
      toggleOffcanvas,
    };
  },
};
</script>



<style>
.sidebar {
  width: 250px;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
}

.sidebar-open {
  transform: translateX(0);
}

.layout-header__icon,
.layout-sidebar__close-icon {
  fill: inherit;
  stroke: inherit;
}

.ml-9 {
  margin-left: 0.9rem;
}</style>
    