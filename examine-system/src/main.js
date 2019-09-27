import Vue from "vue";
import App from "./App.vue";
import "./plugins/index.js";
import router from "./router/router";
import store from "./store/store";
import "./assets/style/common.css"
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
