<template>
  <div class="container" style="margin-top: 150px">
    <div class="row justify-content-center">
      <div
        class="col-md-12 col-lg-4 mb-4"
        v-for="e in cart"
        :key="e.id"
      >
        <div class="card h-100">
          <img :src="e.image" :alt="e.name" class="card-img-top" />
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
              {{ e.name }}
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
              ${{ e.price }}
            </span>
          </div>
          <div class="card-text" :style="{
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontSize: '15px',
            paddingLeft: '20px',
            paddingTop: '5px',
          }">
            {{ e.description }}
          </div>
          <div class="qty-input">
            <button
              class="qty-count qty-count--minus"
              data-action="minus"
              type="button"
              @click="decrementQuantity(e)"
            >
              -
            </button>
            <input
              class="product-qty"
              type="number"
              name="product-qty"
              min="1"
              max="10"
              :value="fakeQuantities[e.id]"
              @input="updateFakeQuantity(e, $event.target.value)"
            />
            <button
              class="qty-count qty-count--add"
              data-action="add"
              type="button"
              @click="incrementQuantity(e)"
            >
              +
            </button>
          </div>
          <button
            class="btn btn-white-hover"
            style="background-color: white; color: black"
            @click="handleDelete(e.id)"
          >
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';

interface Product {
  id: number;
  name: string;
  gender: string;
  category: string;
  quantity: number;
  price: number;
  image: string;
  description: string;
}

export default defineComponent({
  name: 'Cart',
  setup() {
    const currentUser = JSON.parse(window.localStorage.getItem('token'));
    const cart = ref<Product[]>([]);
    const fakeQuantities = ref<  number >(1);

    const fetch = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/cart/one/${currentUser.id}`);
        cart.value = res.data;
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };

    const handleDelete = async (productId: number) => {
      try {
        await axios.delete(`http://127.0.0.1:3000/cart/${currentUser.id}/${productId}`);
        fetch(); // Fetch updated cart after deletion
      } catch (error) {
        console.error('Error deleting from cart:', error);
      }
    };

    const incrementQuantity = (item: Product) => {
      const productId = item.id;
      if (fakeQuantities.value[productId]) {
        fakeQuantities.value[productId]++;
      } else {
        fakeQuantities.value[productId] = 1;
      }
    };

    const decrementQuantity = (item: Product) => {
      const productId = item.id;
      if (fakeQuantities.value[productId] && fakeQuantities.value[productId] > 1) {
        fakeQuantities.value[productId]--;
      }
    };

    const updateFakeQuantity = (item: Product, newQuantity: string) => {
      const productId = item.id;
      fakeQuantities.value[productId] = Number(newQuantity);
    };

    fetch();

    return {
      cart,
      fakeQuantities,
      handleDelete,
      incrementQuantity,
      decrementQuantity,
      updateFakeQuantity,
    };
  },
});
</script>

<style scoped>
/* CSS styles specific to this component */
</style>

<!-- <template>
  <div class="container" style="margin-top: 150px">
    <div class="row justify-content-center">
      <div
  class="col-md-12 col-lg-4 mb-4"
  v-for="e in cart"
  :key="e.id"
>
  <div class="card h-100">
    <img :src="e.image" :alt="e.name" class="card-img-top" />
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
        {{ e.name }}
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
        ${{ e.price }}
      </span>
    </div>
    <div class="card-text" :style="{
      fontFamily: 'Arial, Helvetica, sans-serif',
      fontSize: '15px',
      paddingLeft: '20px',
      paddingTop: '5px',
    }">
      {{ e.description }}
    </div>
    <div class="qty-input">
      <button
        class="qty-count qty-count--minus"
        data-action="minus"
        type="button"
        @click="decrementQuantity(e)"
      >
        -
      </button>
      <input
        class="product-qty"
        type="number"
        name="product-qty"
        min="1"
        max="10"
        :value="fakeQuantities[e.id]"
        @input="updateFakeQuantity(e, $event.target.value)"
      />
      <button
        class="qty-count qty-count--add"
        data-action="add"
        type="button"
        @click="incrementQuantity(e)"
      >
        +
      </button>
    </div>
  </div>
  <button
    class="btn btn-white-hover"
    style="background-color: white; color: black"
    @click="handleDelete(e.id)"
  >
    Remove from Cart
  </button>
</div>
          <p class="card-text">Quantity: {{ QUANTITY.value }}</p>
                <button @click="incrementQuantity(e)" class="btn">+</button>
                <button @click="decrementQuantity(e)" class="btn btn-sm btn-outline-primary">-</button>
        </div>
      </div>
</template>



<script lang="ts">
  import { defineComponent, ref, onMounted , resolveComponent } from 'vue';
  import axios from 'axios';
  import { MDBRow } from 'mdb-vue-ui-kit';
  
  import { MDBCardBody, MDBCol, MDBCard, MDBCardImg, MDBContainer } from 'mdb-vue-ui-kit';
  

  interface Product {
    id: number;
    name: string;
    gender:string;
    category:string;
    quantity:number;
    price: number;
    image: string;
    description:string;
  }
  let QUANTITY = ref(1)

  export default defineComponent({
    name: 'Cart',
    setup() {
      const currentUser = JSON.parse(window.localStorage.getItem("token"))
      console.log(currentUser,'currentUser')
      const productsUser = ref<Product[]>([]);
      let cart = ref<Product[]>([]);
      const show = ref(false);
      const MDBRow = resolveComponent('MDBRow');
      
      
      const fetch = async () => {
        try {
          const res = await axios.get(`http://localhost:3000/cart/one/${currentUser.id}`);
          cart.value = res.data;
          // console.log(cart.value)
          // console.log(currentUser.id,'currentUser.id')
          console.log(res.data,'ooo')
        } catch (error) {
          console.error('Error fetching cart:', error,'hedhi loula');
        }
      };
      
      const handleDelete = async (productId: number) => {
        console.log(productId,'productId')
        try {
          await axios.delete(`http://127.0.0.1:3000/cart/${currentUser.id}/${productId}`);
          fetch(); // Fetch updated cart after deletion
        } catch (error) {
          console.error('Error deleting from cart:', error ,'hedhi theltha');
        }
      };
      
      const incrementQuantity = (quantity: number) => {
        // Increment quantity logic
        QUANTITY.value++;
        // updateQuantity();
      };
      
      const decrementQuantity = (item: Product) => {
        // Decrement quantity logic
        if (QUANTITY.value > 1) {
          QUANTITY.value--;
        }

      };
      
      const showQuantityInput = (item: Product) => {
        // Condition to show quantity input
        return show.value;
      };
      
      // const updateQuantity = async (item: Product) => {
      //   // Update quantity logic
      //   try {
      //     await axios.put(`http://127.0.0.1:3000/cart/${item.id}`, { quantity: item.quantity });
      //   } catch (error) {
      //     console.error('Error updating quantity:', error ,'hedhi rab3a');
      //   }
      // };
      
      onMounted(fetch);
      
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
  </style> -->
  
  
  
  
  
  <!-- <template>
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
            <template v-for="e in cart" :key="e.id">
              <MDBCol md="12" lg="4" class="mb-4">
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
                    @click="handleDelete(e.id)"
                  >
                    DELETE
                  </div>
                  <p class="card-text">Quantity: {{ e.quantity }}</p>
                  <button @click="incrementQuantity(e)" class="btn">+</button>
                  <button @click="decrementQuantity(e)" class="btn btn-sm btn-outline-primary">-</button>
                  <template v-if="showQuantityInput(e)">
                    <div>
                      <input
                        style="width: 150px; margin-right: 10px"
                        type="number"
                        class="form-control my-2"
                        placeholder="Quantity"
                        v-model="e.quantity"
                        @input="updateQuantity(e)"
                      />
                    </div>
                  </template>
                </MDBCard>
              </MDBCol>
            </template>
          </MDBRow>
        </MDBContainer>
      </section>
    </template> -->


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
