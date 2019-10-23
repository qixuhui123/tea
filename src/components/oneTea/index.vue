<template>
    <div>
        <el-row>
            <m-banner/>
        </el-row>
        <el-row>
            <m-img/>
        </el-row>
    </div>
</template>
<script>
import MBanner from './banner.vue'
import MImg from './img.vue'
export default {
    components:{
        MBanner,
        MImg
    }
}
</script>
