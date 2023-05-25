<template>
    <section style="background-color: white">
      <MDBCardBody>
        <MDBRow>
          <div style="text-align: center">
            <div class="d-flex">
              <br />
              <br />
              <br />
              <h1 style="font-size: 15px; width: 40px; height: 40px; margin-top: 150px; padding-left: 120px; text-decoration-line: underline; text-align: center;">
  Cart
</h1>

            </div>
          </div>
        </MDBRow>
      </MDBCardBody>
      <MDBContainer>
        <MDBRow class="justify-content-center">
          <template v-for="item in cart" :key="item.id">
            <MDBCol md="12" lg="4" class="mb-4">
              <MDBCard class="h-100">
                <MDBCardImage :src="item.image" :alt="item.name" class="w-100" />
                <MDBCardBody class="d-flex flex-row justify-content-between p-0 pt-1.5">
                  <span
                    class="card-title mb-3 text-left details"
                    style="
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 15px;
                      padding-left: 20px;
                      padding-top: 5px;
                    "
                  >
                    {{ item.name }}
                  </span>
                  <span
                    class="mb-3 text-right details"
                    style="
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 15px;
                      padding-right: 20px;
                      padding-top: 5px;
                    "
                  >
                    ${{ item.price }}
                  </span>
                </MDBCardBody>
                <div
                  style="
                    font-family: Arial, Helvetica, sans-serif;
                    font-size: 15px;
                    text-align: right;
                    padding-right: 20px;
                    padding-bottom: 5px;
                  "
                  @click="handleDelete(item.id)"
                >
                  DELETE
                </div>
                <p class="card-text">Quantity: {{ item.quantity }}</p>
                <button @click="incrementQuantity(item)" class="btn">+</button>
                <button @click="decrementQuantity(item)" class="btn btn-sm btn-outline-primary">-</button>
                <template v-if="showQuantityInput(item)">
                  <div>
                    <input
                      style="width: 150px; margin-right: 10px"
                      type="number"
                      class="form-control my-2"
                      placeholder="Quantity"
                      v-model="item.quantity"
                      @input="updateQuantity(item)"
                    />
                  </div>
                </template>
              </MDBCard>
            </MDBCol>
          </template>
        </MDBRow>
      </MDBContainer>
    </section>
  </template>
  
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import axios from 'axios';
  import { MDBCardBody, MDBRow, MDBCol, MDBCard, MDBCardImg, MDBContainer } from 'mdb-vue-ui-kit';

  
  interface Product {
    id: number;
    name: string;
    gender:string;
    category:string;
    quantity:number;
    price: number;
    image: string;
  }
  
  export default defineComponent({
    name: 'Cart',
    setup() {
      const currentUser = JSON.parse(window.localStorage.getItem("token"))
      console.log(currentUser,'currentUser')
      const productsUser = ref<Product[]>([]);
      let cart = ref<Product[]>([]);
      const show = ref(false);
  
      const fetch = async () => {
        try {
          const res = await axios.get(`http://localhost:3000/cart/cart:${currentUser.id}`);
          cart = res.data;
          console.log(cart,'cart')
        } catch (error) {
          console.error('Error fetching cart:', error,'hedhi loula');
        }
      };

      const fetchProduct = async () => {
  const arr: Product[] = [];
  await fetch();

  if (cart.value) {
    for (let i = 0; i < cart.value.length; i++) {
      if (cart.value[i].quantity > 0) {
        try {
          const res = await axios.get(`http://localhost:3000/cart/cart:${currentUser.id}`);
          console.log(cart.value[i], 'cart[i]');
          arr.push(res.data);
        } catch (error) {
          console.error('Error fetching product:', error, 'hedhi thenya');
        }
      }
    }
    productsUser.value = arr;
  }
};

        
      ;
  
      const handleDelete = async (productId: number) => {
        console.log(productId,'productId')
        try {
          await axios.delete(`http://127.0.0.1:3000/cart/${productId}`);
          fetchProduct(); // Fetch updated cart after deletion
        } catch (error) {
          console.error('Error deleting from cart:', error ,'hedhi theltha');
        }
      };
  
      const incrementQuantity = (item: Product) => {
        // Increment quantity logic
        item.quantity++;
        updateQuantity(item);
      };
  
      const decrementQuantity = (item: Product) => {
        // Decrement quantity logic
        if (item.quantity > 1) {
          item.quantity--;
          updateQuantity(item);
        }
      };
  
      const showQuantityInput = (item: Product) => {
        // Condition to show quantity input
        return show.value;
      };
  
      const updateQuantity = async (item: Product) => {
        // Update quantity logic
        try {
          await axios.put(`http://127.0.0.1:3000/cart/${item.id}`, { quantity: item.quantity });
        } catch (error) {
          console.error('Error updating quantity:', error ,'hedhi rab3a');
        }
      };
  
      onMounted(fetchProduct);
  
      return {
        cart,
        productsUser,
        show,
        handleDelete,
        incrementQuantity,
        decrementQuantity,
        showQuantityInput,
        updateQuantity,
        MDBCardBody,
        MDBRow,
        MDBCol,
        MDBCard,
        MDBCardImg,
        MDBContainer,
      };
    },
  });
  </script>
  
  <style scoped>
  /* CSS styles specific to this component */
  </style>
  





<!-- <template>
    <section style="background-color: white">
      <MDBCardBody>
        <MDBRow>
          <div style="text-align: center">
            <div class="d-flex">
              <br />
              <br />
              <br />
              <MDBTypography
                tag="h1"
                style="
                  font-size: 15px;
                  width: 40px;
                  height: 40px;
                  margin-top: 150px;
                  padding-left: 120px;
                  text-decoration-line: underline;
                  text-align: center;
                "
              >
                Cart
              </MDBTypography>
            </div>
          </div>
        </MDBRow>
      </MDBCardBody>
      <MDBContainer>
        <MDBRow class="justify-content-center">
          <template v-for="e in data">
            <MDBCol md="12" lg="4" class="mb-4" :key="e.id">
              <MDBCard class="h-100">
                <MDBCardImage :src="e.image" :alt="e.name" class="w-100" />
                <MDBCardBody class="d-flex flex-row justify-content-between p-0 pt-1.5">
                  <span
                    class="card-title mb-3 text-left details"
                    style="
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 15px;
                      padding-left: 20px;
                      padding-top: 5px;
                    "
                  >
                    {{ e.name }}
                  </span>
                  <span
                    class="mb-3 text-right details"
                    style="
                      font-family: Arial, Helvetica, sans-serif;
                      font-size: 15px;
                      padding-right: 20px;
                      padding-top: 5px;
                    "
                  >
                    ${{ e.price }}
                  </span>
                </MDBCardBody>
                <div
                  style="
                    font-family: Arial, Helvetica, sans-serif;
                    font-size: 15px;
                    text-align: right;
                    padding-right: 20px;
                    padding-bottom: 5px;
                  "
                  @click="handleDelete(e.products_id)"
                >
                  DELETE
                </div>
                <p class="card-text">Quantity: {{ e.productquantity }}</p>
                <button @click="icrementQuanity" class="btn">+</button>
                <button @click="decrementQuanity" class="btn btn-sm btn-outline-primary">-</button>
                <template v-if="show">
                  <div>
                    <input
                      style="width: 150px; margin-right: 10px"
                      type="number"
                      class="form-control my-2"
                      placeholder="Quantity"
                      :value="e.productquantity"
                      @input="setproductquantity($event.target.value)"
                    />
                  </div>
                </template>
              </MDBCard>
            </MDBCol>
          </template>
        </MDBRow>
      </MDBContainer>
    </section>
  </template>


<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from "axios"

interface Product {
    id: number;
    image: string;
    clothesName: string;
    price: number;
}

export default defineComponent({
    name: 'Cart',
    setup() {
        const cart = ref<any[]>([]);
        const productsUser = ref<Product[]>([]);
        const show = ref(false);

        const fetch = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/cart/cart`);
                cart.value = res.data;
            } catch (error) {
                console.error('Error fetching cart:', error);
            }
        };

        const fetchProduct = async () => {
            const arr: Product[] = [];
            await fetch();

            if (cart.value.length > 0) {
                for (let i = 0; i < cart.value.length; i++) {
                    try {
                        const res = await axios.get(`http://127.0.0.1:3000/product/${cart.value[i].product_id}`);
                        arr.push(...res.data);
                    } catch (error) {
                        console.error('Error fetching product:', error);
                    }
                }
                productsUser.value = arr;
            }
        };

        const handleDelete = async (productId: number) => {
            try {
                await axios.delete(`http://127.0.0.1:3000/cart/${productId}`);
            } catch (error) {
                console.error('Error deleting from cart:', error);
            }
        };

        const toggleShow = () => {
            show.value = !show.value;
        };

        onMounted(fetchProduct);

        return {
            cart,
            productsUser,
            show,
            handleDelete,
            toggleShow,
        };
    },
});
</script> -->
