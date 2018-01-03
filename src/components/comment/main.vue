<template>
   <div class="comment">
       <ul class="comment-list">
         <li v-for="k in commentList" class="comment-part">
            <label class="comment-line comment-user">
              <span>用户-</span><p>{{k.name}}</p>|账号-<p>{{k.account}}</p>
            </label>

            <p class="comment-main ">{{k.comment}}</p>
            <label class="comment-line">
              <p>{{k.time}}</p>|
              <p>{{k.ip}}</p>
               |回复
            </label>


         </li>
       </ul>
   </div>
</template>

<script>
    export default {
       computed:{
         commentList(){
             return this.$store.state.detail.CommentList.list;
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
          border: beige 1px solid;
          padding: 1vw;
          border-radius: 2vw;
          .comment-main{
            text-indent: 8vw;
            color: #000000 !important;

          }
          .comment-user{
             color: #39B2EE;
          }
          .comment-line{
             display: flex;
             .fz(font-size,26);
             justify-content: flex-end;
          }
        }
     }
  }
</style>
