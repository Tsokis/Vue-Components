import Vue from 'vue'
import App from './App.vue'
// import { Browser } from '@syncfusion/ej2-base';
// import { ChartPlugin, LineSeries, Legend, Tooltip, DateTime } from "@syncfusion/ej2-vue-charts";
//
// Vue.use(ChartPlugin);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
