import Vue from 'vue'
import Vuex from 'vuex'

import category from 'modules/category'
import detail from 'modules/detail'
import login from 'modules/login'

Vue.use(Vuex);


const store=new Vuex.Store({
   modules:{
      category,
      detail,
      login
   }
});

export  default store;




