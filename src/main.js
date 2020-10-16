import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import axios from 'axios'
import './quasar'
import VueParticles from 'vue-particles'

Vue.use(VueParticles)

var $axios = axios.create({
  baseURL: 'http://localhost:8079',
  timeout: '10000'
})

Vue.config.productionTip = false
Vue.prototype.$axios = $axios

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')