import 'vant/lib/datetime-picker/style';
import { DatetimePicker } from 'vant';
import Vue from 'vue';
import FontAwesomeIcon from '@/assets/fontawesome';
import App from './App.vue';
import router from './router';
import store from './store';
import 'vant/lib/toast/style';
// fontawesome

Vue.use(DatetimePicker);

Vue.component('icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
