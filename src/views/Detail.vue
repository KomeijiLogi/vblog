<template>
   <div class="detail">

      <v-footer></v-footer>
   </div>
</template>

<script>
    import Footer from '@/components/detail/footer.vue'
    export default {
        name: "detail",
        components:{
          'v-footer':Footer
        }
    }
</script>

<style scoped>

</style>
