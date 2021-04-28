import Vue from 'vue';
import FontAwesomeIcon from '@/assets/fontawesome';
import App from './App.vue';
import router from './router';
import store from './store';

// fontawesome

Vue.component('icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
