<template>
    <div>
        <el-row>
            <m-banner/>
        </el-row>
        <el-row>
            <m-login/>
        </el-row>
    </div>
</template>

<script>
import MBanner from './banner'
import MLogin from './login'
export default {
    components:{
        MBanner,
        MLogin
    }
}
</script>

