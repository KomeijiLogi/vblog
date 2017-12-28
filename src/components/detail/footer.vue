<template>
   <footer class="footer">
       <router-link :to="{name:'首页'}" class="footer-index">
          <i class="iconfont icon-back"></i>
       </router-link>
        <i class="iconfont icon-favorite"></i>
        <router-link :to="{name:''}">
           <i class="iconfont icon-comments"></i>
        </router-link>
        <i class="iconfont icon-delete"></i>
   </footer>
</template>

<script>
    export default {
        name: "footer",
        methods:{
           delete(){

           },
           favorite(){

           }

        }
    }
</script>

<style lang="less" scoped>
 @import "../../assets/icons/iconfont";
 @import "../../assets/fz";
.footer{
   width: 100%;
   display: -webkit-flex;
   display: -ms-flex;
   display: flex;
   height: 10vw;
   position: fixed;
   bottom: 0;
   left: 0;
   background-color: #fff;

   -moz-user-select: none;
   -webkit-user-select: none;
   .pt();
   .bt();
   a{
      width: 25vw;
      height: 25vw;
     text-align: center;

      i{
        .fz(font-size,50);
         vertical-align: center;
      }
   }
   i{
     width: 20vw;
     height: 20vw;
     text-align: center;
     vertical-align: center;
     .fz(font-size,50);
   }

}
</style>
