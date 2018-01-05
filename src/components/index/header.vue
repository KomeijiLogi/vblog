<template>
    <mt-header fixed title="V博客">
       <!--<router-link to="/" slot="left">-->
           <!--<mt-button icon="back"></mt-button>-->
       <!--</router-link>-->
       <router-link to="/search" slot="right">
          <mt-button icon="search" ></mt-button>
       </router-link>

    </mt-header>
</template>

<script>
    export default {
        // name: "header"
    }
</script>

<style lang="less" scoped>
   @import "../../assets/icons/iconfont.less";
   @import "../../assets/fz.less";
   .mint-header{
     .fz(font-size, 35)!important;
     padding: 5.8vw 3.8vw;
   }
</style>
