import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
axios.defaults.baseURL = 'http://www.liulongbin.top:3006'
Vue.prototype.$axios = axios

new Vue({
  render: h => h(App),
}).$mount('#app')
