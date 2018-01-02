<template>
   <div class="comment">
       <ul class="comment-list">
         <li v-for="k in commentList" class="comment-part">
            <span>用户-</span><p>{{k.name}}</p>
            <p>{{k.comment}}</p>
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
    
     .fz(font-size,30);
     .comment-list{
        padding: 1vw;
        .comment-part{

        }
     }
  }
</style>
