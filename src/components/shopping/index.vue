<template>
    <div>
        <el-row>
            <m-banner/>
        </el-row>
        <el-row>
            <m-center/>
        </el-row>
    </div>
</template>

<script>
import MBanner from './banner'
import MCenter from './center'
export default {
    components:{
        MBanner,
        MCenter
    }
}
</script>

