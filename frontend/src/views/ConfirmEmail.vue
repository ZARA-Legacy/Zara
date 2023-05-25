<template>
  <h1>Thank you for confirming your email. Redirecting...</h1>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "Confirm",
  setup() {
    const userId = window.location.pathname.split("/")[2];
    onMounted(() => {
      setTimeout(() => {
        window.location.href = "/login";
      }, 2500);
      axios.get(`http://localhost:3000/auth/email/${userId}`);
    });
  },
});
</script>

<style scoped>
body {
  display: flex;
  place-items: center;
}
</style>
