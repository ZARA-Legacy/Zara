<template>
  <div class="admin-dashboard">
    <h1>Admin Dashboard</h1>

    <button @click="fetchUsers" id="get-btn">Get All Users</button>

    <table v-if="users.length" class="user-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Is Admin</th>
          <th>Is Email Confirmed</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.isAdmin ? "Yes" : "No" }}</td>
          <td>{{ user.emailConfirmed ? "Yes" : "No" }}</td>
          <td>
            <button @click="deleteUser(user.id)">Delete</button>
            <button v-if="!user.isAdmin" @click="updateAdmin(user.id, true)">
              Make Admin
            </button>
            <button v-else @click="updateAdmin(user.id, false)">
              Remove Admin
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
const currentUser = JSON.parse(window.localStorage.getItem("token"));

interface User {
  id: number;
  name: string;
  isAdmin: boolean;
  emailConfirmed: boolean;
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
    updateAdmin(userId: number, admin: Boolean) {
      axios
        .put(`http://localhost:3000/admin/users/${userId}`, {
          isAdmin: admin,
        })
        .then(() => {
          const user = this.users.find((user) => user.id === userId);
          if (user) {
            user.isAdmin = admin;
          }
        })
        .catch((error) => {
          console.error("Error making user admin:", error);
        });
    },
  },
});
</script>

<style scoped>
#get-btn {
  margin: 2rem;
}
.admin-dashboard {
  font-family: "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  margin: 2rem;
  margin-top: 9rem;
}

.user-table {
  width: 100%;
  border-collapse: collapse;
}

.user-table th,
.user-table td {
  padding: 8px;
  border: 1px solid #ccc;
}

.user-table th {
  background-color: #f0f0f0;
}

button {
  margin-right: 5px;
}
</style>
