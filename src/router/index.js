import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'



Vue.use(Router)
const Index=resolve=>require(['@/views/Index.vue'],resolve)
const Category=resolve=>require(['@/views/Category'],resolve)
const Cart=resolve=>require(['@/views/Cart.vue'],resolve)
const User=resolve=>require(['@/views/User.vue'],resolve)
const Login=resolve=>require(['@/views/Login.vue'],resolve)
const Detail=resolve=>require(['@/views/Detail.vue'],resolve)
const Comment=resolve=>require(['@/views/Comment.vue'],resolve)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Index
    },
    {
      path:'/category',
      name:'分类页',
      component:Category
    },
    {
      path:'/detail/:itmid',
      name:'详情页',
      component:Detail
    },
    {
      path:'/cart',
      name:'编辑页',
      component:Cart
    },
    {
      path:'/login',
      name:'登录页',
      component:Login
    },
    {
      path:'/user',
      name:'用户页',
      component:User,
      meta:{
        requireAuth:true
      }
    },
    {
       path:'/comment',
       name:'评论页',
       component:Comment
    }
  ]
})
