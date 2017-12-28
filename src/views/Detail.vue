<template>
   <div class="detail">
      <v-content></v-content>
      <v-footer></v-footer>
   </div>
</template>

<script>
    import Content from '@/components/detail/content.vue'
    import Footer from '@/components/detail/footer.vue'
    export default {
        name: "detail",
        components:{
          'v-footer':Footer,
          'v-content':Content
        },
        beforeCreate(){
           this.$store.dispatch('setDatas');
        }

    }
</script>

<style scoped>

</style>
