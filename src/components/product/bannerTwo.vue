<template>
  <div>
    <div class="background-img" >
        <img class="background-img2"  src="../../assets/img/product/eat1-background.png" alt="">
    </div>
    <div class="block">
      
      <el-carousel height="320px"  arrow="always">
        <el-carousel-item v-for="(item,index) in img" :key="index" style="display:block;">
          <img width="100%" class="bannerTwo-img" :src="item.img" alt="">
          <h3 style="font-size:50px;" >{{item.img}}</h3>
          <p >100余年古树春芽，约60%含芽率</p>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
    props:['img']
};
</script>

<style scoped>
@import "../../../static/css/product/bannerTwo.css"

</style>

