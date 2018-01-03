# vblog

>  使用 vue2.x 全家桶实现的博客项目

>技术栈:
 
##### vue2.x+vuex+vue-router+axios+less+mockjs


>说明:
###### 一直想尝试使用vue全家桶来实现移动web的开发，所以刚开始选择了交互逻辑比较少的博客来作为目标，
###### 前期使用mockjs模拟数据来提供数据支持，后期会根据nodejs，express和MongoDB的学习情况来做简单的后台
###### 以及搭建服务器

##### 现阶段实现了首页数据的展示，详情页数据展示，以及登录用户页和评论页的展示

#### 待实现:
###### 筛选分类页
###### 编辑页
###### 页面的细节调整
###### 路由的调整逻辑
###### 后台支持


>效果图演示:<br/>
![](https://github.com/KomeijiLogi/vblog/blob/master/gif/blog1.gif)  <br/>
![](https://github.com/KomeijiLogi/vblog/blob/master/gif/blog2.gif)  <br/>

>文件结构:
##### |-src
##### &nbsp; &nbsp;&nbsp;   |-assets     
#####     &nbsp;&nbsp;&nbsp;&nbsp;    |-icons     //字体文件夹
#####        &nbsp;&nbsp;&nbsp;&nbsp; |-carbg.png  //图片资源
#####         &nbsp;&nbsp;&nbsp;&nbsp;|-fz.less     //定义部分可复用less函数   
#####    &nbsp;&nbsp;&nbsp;&nbsp;     |-title.jpg    //详情页背景图
##### |-common         //公用vue组件
##### |-components     //各页面子组件
#####    &nbsp;&nbsp;&nbsp;  |-cart       //编辑页  
#####   &nbsp;&nbsp;&nbsp;   |-category   //分类页
#####  &nbsp;&nbsp;&nbsp;    |-comment     //评论页
#####     &nbsp;&nbsp;&nbsp; |-detail      //详情页                   
#####  &nbsp;&nbsp;&nbsp;    |-index       //首页
#####   &nbsp;&nbsp;&nbsp;   |-login       //登录页
#####  &nbsp;&nbsp;&nbsp;    |-user         //用户页
##### |-http
#####   &nbsp;&nbsp;   |-api.js       //封装axios
#####     &nbsp;&nbsp; |-mock.js       //模拟数据
##### |-router
#####      &nbsp;&nbsp;|-index.js     //vue 路由
##### |-util
#####     &nbsp;&nbsp; |-common.js    //工具js
##### |-views       //各页面父组件
#####      &nbsp;&nbsp;|-cart.vue
#####      &nbsp;&nbsp;|-category.vue
#####     &nbsp;&nbsp; |-comment.vue 
#####    &nbsp;&nbsp;  |-detail.vue 
#####    &nbsp;&nbsp;  |-index.vue 
#####    &nbsp;&nbsp;  |-login.vue 
#####     &nbsp;&nbsp; |-user.vue 
##### |-vuex        //vuex
#####   &nbsp;&nbsp;   |-modules   //封装modules
#####         &nbsp;&nbsp;&nbsp;&nbsp;  |-category.js 	 
#####           &nbsp;&nbsp;&nbsp;&nbsp;|-detail.js 	
#####           &nbsp;&nbsp;&nbsp;&nbsp;|-login.js 	
#####         &nbsp;&nbsp;&nbsp;|-store.js   //将vuex暴露出来
#####       &nbsp;&nbsp;&nbsp;  |-types.js   //定义types类型
##### |-App.vue
##### |-main.js            	
	 

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
