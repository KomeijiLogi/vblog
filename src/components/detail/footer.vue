<template>
   <footer class="footer">

       <router-link :to="{name:'首页'}" class="footer-index">
          <i class="iconfont icon-information"></i>
       </router-link>
        <i class="iconfont icon-favorite" @click="collect" :class="{isCollect:isCflag}"></i>
        <router-link :to="{name:'评论页'}">
            <i class="iconfont icon-comments"></i>
        </router-link>
        <i class="iconfont icon-email"></i>
   </footer>
</template>

<script>
    import {Toast} from 'mint-ui'
    export default {
        data:{


        },
        methods:{
            collect(){
                if(this.$store.state.detail.Collect_Flag){
                  this.$store.commit('COLLECT_BLOG',false);
                  this.isCflag=false;
                  Toast({
                    message:'取消收藏',
                    position:'bottom',
                    duration:2000
                  });
                }else {
                  this.$store.commit('COLLECT_BLOG',true);
                  this.isCflag=true;
                  Toast({
                    message:'收藏成功',
                    position:'bottom',
                    duration:2000
                  });
                }

            }

        },
      computed:{
        isCflag(){
           if(this.$store.state.detail.Collect_Flag){
              return true;
           }
          return false;
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
  .isCollect{
    color: @cl;
    background-color: #ffffff;
  }
}
</style>
