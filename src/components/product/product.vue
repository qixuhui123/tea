<template>
    <div>
        <el-row class="product-img" v-for="(item,index) in list" :key="index">
            <div><img :src="item.img1" alt=""></div>
            <p class="product-p">{{item.text}}</p>
            <div><img src="../../assets/img/product/center-logo.png" alt=""></div>
            <div><img :src="item.img2" alt=""></div>
        </el-row>
    </div>
</template>
<script>
export default {
   props:['list']
}
</script>

<style>
@import '../../../static/css/product/product.css'
</style>
