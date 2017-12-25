<template lang="html">
   <div class="wrap">
      <div class="spinner">
         <div class="double-bounce1"></div>
         <div class="double-bounce2"></div>
      </div>
      <p>正在加载......</p>
   </div>
</template>

<script>
    export default {
        name: "loading"
    }
</script>

<style lang="less" scoped>
   .wrap{
      width: 100vw;
      height: 100vh;
      background-color: rgba(255,255,255,.8);
      border-radius: 2vw;
      position: fixed;
      left: 0;
      top: 0;
      z-index: 999999;
   }
   p
   {
     text-align: center;
     font-size: 24px;
   }
   .spinner{
      width: 50px;
      height: 50px;
      position: relative;
      margin: 65% auto;
      margin-bottom: 40px;
   }

   .double-bounce1,.double-bounce2{
       width: 100%;
       height: 100%;
       border-radius: 50%;
       background-color: #facd2d;
       opacity: .6;
       position: absolute;
       top: 0;
       left: 0;

     -webkit-animation: bounce 2.0s infinite ease-in-out;   /* ease-in-out淡入淡出 */
      animation: bounce 2.0s infinite ease-in-out;
   }
   .double-bounce2{
      -webkit-animation-delay: -1.0s;
      animation-delay: -1.0s;
   }
   @keyframes bounce {
      0%,100%{
         transform: scale(0,0);
         -webkit-transform: scale(0,0);
      }
      50%{
         transform: scale(1,0);
         -webkit-transform: scale(1,0);
      }
   }
   @-webkit-keyframes bounce {
     0%,100%{
       transform: scale(0,0);
       -webkit-transform: scale(0,0);
     }
     50%{
       transform: scale(1,0);
       -webkit-transform: scale(1,0);
     }
   }

</style>
