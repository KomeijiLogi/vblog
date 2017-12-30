<template>
    <div class="info">
       <header class="header">
           <div class="header-icon">
              <span class="iconfont2 "></span>
           </div>
       </header>
       <div class="info-content">

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
   padding-bottom: 16vw;
  .header{
     .header-icon{

     }
  }
  .info-content{

  }
}
</style>
