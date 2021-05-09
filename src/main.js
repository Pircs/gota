import 'vant/lib/datetime-picker/style';
import { DatetimePicker, Progress, ActionSheet } from 'vant';
import Vue from 'vue';
import FontAwesomeIcon from '@/assets/fontawesome';
import App from './App.vue';
import router from './router';
import store from './store';

// fontawesome

// vant start
import 'vant/lib/toast/style';

import 'vant/lib/progress/style';

import 'vant/lib/action-sheet/style';

Vue.use(Progress);

Vue.use(ActionSheet);
// vant done

Vue.use(DatetimePicker);
Vue.component('icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
