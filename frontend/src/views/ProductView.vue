<!-- <template>
  <div class="container" style="margin-top: 150px">
    <div class="row justify-content-center">
      <div
        class="col-md-12 col-lg-4 mb-4"
        v-for="product in data"
        :key="product.id"
      >
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
          <button
            class="btn btn-white-hover"
            style="background-color: white; color: black"
            @click="addToCart(product)"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template> -->

<template>
  <home />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import axios from "axios";
import home from "../components/home.vue";
const currentUser = JSON.parse(window.localStorage.getItem("token"))


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
  components: { home },
  setup() {
    const gender = ref("");
    const category = ref("");
    const data = ref<Product[]>([]);
    const cart = ref<Product[]>([]);

    const fetchData = () => {
      axios
        .get(`http://localhost:3000/products/products`)
        .then((res) => {
          data.value = res.data;
          console.log(data)
        })
        
        .catch((err) => {
          console.log(err);
        });
    };

    onMounted(() => {
      fetchData();
    });

    const addToCart = (product: Product) => {
      const newCart = {
        user_id: currentUser.id,
        products_id: product.id,
      };

      axios
        .post("http://127.0.0.1:3000/cart/cart", newCart)
        .then((res) => {
          console.log("Product added to cart:", res.data);
          cart.value.push(product);
        })
        .catch((err) => {
          console.error("Failed to add product to cart:", err);
        });
    };

    return {
      gender,
      category,
      data,
      cart,
      addToCart,
    };
  },
});
</script>
