<template>
    <div class="container" style="margin-top: 150px">
      <!-- Product List -->
      <div class="row justify-content-center">
        <div
          class="col-md-12 col-lg-4 mb-4"
          v-for="product in data"
          :key="product.id"
        >
          <!-- Product Card -->
          <div class="card h-100">
            <img :src="product.image" :alt="product.name" class="card-img-top" />
            <div
              class="card-body d-flex flex-row justify-content-between p-0 pt-1.5"
            >
              <span
                class="card-title mb-3 text-left details"
                :style="{
                  fontFamily: 'Arial, Helvetica, sans-serif',
                  fontSize: '15px',
                  paddingLeft: '20px',
                  paddingTop: '5px',
                }"
              >
                {{ product.name }}
              </span>
              <span
                class="mb-3 text-right details"
                :style="{
                  fontFamily: 'Arial, Helvetica, sans-serif',
                  fontSize: '15px',
                  paddingRight: '20px',
                  paddingTop: '5px',
                }"
              >
                ${{ product.price }}
              </span>
            </div>
            <!-- Actions -->
            <div class="d-flex justify-content-between align-items-center p-2">
              <!-- Update Button -->
              <button
                class="btn btn-primary mr-2"
                @click="updateProduct(product)"
              >
                Update
              </button>
              <!-- Delete Button -->
              <button
                class="btn btn-danger"
                @click="deleteProduct(product.id)"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Create Product Form -->
      <div class="row justify-content-center mt-4">
        <div class="col-md-12 col-lg-6">
          <div class="card">
            <div class="card-header">
              <h4>Create New Product</h4>
            </div>
            <div class="card-body">
              <!-- Product Form -->
              <form @submit.prevent="createProduct">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input type="text" class="form-control" v-model="newProduct.name" required>
                </div>
                <div class="form-group">
                  <label for="image">Image URL</label>
                  <input type="text" class="form-control" v-model="newProduct.image" required>
                </div>
                <div class="form-group">
                  <label for="price">Price</label>
                  <input type="number" class="form-control" v-model="newProduct.price" required>
                </div>
                <div class="form-group">
                  <label for="quantity">Quantity</label>
                  <input type="number" class="form-control" v-model="newProduct.quantity" required>
                </div>
                <div class="form-group">
                  <label for="gender">Gender</label>
                  <input type="text" class="form-control" v-model="newProduct.gender" required>
                </div>
                <div class="form-group">
                  <label for="category">Category</label>
                  <input type="text" class="form-control" v-model="newProduct.category" required>
                </div>
                <div class="form-group">
                  <label for="description">Description</label>
                  <textarea class="form-control" v-model="newProduct.description" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Create</button>
              </form>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Search Product -->
      <div class="row justify-content-center mt-4">
        <div class="col-md-12 col-lg-6">
          <div class="card">
            <div class="card-header">
              <h4>Search Product</h4>
            </div>
            <div class="card-body">
              <!-- Search Form -->
              <form @submit.prevent="searchProduct">
                <div class="form-group">
                  <label for="searchKeyword">Keyword</label>
                  <input type="text" class="form-control" v-model="searchKeyword" required>
                </div>
                <button type="submit" class="btn btn-primary">Search</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from "vue";
  import axios from "axios";
  import swal from 'sweetalert';
  const currentUser = JSON.parse(window.localStorage.getItem("token"));

  
  interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
    quantity: number;
    gender: string;
    category: string;
    description: string;
  }
  
  export default defineComponent({
    setup() {
      const data = ref<Product[]>([]);
      const newProduct = ref<Product>({
        id: 0,
        name: "",
        image: "",
        price: 0,
        quantity: 0,
        gender: "",
        category: "",
        description: ""
      });
      const searchKeyword = ref("");
  
      const fetchData = () => {
        axios
          .get(`http://localhost:3000/products/products`)
          .then((res) => {
            data.value = res.data;
          })
          .catch((err) => {
            console.log(err);
          });
      };
  
      onMounted(() => {
        fetchData();
      });
  
      const createProduct = () => {
        axios
          .post("http://localhost:3000/admin/products/add", newProduct.value)
          .then((res) => {
            console.log("Product created:", res.data);
            // Clear the form fields
            newProduct.value = {
              id: 0,
              name: "",
              image: "",
              price: 0,
              quantity: 0,
              gender: "",
              category: "",
              description: ""
            };
            // Refresh the product list
            fetchData();
            swal("Success", "Product created successfully!", "success");
          })
          .catch((err) => {
            console.error("Failed to create product:", err);
          });
      };
  
      const updateProduct = (product: Product) => {
        // Implement the update logic here
        console.log("Update product:", product);
        swal("Info", "Update functionality not implemented yet!", "info");
      };
  
      const deleteProduct = (productId: number) => {
        // Implement the delete logic here
        axios
        .delete(`http://localhost:3000/admin/products/${productId}`)
        .then(() => {
          data.value = data.value.filter((product) => product.id !== productId);
        })
        .catch((error) => {
          console.error("Error deleting prod:", error);
        });
        console.log("Delete product:", productId);
        swal("Success", "Product deleted successfully!", "success");      };
  
      const searchProduct = () => {
        axios.get(`http://localhost:3000/admin/products/${searchKeyword.value}`).then((res)=>{
            data.value = res.data
        })
        // Implement the search logic here
        console.log("Search keyword:", searchKeyword.value);
        
        swal("Info", "Search functionality not implemented yet!", "info");
      };
  
      return {
        data,
        newProduct,
        searchKeyword,
        createProduct,
        updateProduct,
        deleteProduct,
        searchProduct
      };
    },
  });
  </script>
  