import Vue from 'vue'
import App from './App'
// import router from './router'
import axios from 'axios';

Vue.config.productionTip = false
Vue.prototype.$ajax = axios;//全局注册
Vue.prototype.$axios = axios;
Vue.prototype.$loading;
// Vue.use( axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  render: h => h(App)
})
