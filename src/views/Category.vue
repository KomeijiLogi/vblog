<template>
   <div class="category">
      <v-header class="header">
         <h2 slot="title">分类页</h2>
      </v-header>
      <v-footer></v-footer>
   </div>
</template>

<script>
    import Header from '@/common/header.vue'
    import Footer from '@/common/footer.vue'
    export default {
        name: "category",
       components:{
          'v-header':Header,
          'v-footer':Footer
       }
    }
</script>

<style scoped>

</style>
