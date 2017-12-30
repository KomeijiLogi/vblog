<template>
    <div class="user">
      <v-info></v-info>
      <v-footer></v-footer>
    </div>
</template>

<script>
    import Footer from '@/common/footer.vue'
    import Info from '@/components/user/Info.vue'
    export default {
        name: "user",
        components:{
           'v-footer':Footer,
          'v-info':Info
        }
    }
</script>

<style scoped>

</style>
