import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import Buefy from "buefy";
import vuetify from './plugins/vuetify';
// import '@/styles/index.scss';

// Vue.use(Buefy);



Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
