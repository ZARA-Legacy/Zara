<template>
    <div>
      <div class="col-md-11">
        <input
          class="search-input"
          type="text"
          v-model="searchText"
          @input="handleSearch"
          placeholder="Search"
        />
      </div>
      <div class="clothes-container">
        <ClothesDetails v-for="item in data" :el="item" :key="item.id" />
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import axios from "axios";
  import { defineComponent } from "vue";
import ClothesDetails from "./clothesDetails.vue";
  
  export default defineComponent({
    name: "SearchPage",
    data() {
      return {
        searchText: "",
        data: [] // Initialize as an empty array
      };
    },
    methods: {
      handleSearch() {
        const query = this.searchText.trim();
  
        if (query === "") {
          this.data = [];
          return;
        }
  
        axios
          .get(`http://localhost:3000/products/products`)
          .then((response) => {
            console.log(response);
            this.data = response.data.products;
          })
          .catch((error) => console.log(error));
      }
    },
    components: {
    ClothesDetails
}
  });
  </script>
  
  <style>
  .col-md-11 {
    margin-top: 10px;
  }
  
  .search-input {
    width: 100%;
  }
  
  .clothes-container {
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  </style>
  