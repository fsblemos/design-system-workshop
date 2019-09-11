import Vue from 'vue';
import CaComponentsVue from '@contaazul/ca-components/dist/ca-components-vue.min';

import '../../src/moment-config';
import '../../__mocks__/windowMock';

Vue.use(CaComponentsVue);

Vue.config.productionTip = false;

Vue.directive('ca-tooltip', {});
