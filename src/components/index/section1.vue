<template lang="html">
    <section class="section1" v-if="section1">
        <h1 class="section1-title" >
           索引目录
           <i class="iconfont icon-more"></i>
        </h1>
        <ul class="section1-list">
           <li v-for="k in section1.list">
              <router-link :to="{name:'详情页',query:{pageId:k.pageId}}" :key="k.id">
                  <div class="section1-line">
                      <img :src="k.imgPath" alt=""/>
                      <div>
                        <h4 class="section1-line-title">
                          {{k.title}}
                        </h4>
                        <h5 class="section1-line-content">
                          {{k.content}}
                        </h5>
                      </div>

                  </div>
              </router-link>
           </li>
        </ul>
        <router-link :to="{name:'详情页',query:{pageId:1}}" class="section1-banner">
            <img v-lazy="section1.banner" v-if="section1" class="section1-banner" alt=""/>
        </router-link>
    </section>
</template>

<script>
    export default {
        name: "section1",
        props:['section1']
    }
</script>

<style lang="less" scoped>
    @import '../../assets/fz.less';
    @import '../../assets/icons/iconfont';
   .section1{

       .section1-title{
         .bt();
         background-color: #ffffff;
         text-align: center;
         padding: 4vw 0;
         .fz(font-size,30);
         color:#333;
         position: relative;
         i{
           position: absolute;
           right:6vw;
           top:50%;
           .fz(font-size,36);
           .fz(margin-top,-16);
           &::before{
             color: rgb(159, 159, 159);
           }
         }
       }
      .section1-list{
        display: -ms-flex;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        /*-ms-flex-pack: distribute;*/
        justify-content: space-around;
        padding:0 2vw 4vw 2vw;
        li{
          width: 100%;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          padding: 1vw;
          .section1-line{
             img{
               width: 10%;
               height: inherit;
               display: inline-block;
               vertical-align: top;
             }
            div{
               display: inline-block;

              .section1-line-title{
                padding:1vw 0 0 2vw;
                color: #57AEF1;
                .fz(font-size,26);

              }
              .section1-line-content{
                padding:0 0 0 2vw;
                .fz(font-size,30);
              }
            }


          }
        }

      }

     .section1-banner {
       display: block;
       width: 100vw;
       img {
         width: 100%;
         height: 24vw;
       }
     }
   }
</style>
