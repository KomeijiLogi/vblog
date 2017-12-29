import Vue from 'vue'
import * as types from '../types'
import util from '../../util/common'

const state={
   Loading_Flag:false,   //定义loading状态显示与否
   Selected_List:'',      //选中的清单
   UnSelected_List:'',    //未选中的清单
   Card_List:'',           //总清单
   Save_Content:'',        //保存内容
   BlogDatas:'',            //从父组件传过来的博客数据
   Collect_Flag:false,     //定义收藏flag，如果为false显示未收藏
}

const mutations={
   //异步请求数据
   [types.SET_DATAS](state,res){
      state.BlogDatas=res;
   },
   [types.COLLECT_BLOG](state,res){
      state.Collect_Flag=res;
   }
}
let vm=new Vue({});

const actions={
   //从父组件发送异步请求
   setDatas({commit}){
     vm.$api({
       method:'post',
       url:'/detail'
     })
       .then((response)=>{
          commit('SET_DATAS',response.data);
       })
       .catch((error)=>{
           console.log(error);
       })
   }
}

const getters={

}

export default {
   state,
   mutations,
   actions,
   getters
}
