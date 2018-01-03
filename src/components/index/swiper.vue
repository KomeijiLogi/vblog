<template lang="html">
    <mt-swipe :auto="4000">
       <mt-swipe-item v-for="k in swiperData">
      <router-link :to="{name:'详情页',query:{pageId:k.pageId}}">
        <img v-lazy="k.imgPath"  alt=""/>
      </router-link>
    </mt-swipe-item>
   </mt-swipe>
</template>

<script>
    export default {
        // name: "swiper"
      props:['swiperData']
    }
</script>

<style lang="less" scoped>
  .mint-swipe {
    width: 100%;
    height:50vw;
    a,img {
      display: block;
      width: 100%;
      height:100%;
    }
  }
</style>
