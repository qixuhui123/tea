<template>
  <div>
    <div class="background-img"></div>
    <div class="block">
     <div class="index-text">
       <p class="center-text">茶园周边森林、植被保存较好，5km内不得建有排放有害物质的工厂、矿山、作坊、土窑等。土壤、水源无污茶园 染。</p>
        <p class="center-text">茶园与大田作物、居民生活区距离1km以上，且有隔离带。</p>
     </div>
      <el-carousel height="320px"  arrow="always">
        
        <el-carousel-item v-for="(item,index) in list" :key="index" style="display:block;">
          <img class="bannerTwo-img" :src="item.img" alt="">
          
        </el-carousel-item>
      </el-carousel>
       <el-row class="center">
            <div class="center-img">
                <img src="../../assets/img/banner2.png.png" alt="">
            </div>
            <p class="center-p">中国文化，底蕴深厚，璀璨夺目；中国茶，经久不衰，生机盎然。一品茶庄创立于1889年，是中国商务部首批认定的“中华老字号”。秉承百年老字号所独有的文化内涵与核心竞争力，不断探索与实践，从一家茶栈成长为享誉全国的茶叶专营企业。
北京一品茶庄茶业股份有限公司以立足中华文化，锻造全球化的茶业金字招牌为愿景，承继百年基业，光大民族品牌，做茶产业专家，推动中国茶和茶文化走向世界；秉持厚德诚信、务实严谨、热情自信、开拓创新的核心价值观，定义好茶标准，传承好茶文化，创造好茶生活。以品茶庄，好茶为您，始终如一。</p>
            <div class="center-logo">
                <img src="../../assets/img/center-logo.png" alt="">
            </div>
        </el-row>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            list:[{ 
                img:require('../../assets/img/index-banner4.jpg'),
                },
            { 
                img:require('../../assets/img/index-banner5.jpg'),
                },
            { 
                img:require('../../assets/img/index-banner6.jpg'),
                }]
        }
    }
};
</script>

<style scoped>
@import "../../../static/css/index/bannerTwo.css"

</style>

