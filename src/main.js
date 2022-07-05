import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

import axios from "axios";
axios.defaults.baseURL='http://www.liulongbin.top:3006'
// 把axios挂载到vue实例对象的原型对象上
Vue.prototype.$axios=axios

new Vue({
  render: h => h(App),
}).$mount('#app')
