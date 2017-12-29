import Vue from 'vue'
import axios from 'axios'
import store from  '@/vuex/store.js'


const api=axios.create({
   baseURL:'http://api.com',
   timeout:5000,
   headers:{
     'Content-Type': 'application/x-www-form-urlencoded',
     'X-Requested-With':'XMLHttpRequest'
   }
});

api.interceptors.request.use(function (config) {

  return config;
},function (error) {
  //错误提示
  alert(error);

  return Promise.reject(error);
});


api.interceptors.response.use(function (response) {

   return response;
},function (error) {
  //对响应错误所做操作
  if(error.response){
    //返回状态码是401 未授权
    if(error.response.status==401){
      //对其进行重定向
       router.replace({
         path:'/login',
         query:{redirect:router.currentRoute.fullPath}
       })
    }
  }

  return Promise.reject(error);
});


export default api;
