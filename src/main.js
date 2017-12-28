// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mint from 'mint-ui'           //mint-ui
import axios from 'axios'            //axios'
import 'mint-ui/lib/style.css'
import store from '@/vuex/store.js'   //vuex


Vue.use(mint)
Vue.config.productionTip = false
Vue.prototype.$api=axios;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
