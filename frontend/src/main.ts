import { createApp } from "vue";
import router from "./router";
import "./style.css";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.css";
import 'mdb-vue-ui-kit/css/mdb.min.css';

const app = createApp(App);
app.use(router);
app.mount("#app");
