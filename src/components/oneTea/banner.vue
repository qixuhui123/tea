<template>
    <div class="index-banner">
        <i @click="click" class="el-icon-arrow-down"></i>
    </div>
</template>
<script>
export default {
     methods:{
        click(){
            document.documentElement.scrollTop = 700;
        }
    }
}
</script>

<style scoped>
    @import '../../../static/css/oneTea/banner.css'
</style>