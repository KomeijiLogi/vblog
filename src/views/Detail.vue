<template>
   <div class="detail">
      <v-header class="header">
        <h2 slot="title">详情页</h2>
      </v-header>
      <v-content></v-content>
      <v-footer></v-footer>
   </div>
</template>

<script>
    import Content from '@/components/detail/content.vue'
    import Footer from '@/components/detail/footer.vue'
    import Header from '@/common/header.vue'
    export default {
        name: "detail",
        components:{
          'v-footer':Footer,
          'v-content':Content,
          'v-header':Header

        },
        beforeCreate(){
           this.$store.dispatch('setDatas');
        }

    }
</script>

<style lang="less" scoped>
   @import "../assets/icons/iconfont";
   @import "../assets/fz";
   .detail{

   }

</style>
