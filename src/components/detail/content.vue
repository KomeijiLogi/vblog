<template>
    <div class="content">
        <div v-for="k in content">
           <h3 class="content-title">{{k.title}}</h3>
           <p class="content-time">{{k.time}}</p>
           <p class="content-para">{{k.para}}</p>
           <p class="content-auth">{{k.auth}}</p>
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
    color: gray;
    height: 100%;
   padding: 1vw;
    .content-title{
        text-align: center;
        .fz(font-size,40);

    }
    .content-time{
       text-align: right;

    }
    .content-para{
       .fz(text-indent,40);
       .fz(font-size,30);
       padding: 1vw;
    }
    .content-auth{
       text-align: right;
    }
 }
</style>
