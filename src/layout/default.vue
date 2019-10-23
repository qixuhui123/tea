<template>
<div>
    <div class="header">
        <m-nav/>
    </div>
    <div class="main">
        <router-view/>
    </div>
    <div class="footer">
        <m-footer/>
    </div>
</div>
</template>
<script>
import MNav from '@/components/header/nav.vue'
import MFooter from '@/components/footer/footer.vue'
export default {
    components:{
        MNav,
        MFooter
    }
};
</script>

<style>
@import '../../static/css/index/index.css'
</style>
