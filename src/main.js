// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mint from 'mint-ui'           //mint-ui
import axios from 'axios'            //axios'
import 'mint-ui/lib/style.css'
import store from '@/vuex/store.js'   //vuex
import api from '@/http/api.js'


Vue.use(mint)
Vue.config.productionTip = false
Vue.prototype.$api=api;

//使用钩子函数，定义个全局守卫，对需要登录才能进行操作做处理
router.beforeEach((to,from,next)=>{
    if(to.meta.requireAuth){
      //需要权限
      if(store.state.login.token){
         //有权限，直接跳转
         next();

      }else {
         //没有权限，重定向到登录页
         next({
            path:'/login',
            query:{redirect:to.fullPath}    //然后调回到原路由
         });
      }
    }else {
       //不需要权限，直接跳转
       next();
    }

});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
