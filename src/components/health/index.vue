<template>
    <div>
        <el-row>
            <m-banner/>
        </el-row>
        <el-row>
            <m-cup/>
        </el-row>
    </div>
</template>
<script>
import MBanner from './banner'
import MCup from './cupTea'
export default {
    components:{
        MBanner,
        MCup
    }
}
</script>

