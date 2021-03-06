import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'



Vue.use(Router)
const Index=resolve=>require(['@/views/Index.vue'],resolve)
const Category=resolve=>require(['@/views/Category.vue'],resolve)
const CategoryMain=resolve=>require(['@/components/category/main.vue'],resolve)
const Cart=resolve=>require(['@/views/Cart.vue'],resolve)
const User=resolve=>require(['@/views/User.vue'],resolve)
const Login=resolve=>require(['@/views/Login.vue'],resolve)
const Detail=resolve=>require(['@/views/Detail.vue'],resolve)
const Comment=resolve=>require(['@/views/Comment.vue'],resolve)
const Search=resolve=>require(['@/views/Search'],resolve)

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
      component:Category,
      redirect:'/category/all',
      children:[
        {
          path:'/category/:tab',
          component:CategoryMain
        }
      ]

    },
    {
      path:'/detail',
      name:'详情页',
      component:Detail,

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
    },
    {
      path:'/search',
      name:'搜索页',
      component:Search
    }
  ]
})
