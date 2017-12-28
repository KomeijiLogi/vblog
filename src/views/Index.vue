<template>
   <div class="index">
      <v-header></v-header>
      <v-swiper :swiperData="datas.swiper"></v-swiper>
      <v-service></v-service>
      <v-section1 :section1="datas.section1"></v-section1>
      <v-section2 :section2="datas.section2"></v-section2>
      <v-footer></v-footer>
   </div>
</template>

<script>
    import Header from '@/components/index/header.vue'
    import Footer from '@/common/footer.vue'
    import Section1 from '@/components/index/section1.vue'
    import Section2 from '@/components/index/section2.vue'
    import Swiper from '@/components/index/swiper.vue'
    import Service from '@/components/index/service.vue'
    import Index from '@/http/mock.js'
    export default {
        name: "index",
        components:{
          'v-header':Header,
          'v-footer':Footer,
          'v-section1':Section1,
          'v-section2':Section2,
          'v-swiper':Swiper,
          'v-service':Service
        },
        data(){
           return{
              datas:'',
              loading:false
           }
        },
        beforeCreate(){
            this.$api({
               url:'http://api.com/index',
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
