<template>
    <div class="search">
      <mt-search v-model="searchValue" cancel-text="取消" placeholder="搜索" >
         <mt-cell v-for="k in search" :title="k.title">
         </mt-cell>
      </mt-search>
    </div>
</template>

<script>
    export default {
          data(){
            return{
               searchValue:''
            }
          },
          props:['search'],
          computed:{

          }
    }
</script>

<style scoped>

</style>
