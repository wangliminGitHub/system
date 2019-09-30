import Vue from "vue";
import Vuex from "vuex";
import CreateLogger from "vuex/dist/logger";
import modules from "./moudles";
import { settings } from "@/setting";
Vue.use(Vuex);
const store = new Vuex.Store({
  modules,
  strict: !settings.isProduction,
  plugins: !settings.isProduction ? [CreateLogger()] : []
});
export default store;
