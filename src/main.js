import Vue from 'vue';
import App from './App.vue';
import router from './router';

import './moment-config';
import './ca-components';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
