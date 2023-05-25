<template>
  <div class="card">
    <img class="card-img-top" :src="el.image" alt="Clothes Image" style="width: 318px; height: 400px" />
    <div class="card-body">
      <div class="d-flex justify-content-between">
        <h5 class="card-title">{{ el.clothesName }}</h5>
        <p class="card-text">{{ el.price }}£</p>
      </div>
      <template v-if="currentUser && currentUser.id > 0 && currentUser.isAdmin === 0">
        <button class="btn btn-primary">Add to Cart</button>
      </template>
    </div>
    <div v-if="currentUser && currentUser.isAdmin === 1">
      <button @click="remove" class="btn btn-danger">DELETE</button>
      <button @click="handleShow" class="btn btn-primary">EDIT</button>
      <div v-if="show">
        <div class="modal" tabindex="-1" role="dialog">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Update Product</h5>
                <button type="button" class="close" data-dismiss="modal" @click="handleClose">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label for="clothesName">Clothes Name</label>
                    <input type="text" class="form-control" id="clothesName" placeholder="Enter Clothes Name" v-model="updatedProduct.clothesName">
                  </div>
                  <div class="form-group">
                    <label for="image">Image</label>
                    <input type="text" class="form-control" id="image" placeholder="Enter Image URL" v-model="updatedProduct.image">
                  </div>
                  <div class="form-group">
                    <label for="price">Price</label>
                    <input type="number" class="form-control" id="price" placeholder="Enter Price" v-model="updatedProduct.price">
                  </div>
                  <div class="form-group">
                    <label for="category">Category</label>
                    <input type="text" class="form-control" id="category" placeholder="Enter Category" v-model="updatedProduct.category">
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" @click="handleClose">Close</button>
                <button type="button" class="btn btn-primary" @click="update">Update</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  props: {
    el: {
      type: Object,
      required: true,
    },
    // setCount: {
    //   type: Function,
    //   required: true,
    // },
    // count: {
    //   type: Number,
    //   required: true,
    // },
  },
  setup(props) {
    const currentUser = ref(JSON.parse(window.localStorage.getItem('token')));
    const show = ref(false);
    const updatedProduct = ref({
      clothesName: '',
      price: '',
      image: '',
      category: '',
    });

    const handleClose = () => {
      show.value = false;
    };

    const handleShow = () => {
      show.value = true;
      updatedProduct.value = {
        clothesName: props.el.clothesName,
        price: props.el.price,
        image: props.el.image,
        category: props.el.category,
      };
    };

    const update = async () => {
      try {
        // await axios.put(`http://${process.env.HOST}:${process.env.PORT}/product/${props.el.id}`, updatedProduct.value);
        // props.setCount(props.count + 1);
        handleClose();
        window.location.href ="/";
      } catch (error) {
        console.error(error);
      }
    };

    const remove = async () => {
      // await axios.delete(`http://${process.env.HOST}:${process.env.PORT}/product/${props.el.id}`);
      // props.setCount(props.count + 1);
    };

   

    return {
      currentUser,
      show,
      updatedProduct,
      handleClose,
      handleShow,
      update,
      remove,
    };
  },
});
</script>

<style scoped>
/* Add your custom styles here */
</style>
