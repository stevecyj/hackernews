import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { fetchListData } from "@/api/api";

Vue.config.productionTip = false;

function getTopItems() {
  return fetchListData("top").then((items) => {
    // console.log("topItems", items);
    return items;
  });
}

getTopItems().then((items) => {
  window.items = items;
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
});
