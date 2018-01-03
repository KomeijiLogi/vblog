<template lang="html">
  <footer class="footer">
      <input type="text" class="comment-input" placeholder="评论..." v-model="comment" />

      <router-link :to="{name:'详情页'}">
        <i class="iconfont icon-back"></i>
      </router-link>

      <i class="iconfont icon-email" @click="publish"></i>
  </footer>
</template>

<script>
    import { Toast } from 'mint-ui'
    export default {
        data(){
           return{
              comment:''
           }
        },
        methods:{
           //发送消息
          publish(){

           }
        }
    }
</script>

<style lang="less" scoped>
  @import "../../assets/fz";
  @import "../../assets/icons/iconfont";
 .footer{

    width: 100%;
     .bt();
     .bd();
     box-sizing: border-box;
     display: flex;
     position: fixed;
     bottom: 0;
     background-color: #fff;
    .comment-input{
        border: 1vw antiquewhite solid ;
        border-radius: 25vw;
        width: 65vw;
        padding: 2.5vw;
        .fz(font-size,30);

    }
    a{

      padding: 2vw;
      i{
        .fz(font-size,50);
      }
    }
   i{
     padding: 2vw;
     .fz(font-size,50);
   }
 }
  .iconfont{
    &::before{
       color: #a7a7a7;
    }
  }
</style>
