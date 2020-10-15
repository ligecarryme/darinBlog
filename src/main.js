import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './quasar'

axios.defaults.baseURL = "http://localhost:8079"

Vue.config.productionTip = false
// Vue.prototype.$axios = axios
Vue.use(axios,VueAxios)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')