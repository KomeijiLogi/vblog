<template>
   <div class="login">
      <v-header class="header">
         <h2 slot="title">登录</h2>
      </v-header>
      <div class="login-content">
        <mt-field label="账号" placeholder="请输入账号" v-model="username"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" v-model="password" type="password"></mt-field>
      </div>
      <div class="login-button">
        <mt-button type="primary"  @click="login" size="normal">
          登录
        </mt-button>
        <mt-button type="danger" size="normal">
          取消
        </mt-button>
      </div>

   </div>
</template>

<script>
    import Header from '@/common/header.vue'
    import {Toast} from 'mint-ui'
    export default {
       components:{
          'v-header':Header
       },
       data(){
         return{
           username:'',
           password:''
         }
       },
       methods:{
          login(){
              if(this.username!=='' && this.password !==''){

                this.$store.commit('LOGIN_TOKEN',1);
                this.$store.commit('IN_LOG',{username:this.username,password:this.password});
                Toast({
                  message:'登录成功',
                  duration:2000,
                  position:'bottom'

                });
                setTimeout(()=>{
                     this.$router.replace({
                        path:'user'
                     })
                },1000); //登录成功进行调转

              }else {
                 Toast(`账号密码不能为空`)
              }

          }
       }
    }
</script>

<style lang="less" scoped>
   @import "../../assets/fz";
   @import "../../assets/icons/iconfont";
   .login{
       .header{

       }
       .login-content{
          padding: 2vw;
          .mint-field{

          }
       }
       .login-button{
          .bd();
          text-align: center;
          width: 100%;
          .mint-button{

             width: 40%;
             padding: 2vw;
          }

       }

   }

</style>
