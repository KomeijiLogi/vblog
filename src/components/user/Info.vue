<template>
    <div class="info">
       <header class="header">
           <div class="header-icon">
              <span class="iconfont icon-account"></span>
           </div>
           <span>用户名</span>
       </header>
       <div class="info-content">
           <router-link class="my-content" :to="{name:''}">
               <span class="my-content-left">我的博客</span>
               <div class="my-content-right">
                   <span>查看更多</span>
                   <i class="iconfont icon-more"></i>
               </div>
           </router-link>
           <section class="my-pay">
               <router-link :to="{name:''}">
                 <div>
                   <span class="iconfont icon-process"></span>
                 </div>
                 <p>
                   <span>进程</span><i class="iconfont icon-more"></i>
                 </p>

               </router-link>

           </section>
           <section class="my-vip">
             <router-link :to="{name:''}">
               <div>
                 <span class="iconfont icon-email"></span>
               </div>
               <p>
                 <span>信息</span><i class="iconfont icon-more"></i>
               </p>

             </router-link>
             <router-link :to="{name:''}">
                <div>
                   <span class="iconfont icon-form"></span>
                </div>
                <p>
                  <span>表单</span><i class="iconfont icon-more"></i>
                </p>
             </router-link>
             <router-link :to="{name:''}">
                 <div>
                   <span class="iconfont icon-electronics"></span>
                 </div>
                <p>
                  <span>发布</span><i class="iconfont icon-more"></i>
                </p>
             </router-link>
           </section>
           <section class="my-service">
               <router-link :to="{name:''}">
                   <div>
                     <span class="iconfont icon-help"></span>
                   </div>
                   <p>
                     <span>帮助</span><i class="iconfont icon-more"></i>
                   </p>
               </router-link>
               <router-link :to="{name:''}">
                   <div>
                      <span class="iconfont icon-information"></span>
                   </div>
                   <p>
                     <span>版本信息</span><i class="iconfont icon-more"></i>
                   </p>
               </router-link>
           </section>
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
     width: 100%;
     .my-content{
       width: 100%;
       display: block;
       -webkit-box-sizing: border-box;
       box-sizing: border-box;
       color: #333;
       display: -webkit-box;
       display: -ms-flex;
       display: flex;
       -webkit-box-pack: justify;
       -ms-flex-pack: justify;
       justify-content: space-between;
       padding: 0 5vw;
       height: 15vw;
       line-height: 15vw;
       background-color: #fff;
       .bd();
       &:active {
         background-color: rgb(224, 227, 230)
       }
       .my-content-right {
         span {
           display: inline-block;
           .fz(font-size, 28);
           color: rgba(0, 0, 0, .4);
           position: relative;
         }
         i {
           position: relative;
           top: .8vw;
         }
       }
     }
  }
  .my-pay,.my-vip,.my-service{
     width:100%;
     .mt();
     .bd();
     .bt();
    >a{
      background-color: #fff;
      display: block;
      width: 100%;
      display: -ms-flex;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      height: 15vw;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      padding: 0 6vw;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      &:active {
        background-color: rgb(224, 227, 230);
      }
      >div{
        -ms-flex: 2;
        -webkit-box-flex: 2;
        flex: 2;
        padding-top: 1.3vw;
      }
      .my-vip-top-div{
         padding-top: 0;
      }
      >p {
        -ms-flex: 10;
        -webkit-box-flex: 10;
        flex: 10;
        position: relative;

        &:active {
          background-color: rgb(224, 227, 230);
        }

        i {
          position: absolute;
          right: 0;
          top: .4vw;
        }
      }
    }

  }

  .mint-button{
     margin-top: 5vw;
  }
}
.icon-more{
  .fz(font-size, 36);
  &::before {
    color: #aba8a8;
  }
}
.iconfont{
  .fz(font-size,50);
}
</style>
