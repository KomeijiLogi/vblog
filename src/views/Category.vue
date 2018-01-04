<template>
   <div class="category">
      <v-header class="header">
         <h2 slot="title">分类页</h2>
      </v-header>
      <section class="view">
          <v-aside :datas="allData"></v-aside>
          <router-view :datas="allData"></router-view>
      </section>
      <v-footer></v-footer>
   </div>
</template>

<script>
    import Header from '@/common/header.vue'
    import Footer from '@/common/footer.vue'
    import Aside from '@/components/category/aside.vue'
    export default {

       components:{
          'v-header':Header,
          'v-footer':Footer,
         'v-aside':Aside
       },
       data(){
          return{
             allData:''
          }
       },
       created(){
           this.$api({
              url:'/category',
              method:'post'
           }).then((response)=>{
              this.allData=response.data;
           }).catch((error)=>{
               console.log(error);
           });
       }
    }
</script>

<style lang="less" scoped>
  @import "../assets/icons/iconfont";
  @import "../assets/fz";

.category{
   display: flex;
   width: 100%;
   height: 100%;
  display: -webkit-box;
  display: -ms-flex;
  -webkit-box-direction: normal;
  -webkit-box-orient: vertical;
  flex-flow: column nowrap;
  .header{
     /*width: 99%;*/
  }
  .view{
    width: 100%;
    height: 80%;
    display: -webkit-box;
    display: -ms-flex;
    display: flex;
  }
}
</style>
