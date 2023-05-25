<template>
    <Card style="width: 20rem; background: white; margin: 20px 10px; position: static" :class="styles['clothescard']">
      <Card.Img variant="top" :src="el.image" style="width: 318px; height: 400px" />
      <Card.Body>
        <div style="display:flex; justify-content: space-between">
          <Card.Title>{{ el.clothesName }}</Card.Title>
          <Card.Text>{{ el.price }}£</Card.Text>
        </div>
        <template v-if="currentUser && currentUser.id > 0 && currentUser.isAdmin === 0">
          <Button variant="primary" @click="addToCart">
            Add to Cart
          </Button>
        </template>
      </Card.Body>
      <div v-if="currentUser && currentUser.isAdmin === 1">
        <button @click="remove" style="background: black; border: none; color: white">DELETE</button>
        <Button variant="primary" @click="handleShow" style="background: white; border: none; color: black" class="btn1">
          EDIT
        </Button>
        <Modal v-model="show" @hide="handleClose">
          <Modal.Header closeButton>
            <Modal.Title>Update Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group class="mb-3" controlId="formBasicEmail">
                <Form.Label>Clothes Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Clothes Name"
                  v-model="updatedProduct.clothesName"
                />
              </Form.Group>
              <Form.Group class="mb-3" controlId="formBasicEmail">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Image URL"
                  v-model="updatedProduct.image"
                />
              </Form.Group>
              <Form.Group class="mb-3" controlId="formBasicEmail">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Price"
                  v-model="updatedProduct.price"
                />
              </Form.Group>
              <Form.Group class="mb-3" controlId="formBasicEmail">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Category"
                  v-model="updatedProduct.category"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" @click="handleClose">
              Close
            </Button>
            <Button variant="primary" style="background: black; border: none" @click="update">
              Update
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Card>
  </template>
  
  <script>
  import { ref, useContext } from 'vue';
  import Button from 'react-bootstrap/Button';
  import Card from 'react-bootstrap/Card';
  import Modal from 'react-bootstrap/Modal';
  import Form from 'react-bootstrap/Form';
  import axios from 'axios';
  import { useRouter } from 'vue-router'; // Import the useRouter function
  
  import styles from '../styles/Layout.module.css';
  import { Context } from './Context';
  
  export default {
    props: {
      el: {
        type: Object,
        required: true,
      },
      setCount: {
        type: Function,
        required: true,
      },
      count: {
        type: Number,
        required: true,
      },
    },
    setup(props) {
      const { currentUser } = useContext(Context);
      const show = ref(false);
      const updatedProduct = ref({
        clothesName: '',
        price: '',
        image: '',
        category: '',
      });
  
      const router = useRouter(); // Initialize the router
  
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
  
      const handleChange = (e) => {
        updatedProduct.value = {
          ...updatedProduct.value,
          [e.target.name]: e.target.value,
        };
      };
  
      const update = async () => {
        try {
          await axios.put(`http://${process.env.HOST}:${process.env.PORT}/product/${props.el.id}`, updatedProduct.value);
          props.setCount(props.count + 1);
          handleClose();
          router.push('/clothes');
        } catch (error) {
          console.error(error);
        }
      };
  
      const remove = async () => {
        await axios.delete(`http://${process.env.HOST}:${process.env.PORT}/product/${props.el.id}`);
        props.setCount(props.count + 1);
      };
  
      const addToCart = async () => {
        if (!currentUser) {
          setShowLogin(true);
        } else {
          const payload = {
            product_id: props.el.id,
            user_id: currentUser.id,
          };
          try {
            const response = await axios.post(`http://${process.env.HOST}:${process.env.PORT}/cart`, payload);
            console.log('Product added to cart:', response.data);
          } catch (error) {
            console.error('Error adding product to cart:', error);
          }
        }
      };
  
      return {
        currentUser,
        show,
        updatedProduct,
        handleClose,
        handleShow,
        handleChange,
        update,
        remove,
        addToCart,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  </style>
  