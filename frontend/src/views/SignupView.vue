<template>
  <div id="signup-page">
    <div class="signup-container">
      <div class="signup-card">
        <h1 style="margin-bottom: 2rem">Personal Details</h1>
        <div class="col-md-8">
          <div class="card-body">
            <form @submit.prevent="handleSubmit">
              <input class="mb-4 input" placeholder="E-MAIL" v-model="email" />
              <div class="dbl-input" style="width: 65vw">
                <div class="pw-input">
                  <input
                    class="mb-4 input"
                    placeholder="PASSWORD"
                    type="password"
                    v-model="password"
                  />
                </div>
                <div class="pw-input">
                  <input
                    class="mb-4 input"
                    placeholder="CONFIRM PASSWORD"
                    type="password"
                    v-model="conPassword"
                  />
                </div>
              </div>
              <div class="dbl-input" style="width: 65vw; margin-bottom: 4rem">
                <div class="pw-input">
                  <input
                    class="mb-4 input"
                    placeholder="NAME"
                    type="text"
                    v-model="firstname"
                  />
                </div>
                <div class="pw-input">
                  <input
                    class="mb-4 input"
                    placeholder="SURNAME"
                    type="text"
                    v-model="lastname"
                  />
                </div>
              </div>
              <button class="mb-4 signup-btn">Create Account</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent, Ref, ref } from "vue";

export default defineComponent({
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      conPassword: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await axios.post(
          "http://localhost:3000/auth/signup",
          {
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            password: this.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log(response);
        alert("Your account has been created");
        window.localStorage.setItem("token", JSON.stringify(response.data));
        window.location.href = "/";
      } catch (error) {
        console.log(error);
        alert(
          "An error occurred while signing up. Please check your details and try again."
        );
      }
    },
  },
});
</script>

<style scoped>
input#form1 {
  width: 29.482vw;
}

#signup-container {
  margin: 0;
  margin-top: 2rem;
  padding: 0;
}

#signup-card {
  border: none;
  width: 40vw;
  display: flex;
  justify-self: flex-start;
}

#signup-page {
  font-family: "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  background-color: white;
  margin-top: 9rem;
  margin-left: 5rem;
}

#signup-page h1 {
  margin-left: 1.27em;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 550;
}

#signup-page input {
  border: none;
  border-radius: 0;
  border-bottom: 1px solid gray;
}

#signup-page input:focus {
  outline: none;
  box-shadow: none;
}

.card-body {
  padding: 0;
}

#signup-page input::placeholder {
  font-size: 10px;
}

button.signup-btn {
  text-transform: uppercase;
  font-size: 14px;
  font-family: "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  background-color: black;
  border-radius: 0;
  border: none;
  width: 20vw;
}

button.signup-btn:hover {
  background-color: rgb(41, 41, 41);
  border-radius: 0;
  border: none;
}

#signup-card a {
  text-decoration: none;
  font-size: 10px;
  color: gray;
}

.dbl-input .pw-input:last-of-type {
  margin-left: 2rem;
}

.input {
  width: 30%;
}
</style>
