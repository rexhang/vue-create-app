import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 按需导入ElementUI
import { ElementUI } from './settings';

// 导入基础全局样式文件
import './styles/index.scss';

// 使用ElementUI
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
