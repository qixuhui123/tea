<template>
    <div class="pro1">
        <h1>全部产品</h1>
       <div class="pro1-box">
            
           <div>
               <ul>
                   <li >
                       <img src="./../../assets/img/mall/danye20.png" alt="">
                   </li>
                   <li class="li1">
                       <span>单价</span>
                       <span>数量</span>
                       <span>小计(元)</span>
                       <span>操作</span>
                   </li>
               </ul>
              
               <ul>
                    <li>
                       <img src="./../../assets/img/mall/danye21.png" alt="">
                   </li>
                   <li class="li2">
                       <span style="color:#777;">500</span>
                       <span>
                           <i @click="clickJian">-</i>
                           <i>{{num}}</i>
                           <i @click="clickJia">+</i>
                       </span>
                       <span>{{price}}</span>
                       <span>删除</span>
                   </li>
               </ul>
                <ul>
                    <li>
                       <img src="./../../assets/img/mall/danye22.png" alt="">
                   </li>
                   <li class="li3">
                       <span class="span">已选中<span style="color:#89674c;">{{num}}</span>件商铺</span>
                       <span class="span">总价：<span  style="color:#89674c;">{{price}}</span></span>
                       <span class="span span3" style="background:#89764c; display:inline-block; color:#fff;width:80px;margin-left:40px; cursor:pointer;">
                           <router-link style="color:#fff;" to="/pro2">去结算</router-link>
                           </span>
                      
                   </li>
               </ul>
           </div>
       </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            num:1,
            price:500.00,
            qq: 0
        }
    },
    methods:{
        clickJia(){
             
            this.num = ++this.num
            this.price = this.price + 500
        },
        clickJian(){
            this.num = --this.num
            this.price = this.price - 500
        }
    }
}
</script>


<style scoped>
    .pro1{
        width: 100%;
        height: 800px;
        background: #f2f2f2;
        overflow: hidden;
    }
    .pro1-box{
        width: 1000px;
        background: #fff;
        margin: 0px auto;
        padding: 30px;
    }
    h1{
        width: 1000px;
        margin: 40px auto 0;
        font-family: '黑体';
        color: #777;
        background: #f2f2f2;
        font-size: 40px;
        padding: 10px;
    }
    .pro1-box ul {
        display: flex;
        padding-left: 30px;
        border-bottom: 1px solid #89674c;
        padding: 20px;
    }
    .pro1-box ul:nth-last-child(1){
        border: 0;
    }
    .pro1-box ul li{
         flex:1;
    }
     .pro1-box ul .li1 span{
         text-align: center;
         display: inline-block;
         font-size: 22px;
         font-weight: 600;
         width: 100px;
         color: #89674c;
     }
     .pro1-box ul .li2 span{
         text-align: center;
         display: inline-block;
         font-size: 16px;
         font-weight: 600;
         width: 100px;
         color: #89674c;
     }
.pro1-box ul .li2{
    padding-top: 44px;
}
    
    .pro1-box ul .li2 i{
        font-style: normal;
        background: #777;
        display: inline-block;
        width: 20px;
        cursor: pointer;
        
        color: #fff;
    }
      .pro1-box ul .li3 .span{
         text-align: center;
         display: inline-block;
         font-size: 20px;
         font-weight: 600;
         width: 140px;
         color: #777;
     }
     .span3:hover{
         background:#a88946 ;

     }
</style>
