<template>
    <v-search :search="searchDatas.aside"></v-search>
</template>

<script>
    import Search from '@/components/search/search.vue'
    export default {
         components:{
            'v-search':Search
         },
         data(){
           return{
              searchDatas:''
           }
         },
         beforeCreate(){
            this.$api({
               url:'/category',
               method:'post'
            }).then((res)=>{
               this.searchDatas=res.data;
            }).catch((err)=>{
               console.log(err);
            })
         }
    }
</script>

<style scoped>

</style>
