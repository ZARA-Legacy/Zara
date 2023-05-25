import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import SignupView from "../views/SignupView.vue";
import CartView from "../views/CartView.vue";
import ProductView from "../views/ProductView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/login", name: "login", component: LoginView },
    { path: "/signup", name: "signup", component: SignupView },
    { path: "/cart", name: "cart", component: CartView },
    { path: "/prod", name: "product", component: ProductView },
  ],
});

export default router;
