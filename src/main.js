import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./Lib/Time";

// Import Vuex Globally
import Vuex from "vuex";
Vue.use(Vuex);

// Import Axios and VueAxios globally
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

// Import Bootstrap and BootstrapVue CSS files (order is important)
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

// Make VueApexCharts available throughout your project
import VueApexCharts from "vue-apexcharts";
Vue.use(VueApexCharts);
Vue.component("apexchart", VueApexCharts);

import BootstrapVueTimeline from "bootstrap-vue-timeline";
import { BCard } from "bootstrap-vue";
Vue.component("b-card", BCard);
Vue.component("b-timeline", BootstrapVueTimeline);

import "es6-promise/auto";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
