<template lang="html">
    <footer class="footer" @click.stop="gotoRouter">
      <mt-tabbar v-model="selected" fixed>
          <mt-tab-item id="首页">
             <i slot="icon" class="iconfont icon-all"></i>
             首页
          </mt-tab-item>
          <mt-tab-item id="分类页">
              <i slot="icon" class="iconfont icon-category"></i>
              分类页
          </mt-tab-item>
          <mt-tab-item id="编辑页">
              <i slot="icon" class="iconfont icon-cart"></i>
            编辑页
          </mt-tab-item>
          <mt-tab-item id="用户页">
              <i slot="icon" class="iconfont icon-set"></i>
              用户页
          </mt-tab-item>
      </mt-tabbar>
    </footer>
</template>

<script>

    export default {
        name: "footer",
        data(){
           return {
              selected:''
           }
        },
        methods:{
           gotoRouter(){
              this.$router.push({
                name:this.selected
              })
           }
        },
        mounted(){
           let Rname=this.$route.name;
           switch (Rname){
             case '首页':
                this.selected='首页';
                break;
             case '分类页':
                this.selected='分类页';
                break;
             case '编辑页':
                this.selected='编辑页';
                break;
             case '用户页':
                this.selected='用户页';
                break;
             default:
                break;
           }
        }
    }
</script>

<style lang="less" scoped>
   @import "../assets/icons/iconfont.less";
   @import "../assets/fz.less";
   .mint-tab-item-label:hover {
     color:#333;
   }
   .footer{
     .mint-tabbar{
       background-color: #fff;
       background-image: none;
       box-shadow: 0 0 2.2vw 0 hsla(0, 6%, 50%, .13);
       -webkit-box-shadow: 0 0 2.2vw 0 hsla(0, 6%, 50%, .13);
       .is-selected{
         color: @cl;
         background-color: #fff;
         i {
           &::before {
             color: @cl;
           }
         }
       }
       i {
         .fz(font-size, 42);
       }
     }
   }

</style>
