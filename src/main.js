import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import axios from 'axios'
import qs from 'qs'
import './quasar'
import 'github-markdown-css'

var $axios = axios.create({
  baseURL: 'http://localhost:8079',
  timeout: '10000'
})

Vue.config.productionTip = false
Vue.prototype.$axios = $axios
Vue.prototype.$qs = qs;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')