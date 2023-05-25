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
        <!-- <ClothesDetail v-for="item in data" :el="item" :key="item.id" /> -->
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import { defineComponent } from "vue";
//   import ClothesDetail from "./ClothesDetail";
  
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
          .get(`http://${process.env.HOST}:${process.env.PORT}/search/${query}`)
          .then((response) => {
            console.log(response);
            this.data = response.data.products;
          })
          .catch((error) => console.log(error));
      }
    },
    components: {
    //   ClothesDetail
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
  