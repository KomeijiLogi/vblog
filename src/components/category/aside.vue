<template>
   <aside class="aside" v-if="datas">
      <ul>
         <li v-for="(k,i) in datas.aside" :key="k.id" @click="changeTabIndex(i)">
            <router-link :to="{path:'/category/'+k.title}" :class="{active:i==tabIndex}">
                 {{k.title}}
            </router-link>
         </li>
      </ul>
   </aside>
</template>

<script>
    export default {
        props:['datas'],
        methods:{
          changeTabIndex(i){
              this.$store.commit('CHANGE_TABINDEX',i);
          }
        },
        computed:{
           tabIndex(){
             return this.$store.state.category.tabIndex;
           }
        }
    }
</script>

<style lang="less" scoped>
@import "../../assets/icons/iconfont";
@import "../../assets/fz";
.aside{
   flex: 2.2;
   height: 100%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  background-color: gold;
  &::-webkit-scrollbar {display:none}
  >ul{
    height: 100%;
    width: 100%;
    li{
      text-align: center;
      a{
        display: block;
        padding: 4vw 0;
        .fz(font-size,16);
        position: relative;

      }
      .active{
        position: relative;
        .fz(font-size,16);
        &::before {
          width: 3px;
          height: 28px;
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          margin-top: -14px;
          background-color: green;
        }
      }
    }
  }

}
</style>
