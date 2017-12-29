<template>
    <div class="content">
        <div v-for="k in content">
           <div class="content-bt">
             <h3 class="content-title">{{k.title}}</h3>
             <p class="content-auth">{{k.auth}}</p>
             <p class="content-time">{{k.time}}</p>

           </div>

           <ul class="content-ul">
             <li v-for="l in k.para" class="content-para">
                  <!--<img :src="l.cimg" alt="" class="content-img"/>-->
                  <p>
                    {{l.ctext}}
                  </p>
             </li>
           </ul>

        </div>

    </div>
</template>

<script>
    export default {

        computed:{
           content(){
              return this.$store.state.detail.BlogDatas;
           }
        }
    }
</script>

<style lang="less" scoped>
 @import "../../assets/icons/iconfont";
 @import "../../assets/fz";
 .content{
    background-color: azure;
   color: #000000;
   -webkit-font-smoothing: subpixel-antialiased;
    height: 100%;
    padding: 2vw;
    background: url("../../assets/title.jpg");
    .content-title{
        text-align: center;
        .fz(font-size,42);
        padding: 2vw;
        font-weight: 500;
    }
    .content-time{
       text-align: right;
       padding: 2vw;
    }
    .content-ul{
      margin-bottom: 8vw;
      padding-bottom: 6vw;
      .content-para{
        .fz(text-indent,40);
        .fz(font-size,30);
        padding: 2vw;
        letter-spacing: .8vw;
        background-color: azure;
        .content-img{
          width: 90%;
          height:100%;
          border-radius: .5vw;
        }
      }
    }

    .content-auth{
       text-align: center;

    }
 }
</style>
