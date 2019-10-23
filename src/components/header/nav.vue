<template>
  <div>
    <el-row type="flex" class="index-header">
      <el-col :span="4"   class="index-imgea">
          <img  src="@/assets/logo.png" alt="">
      </el-col>
     <el-col :span="12" >
        <ul class="nav" >
          <li @click="nclick($event,index)" :class="{background: nav === index}" v-for="(item,index) in list" :key="index" ><router-link :to="item.url">{{item.title}}</router-link></li>
      </ul>
     </el-col>
      <el-col :span="6" class="icon">
        <span class="xian"></span>
        <i class="el-icon-search" @click="click"></i>
        <input  :class="{'input': true,'active':isNone}" type="text">
      </el-col>
  </el-row>
  <el-row></el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: 0,
      activeIndex: "1",
      activeIndex2: "1",
      isNone: false,
      input: true,
      list:[{
        title: '首页',
        url: 'index'
      },{
        title: '首选产品',
        url: 'product'
      },{
        title: '一品茶具',
        url: 'oneTea'
      },{
        title: '健康茶具',
        url: 'health'
      },{
        title: '在线商店',
        url: 'mall'
      },{
        title: '加入我们',
        url: 'join'
      },]
    };
  },
  methods:{
    click(){
      this.isNone = !this.isNone
    },
    nclick(e,i){
      this.nav = i
    }
  }

};
</script>
<style  scoped>
@import "../../../static/css/index/nav.css";
</style>
