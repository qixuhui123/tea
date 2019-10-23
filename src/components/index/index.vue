<template>
    <div>
        <el-row>
            <banner/>
        </el-row>
        <el-row>
            <m-center />
        </el-row>
        <el-row>
            <banner-two/>
        </el-row>
        <el-row>
            <history/>
        </el-row>
    </div>
</template>
<script>
import banner from './banner.vue'
import MCenter from './MCenter.vue'
import bannerTwo from './bannerTwo.vue'
import history from './history.vue'
export default {
    components:{
        banner,
        MCenter,
        bannerTwo,
        history
    }
}
</script>

