<template>
  <div class="cup-tea">
    <div class="cup-img">
      <img src="../../assets/img/cupTea/cup1.png" alt>
    </div>
   
  
  <el-carousel style="text-align:center;" height="500px" :interval="5000" arrow="always">
    <el-carousel-item v-for="item in list" :key="item">
      <img :src="item.img" alt="" srcset="">
    </el-carousel-item>
  </el-carousel>
  <div class="cup-img">
      <img src="../../assets/img/cupTea/cup2.png" alt>
    </div>
  <el-carousel style="text-align:center;" height="400px" :interval="5000" arrow="always">
    <el-carousel-item v-for="item in list2" :key="item">
      <img :src="item.img" alt="" srcset="">
    </el-carousel-item>
  </el-carousel>
  <div class="cup-img">
      <img src="../../assets/img/cupTea/cup3.png" alt>
    </div>
  </div>
</template>
  
  <script>
  export default {
    data(){
      return {
        list:[{
              img:require('../../assets/img/cupTea/cup1-chun.png'),
        },{
              img:require('../../assets/img/cupTea/cup1-xia.png'),
        },{
              img:require('../../assets/img/cupTea/cup1-qiu.png'),
        },{
              img:require('../../assets/img/cupTea/cup1-dong.png'),
        }],
         list2:[{
              img:require('../../assets/img/cupTea/cup2-zao.png'),
        },{
              img:require('../../assets/img/cupTea/cup2-wu.png'),
        },{
              img:require('../../assets/img/cupTea/cup2-wan.png'),
        }]
      }
    }
  }
  </script>
  

<style >
@import "../../../static/css/health/cupTea.css";
</style>
