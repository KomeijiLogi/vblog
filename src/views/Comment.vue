<template>
    <div class="comment">

    </div>
</template>

<script>
    import Header from '@/common/header.vue'
    export default {

        beforeCreate(){
           this.$store.dispatch('getComment');
        }
    }
</script>

<style scoped>

</style>
