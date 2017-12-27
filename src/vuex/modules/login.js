
import * as types from '../types'


const state={
   token:0,
   username:'',         //账号
   password:'',         //密码
   userInfo:{
      imgAvatar:'',   //头像
      userId:'',        //用户序列id
      nickName:'',      //昵称

   }
}

const mutations={
   [types.LOGIN_TOKEN](state,res){
        state.token=res;
   },
   [types.OUT_LOG](state,res){
       state.username='';
       state.password='';
   },
   [types.IN_LOG](state,res){
      state.username=res.username;
      state.password=res.password;
   }
}

export default {
   state,
   mutations
}
