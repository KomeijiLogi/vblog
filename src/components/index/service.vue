<template>
    <div class="service">
       <ul>
         <li><i class="iconfont icon-information"></i><span>高效</span></li>
         <li><i class="iconfont icon-information"></i><span>实时</span></li>
         <li><i class="iconfont icon-information"></i><span>优质</span></li>
       </ul>
    </div>
</template>

<script>
    export default {
        name: "service"
    }
</script>

<style lang="less" scoped>
  @import '../../assets/fz.less';
  @import '../../assets/icons/iconfont';
  .service {
    .bd();
    ul {
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      justify-content: space-around;

      li {
        display: -webkit-flex;
        display: -ms-flex;
        display: flex;
        align-items: center;
        padding: 3.3vw 0;
        span {
          .fz(font-size,28);
          padding-left: 1vw;
        }
        i {
          .fz(font-size,36);
        }
      }
    }
  }
</style>
