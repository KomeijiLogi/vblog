<template>
    <div class="comment">
      <v-comment class="comment-list"></v-comment>
      <v-footer class="comment-footer"></v-footer>
    </div>
</template>

<script>
    import Header from '@/common/header.vue'
    import Footer from '@/components/comment/footer.vue'
    import Main from '@/components/comment/main.vue'
    export default {
        components:{
          'v-footer':Footer,
          'v-comment':Main
        },
        beforeCreate(){
           this.$store.dispatch('getComment');
        }
    }
</script>

<style lang="less" scoped>
  @import "../assets/fz";
  @import "../assets/icons/iconfont";
.comment{

   .comment-list{


   }
   .comment-footer{
     background-color: white !important;

   }
}
</style>
