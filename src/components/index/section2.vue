<template lang="html">
   <section class="section2" v-if="section2">
      <div class="section2-list" >
         <ul>
            <li v-for="k in section2.list" :key="k.id">
               <router-link :to="{name:'详情页',query:{pageId:k.pageId}}">
                   <h4 class="section2-title">
                     {{k.title}}
                   </h4>
                   <div class="section2-img">
                      <img :src="k.imgPath1" alt=""/>
                      <img :src="k.imgPath2" alt=""/>
                      <img :src="k.imgPath3" alt=""/>
                   </div>
               </router-link>
            </li>
         </ul>
         <router-link :to="{name:'详情页',query:{pageId:2}}" class="section2-banner">
             <img v-lazy="section2.banner" v-if="section2" class="section2-banner" alt=""/>
         </router-link>
      </div>
   </section>
</template>

<script>
    export default {
        name: "section2",
        props:['section2']
    }
</script>

<style lang="less" scoped>
  @import '../../assets/fz.less';
  @import '../../assets/icons/iconfont';

  .section2{
    .section2-list{
       .pt();
       ul{
         li{
            padding-left: 3vw;
            .section2-title{
               text-align: center;
            }
            .section2-img{
               text-align: center;
               display: inline-block;
               padding: 1vw;

               img{
                 width: 30vw;
                 height: 10vw;
                 display: inline-block;
               }
            }
         }
       }
    }


    .section2-banner {
      display: block;
      width: 100vw;
      img {
        display: block;
        height: 24vw;
        width: 100%;
      }
    }
  }
</style>
