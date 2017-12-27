// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mint from 'mint-ui'           //mint-ui
import axios from 'axios'            //axios'
import 'mint-ui/lib/style.css'

Vue.use(mint)
Vue.config.productionTip = false
Vue.prototype.$ajax=axios;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
