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

export default api;
