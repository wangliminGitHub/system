import Vue from "vue";
import Vuex from "vuex";
import CreateLogger from "vuex/dist/logger";
import modules from "./moudles";
import { system } from "@/setting";
Vue.use(Vuex);
const store = new Vuex.Store({
  modules,
  strict: !system.isProduction,
  plugins: !system.isProduction ? [CreateLogger()] : []
});
export default store;
