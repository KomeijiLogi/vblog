<template>
   <div class="index">
      <v-header></v-header>
      <v-footer></v-footer>
   </div>
</template>

<script>
    import Header from '@/components/index/header.vue'
    import Footer from '@/common/footer.vue'
    export default {
        name: "index",
        components:{
          'v-header':Header,
          'v-footer':Footer
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
