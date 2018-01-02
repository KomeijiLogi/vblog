<template>
    <div class="comment">
      <v-footer></v-footer>
    </div>
</template>

<script>
    import Header from '@/common/header.vue'
    import Footer from '@/components/comment/footer.vue'
    export default {
        components:{
          'v-footer':Footer
        },
        beforeCreate(){
           this.$store.dispatch('getComment');
        }
    }
</script>

<style scoped>

</style>
