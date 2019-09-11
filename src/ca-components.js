import '@contaazul/ca-components/dist/ca-components.min.css';

import Vue from 'vue';
import caComponents from '@contaazul/ca-components/dist/ca-components.min';
import CaComponentsVue from '@contaazul/ca-components/dist/ca-components-vue.min';
import store from './store';
import router from './router';

window.caComponents = caComponents;

Vue.use(CaComponentsVue, { router, store });
