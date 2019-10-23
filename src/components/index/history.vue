<template>
    <el-row class="history">
        <el-col class="footer-nav" :span="18">
            <dl class="footer-nav-dl" v-for="(item,index) in list" :key="index">
                <dt class="footer-nav-dt" >{{item.title}}</dt>
                <dd class="footer-nav-dd" v-for="(j,i) in item.text" :key="i">{{j}}</dd>
            </dl>
          
        </el-col>
        <el-col class="photel" :span="6">
            <p class="txt">24小时全国服务热线</p>
            <p class="txt txt2">4001-666-888</p>
            <img src="../../assets/img/kefu.png" alt="">
        </el-col>
    </el-row>
</template>
<script>
export default {
    data(){
        return{
            list:[{
                title: '推荐品种',
                text:['茉莉花茶','大红袍','普洱熟茶','一品红茶']
            },{
                title: '在线购买',
                text:['茶叶','茶具','购物指南','官方授权网店']
            },{
                title: '服务',
                text:['服务网点查询','茶叶价格查询','建议反馈','']
            },{
                title: '关于我们',
                text:['关于茶庄','加入我们','采购相关','采购回顾']
            }]
        }
    }
}
</script>

<style scoped>
    @import '../../../static/css/index/history.css'
</style>
