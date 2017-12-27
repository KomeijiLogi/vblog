<template>
   <div class="index">
      <v-header></v-header>
      <v-swiper :swiperData="datas.swiper"></v-swiper>
      <v-section1 :section1="datas.section1"></v-section1>
      <v-footer></v-footer>
   </div>
</template>

<script>
    import Header from '@/components/index/header.vue'
    import Footer from '@/common/footer.vue'
    import Section1 from '@/components/index/section1.vue'
    import Swiper from '@/components/index/swiper.vue'
    import Index from '@/http/mock.js'
    export default {
        name: "index",
        components:{
          'v-header':Header,
          'v-footer':Footer,
          'v-section1':Section1,
          'v-swiper':Swiper
        },
        data(){
           return{
              datas:'',
              loading:false
           }
        },
        beforeCreate(){
            this.$api({
               url:'/index',
               method:'post'
            }).then((response)=>{
               this.datas=response.data;
            }).catch((error)=>{
               console.log(error);
            })
        }
    }
</script>

<style lang="less" scoped>

   .index{
     width: 100%;
     padding-bottom: 14vw;
     background-color: #F8FCFF;
   }

</style>
