<template>
    <div class="center">
        <el-row>
            <div class="center-img">
                <img src="../../assets/img/banner1.png" alt="">
            </div>
            <p class="center-p">中国是茶的故乡，也是茶文化的发源地。一品茶庄糅合佛、儒、道诸派思想，独成一体，一品茶庄采用珍稀原料与大师工艺的结合，严格遵照传统工艺悉心制作，既是传统工艺的代表作，更是中国茶的代表作。</p>
            <div class="center-logo">
                <img src="../../assets/img/center-logo.png" alt="">
            </div>
        </el-row>
        <el-row>
            <ul class="center-ul">
                <li :data-type='item.num' @mouseenter="mouseenter($event,index)" @mouseleave="mouseleave" v-for="(item,index) in list" :key="index" >
                    <div class="center-ul-box" :class="{background:isColor === index}">
                        <h3 :class="{color:isColor === index}">{{item.title}}</h3>                      
                        <div class="text" :class="{color:isColor === index}">
                        <span>的茶品</span>
                        <span>只为打造更好</span>
                        <span>大师专业制造</span>
                        </div>
                        <!-- <p>大师专业制造,只为打造更好的茶品</p> -->
                        <p class="center-ul-text" :class="{color:isColor === index}">{{item.page}}</p>
                    </div>
                <img width="90px" class="center-ul-img" :src="item.img" alt="">
                 <!-- <img :src="item.img" alt=""> -->
                <img :class="{display:isColor === index}" width="26px" class="center-ul-ye1" src="../../assets/img/ye1.png" alt="">
                <img :class="{display:isColor === index}" width="20px" class="center-ul-ye2" src="../../assets/img/ye2.png" alt="">
                <img :class="{display:isColor === index}" width="26px" class="center-ul-ye3" src="../../assets/img/ye3.png" alt="">
                </li>
      
            </ul>
            
        </el-row>
    </div>
</template>
<script>
export default {
    data(){
        return {
            list: [{
                title:'壹',
                img:require('../../assets/img/center-img1.png'),
                text:'大师专业制造,只为打造更好的茶品',
                page:'原产原料',
                num:1
            },{
                title:'贰',
                img:require('../../assets/img/center-img2.png'),
                text:'',
                page:'专业制茶',
                num:2
            },{
                title:'叁',
                img:require('../../assets/img/center-img3.png'),
                text:'',
                page:'安全保鲜',
                num:3
            },{
                title:'肆',
                img:require('../../assets/img/center-img4.png'),
                text:'',
                page:'统一标准',
                num:4
            }],
            isColor:false
        }
    },
    methods:{
       mouseenter(e,i){
           console.log(e.target ,i)
           this.isColor = i;
       },
       mouseleave(){
           this.isColor = false;
       }
    }
    
}
</script> 

<style scoped>
    @import '../../../static/css/index/center.css'
</style>