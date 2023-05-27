import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import SignupView from "../views/SignupView.vue";
import CartView from "../views/CartView.vue";
import CategoryView from "../views/CategoryView.vue";
import ConfirmEmail from "../views/ConfirmEmail.vue";
import HomeView from "../views/HomeView.vue";
import ManageUsers from "../views/admin/AdminUserView.vue";
import HelpView from "../views/HelpView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/login", name: "login", component: LoginView },
    { path: "/signup", name: "signup", component: SignupView },
    { path: "/confirm-email/:id", name: "confEmail", component: ConfirmEmail },
    { path: "/cart", name: "cart", component: CartView },
    {
      path: "/prod/:gender/:category",
      name: "category",
      component: CategoryView,
    },
    { path: "/help", name: "help", component: HelpView },
    {
      path: "/admin",
      name: "admin",
      children: [
        { path: "users", name: "admin-users", component: ManageUsers },
        { path: "users", name: "admin-users", component: ManageUsers },
      ],
    },
  ],
});

export default router;
