import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import axios from 'axios'
import qs from 'qs'
import './quasar'
import 'github-markdown-css'

var $axios = axios.create({
  baseURL: "http://47.102.214.242:8079/",
  timeout: '10000'
})

var _hmt = _hmt || [];
window._hmt = _hmt;
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?023ab785335840c3baaf0276935307de";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
  console.log(s);
})();

Vue.config.productionTip = false
Vue.prototype.$axios = $axios
Vue.prototype.$qs = qs;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')