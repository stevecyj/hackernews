import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { fetchListData } from "@/api/api";

Vue.config.productionTip = false;

fetchListData("top");

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
