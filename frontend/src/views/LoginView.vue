<template>
  <!-- <navbar /> -->
  <div id="login-page">
    <div id="login-container">
      <div class="row g-0 d-flex">
        <div id="login-card" class="card">
          <h1 style="margin-bottom: 2rem">Log in to your account</h1>
          <div class="col-md-6">
            <div id="card-body" class="card-body">
              <form @submit.prevent="handleSubmit">
                <div class="mb-4">
                  <input
                    v-model="email"
                    class="form-control"
                    placeholder="E-MAIL"
                  />
                </div>
                <div class="mb-4">
                  <input
                    v-model="password"
                    class="form-control"
                    type="password"
                    placeholder="PASSWORD"
                  />
                </div>
                <button class="mb-4 login-btn">Log in</button>
              </form>
              <div class="d-flex justify-content-between mb-4">
                <a href="#!">Have you forgotten your password?</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6" id="need-account">
          <h3>Need an Account?</h3>
          <router-link to="/signup"
            ><button class="mb-4" id="register-btn">
              Register
            </button></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
// import navbar from "../components/navbar.vue"
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Login",
  setup() {
    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      try {
        if (email.value === "" || password.value === "") {
          return alert("fill the rows please");
        }
        const response = await axios.post("http://localhost:3000/auth/login", {
          email: email.value,
          password: password.value,
        });// const currentUser = JSON.parse(window.localStorage.getItem("token"))
        alert("logged in");
        window.localStorage.setItem("token", JSON.stringify(response.data));
        window.location.href = "/";
      } catch (error) {
        alert("check your password or email");
      }
    };

    return {
      email,
      password,
      handleSubmit,
    };
  },
});
</script>

<style scoped>
#login-container {
  margin: 0;
  margin-top: 9rem;
  padding: 0;
}

#login-card {
  border: none;
  width: 30vw;
  display: flex;
  justify-self: flex-start;
}

#login-page {
  font-family: "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  background-color: white;
  margin-top: 9rem;
  margin-left: 5rem;
}

#login-page h1 {
  margin-left: 0.03em;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 550;
}

#login-page input {
  border: none;
  border-radius: 0;
  border-bottom: 1px solid gray;
  width: 130%;
}

#login-page input:focus {
  outline: none;
  box-shadow: none;
}

#card-body {
  padding: 0;
}

#login-page input::placeholder {
  font-size: 10px;
}

button.login-btn {
  background-color: black;
  border-radius: 0;
  border: none;
  width: 20vw;
}

button.login-btn:hover {
  background-color: rgb(41, 41, 41);
  border-radius: 0;
  border: none;
}

#login-card a {
  text-decoration: none;
  font-size: 10px;
  color: gray;
}

#need-account {
  width: 56vw;
}

#need-account h3 {
  margin-left: 1em;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 550;
}

button#register-btn {
  width: 29vw;
  margin-top: 2rem;
  background: white;
  border: 1px solid black;
  color: rgb(77, 77, 77);
  border-radius: 0;
}

button#register-btn:hover {
  width: 29vw;
  margin-top: 2rem;
  background: white;
  border: 1px solid rgb(77, 77, 77);
  border-radius: 0;
}
</style>
