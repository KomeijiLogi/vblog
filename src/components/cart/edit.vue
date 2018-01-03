<template lang="html">
  <div class="edit">



  </div>
</template>

<script>

    export default {
       data(){
         return{
            title:''
         }
       }
    }
</script>

<style lang="less" scoped>
  @import "../../assets/fz";
  @import "../../assets/icons/iconfont";
  .edit{
     display: flex;
     flex-direction: column;
     padding: 1vw;
     .edit-title{
        .fz(font-size,34);
        padding: 1vw;
        border: #FFAA00 1px solid;
        border-radius: 2vw;
        margin-top: 2vw;

     }



  }

</style>
