<template>
    <div class="pro4">
        <div class="pro4-box">
            <div class="adress" @click="clickA"></div>
            <img src="./../../assets/img/mall/danye24.png" alt="" srcset="">
            <div class="tijiao"><router-link to="pro5"></router-link></div>
            <div :class="{hide:true,block:aaa}">
                <div class="hide-box" @click="clickB"></div>
                <img src="./../../assets/img/mall/danye25.png" alt="" srcset="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            aaa:null
        }
    },
    methods:{
        clickA(){
            this.aaa = !this.aaa;
        },
        clickB(){
             this.aaa = !this.aaa;
        }
    }
}
</script>

<style scoped>
.pro4{

        width: 100%;
        height: 1000px;
        background: #f2f2f2;
        overflow: hidden;
    }
.pro4-box{
            position: relative;
        width: 1000px;
        margin: 80px auto 0;
        text-align: center;
    }
    .adress{
        position: absolute;
        right: 14px;
        top: 100px;
        width: 200px;
        height: 24px;
        cursor: pointer;
     
    }
     .tijiao{
         position: absolute;
         right: 0;
         bottom: 20px;
        width: 200px;
        height: 24px;
        cursor: pointer;
       
    }
    .tijiao a{
         display: inline-block;
        width: 200px;
        height: 24px;
        cursor: pointer;
       
    }
    .hide{
       position: absolute;
       top:0;
       margin-left: 20px; 
       display: none;
    }
    .block{
        display:block;
    }
    .hide-box{
        position: absolute;
        right: 30px;
        top: 15px;
        cursor: pointer;
        width: 40px;
        height: 40px;
    }
</style>
