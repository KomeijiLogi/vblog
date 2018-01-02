<template>
   <div class="comment">
       <ul class="comment-list">
         <li v-for="k in commentList">

         </li>
       </ul>
   </div>
</template>

<script>
    export default {
       computed:{
          commentList(){
             return this.$store.state.detail.CommentList;
          }
       }
    }
</script>

<style lang="less" scoped>
  @import "../../assets/fz";
  @import "../../assets/icons/iconfont";
  .comment{
     width: 100%;
     .fz(font-size,30);
  }
</style>
