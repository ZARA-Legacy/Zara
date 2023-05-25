
<template>
    <div>
      <h2>{{ title }}</h2>
      <img :src="image" :alt="title" />
      <p>{{ price }}</p>
      <button @click="addToCart">Add to Cart</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ['title', 'price', 'image'],
    methods: {
      addToCart() {
        // Emit an event or call a method in a parent component to add the item to the cart
        this.$emit('add-to-cart', { title: this.title, price: this.price });
  
        // Show an alert message
        window.alert(`${this.title} has been added to your cart.`);
      }
    }
  }
  </script>
  