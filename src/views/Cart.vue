<template>
   <div class="cart">
      <v-header class="header">
         <h2 slot="title">编辑页</h2>
      </v-header>
      <v-edit></v-edit>
      <v-footer></v-footer>
   </div>
</template>

<script>
    import Header from '@/common/header.vue'
    import Footer from '@/common/footer.vue'
    import Edit from '@/components/cart/edit.vue'
    export default {
        name: "cart",
        components:{
           'v-header':Header,
           'v-footer':Footer,
          'v-edit':Edit
        }
    }
</script>

<style scoped>

</style>
