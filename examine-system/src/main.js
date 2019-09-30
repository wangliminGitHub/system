import Vue from "vue";
import App from "./App.vue";
import "./router/permission.js";
import "./plugins/index.js";
import router from "./router/router";
import store from "./store/store";
import "./assets/style/common.css";
import axios from "axios";
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
