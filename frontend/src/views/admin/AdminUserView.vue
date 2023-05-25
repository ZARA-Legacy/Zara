<template>
  <div>
    <h1>Admin Dashboard</h1>

    <button @click="fetchUsers">Get All Users</button>

    <table v-if="users.length">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Is Admin</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.isAdmin ? "Yes" : "No" }}</td>
          <td>
            <button @click="deleteUser(user.id)">Delete</button>
            <button @click="makeAdmin(user.id)">Make Admin</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

interface User {
  id: number;
  name: string;
  isAdmin: boolean;
}

export default defineComponent({
  data() {
    return {
      users: [] as User[],
    };
  },
  methods: {
    fetchUsers() {
      axios
        .get("http://localhost:3000/admin/users/all")
        .then((response) => {
          this.users = response.data;
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
        });
    },
    deleteUser(userId: number) {
      axios
        .delete(`http://localhost:3000/admin/users/${userId}`)
        .then(() => {
          this.users = this.users.filter((user) => user.id !== userId);
        })
        .catch((error) => {
          console.error("Error deleting user:", error);
        });
    },
    makeAdmin(userId: number) {
      axios
        .put(`http://localhost:3000/admin/users/${userId}`)
        .then(() => {
          const user = this.users.find((user) => user.id === userId);
          if (user) {
            user.isAdmin = true;
          }
        })
        .catch((error) => {
          console.error("Error making user admin:", error);
        });
    },
  },
});
</script>
