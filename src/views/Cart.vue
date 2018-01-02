<template>
   <div class="cart">
      <v-header class="header">
         <h2 slot="title">编辑页</h2>
      </v-header>
      <v-footer></v-footer>
   </div>
</template>

<script>
    import Header from '@/common/header.vue'
    import Footer from '@/common/footer.vue'
    export default {
        name: "cart",
        components:{
           'v-header':Header,
           'v-footer':Footer
        }
    }
</script>

<style scoped>

</style>
