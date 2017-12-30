<template>
    <div class="info">
       <header class="header">
           <div class="header-icon">
              <span class="iconfont icon-account"></span>
           </div>
           <span>用户名</span>
       </header>
       <div class="info-content">
           <router-link :to="{name:''}">
               <span></span>
           </router-link>
       </div>
       <mt-button type="primary" size="large" @click="logout" >
          退出登录
       </mt-button>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'
    export default {

       methods:{
          logout(){
             if(this.$store.state.login.token){
                this.$store.commit('LOGIN_TOKEN',0);
                this.$store.commit('OUT_LOG');
                Toast(`退出登录`);
                setTimeout(()=>{
                   this.$router.replace({
                      path:'login'
                   })
                },1000); //跳转到登录页
             }
          }
       }
    }
</script>

<style lang="less" scoped>
  @import "../../assets/icons/iconfont";
  @import "../../assets/fz";
  @import "../../assets/icons2/iconfont";

.info{
  width: 100%;
  padding-bottom: 14vw;
  background-color: #F8FCFF;
  .header{
     width: 100%;
     height: 16vw;
     background: url(../../assets/carbg.png) center 0 #f37d0f;
    background-size: auto 100%;
    padding: 3.2vw 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
     .header-icon{
       border: .4vw solid #ffffff;
       background-color: @cl;
       margin-left: 4vw;
       -webkit-box-sizing: border-box;
       box-sizing: border-box;
       width: 14vw;
       height: 14vw;
       line-height: 16vw;
       text-align: center;
       border-radius: 50%;
        span{
          .fz(font-size,54);

          &::before{
            color: #ffffff;
          }
        }
     }
    >span {
      margin-left: 3.2vw;
      .fz(font-size, 30);
      color: #ffffff;
      letter-spacing: .2vw;
    }
  }
  .info-content{

  }

}
</style>
