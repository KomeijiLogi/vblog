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

}

const mutations={
   //异步请求数据
   [types.SET_DATAS](state,res){
      state.BlogDatas=res;
   },

}

const actions={

}

const getters={

}

export default {
   state,
   mutations,
   actions,
   getters
}
