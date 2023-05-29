<template>
  <h2 style="margin-top: 9.6rem">User Profile</h2>
  <div class="userprofile">
    <button>Change Password</button>
    <form @submit.prevent="handleSubmit">
      <div class="password">
        <label>Current Password:</label>
        <input type="password" v-model="currentPassword" />
      </div>
      <div>
        <label>New Password:</label>
        <input type="password" v-model="newPassword" />
      </div>
      <button type="submit">Save</button>
    </form>
    <button @click="logout">LOGOUT</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Profile",
  setup() {
    const currentPassword = ref("");
    const newPassword = ref("");
  },
  methods: {
    logout() {
      window.localStorage.removeItem("token");
      window.location.href = "/";
    },
    handleSubmit() {},
  },
});
</script>

<style scoped>
.userprofile {
  margin: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
