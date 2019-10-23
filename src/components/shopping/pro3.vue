<template>
    <div class="pro3">
        <div class="pro3-box">
          <h1>一品茶庄用户登录</h1>
        </div>
        <input type="text" placeholder="中国(+86)">
        <input type="password" placeholder="请输入您的手机号码" name="" id="">
        <div class="text">
            <input class="input" type="text" placeholder="请输入图形验证码">
            <span class="text1">Z8EK</span>
        </div>
        <div class="text">
            <input class="input" type="text" placeholder="请输入手机验证码">
            <span class="text2">发送</span>
        </div>
        <p><router-link to="/pro4">下一步</router-link></p>
    </div>
</template>


<style scoped>
.pro3{
        width: 100%;
        height: 800px;
        background: #f2f2f2;
        overflow: hidden;
    }
.pro3-box{
        width: 1000px;
        margin: 80px auto 0;
        text-align: center;
    }
    h1{
    font-size: 44px;
    text-align: center;
    font-family: '黑体';
    color: #89764c;
    margin-bottom: 32px;
}
input{
    border:1px solid #89764c;
    display: block;
    height: 32px;
    width: 440px;
    margin: auto;
    margin-bottom: 14px;
    background: #f2f2f2;
}
.input{
    display: inline-block;
    width: 300px;
    margin: 0;
     margin-bottom: 14px;
}
.text{
    width: 1000px;
    margin: auto;
    padding-left: 539px;
}
.text1{
    display: inline-block;
    width: 132px;
    background: #777;
    color: #fff;
    line-height: 32px;
    font-size: 18px;
    text-align: center;
    letter-spacing: 2px;
    font-family: '黑体';
}
.text2{
    font-family: '黑体';
    display: inline-block;
    width: 132px;
    background: #89764c;
    color: #fff;
    line-height: 32px;
    font-size: 18px;
    text-align: center;
    letter-spacing: 2px;
}
p{
    width: 1000px;
    margin: 20px auto 0;
    text-align: center;
}
p a{
     font-size: 20px;
    background-color: #89764c;
    color: #fff;
    display: inline-block;
    width: 120px;
    line-height: 30px;
}
</style>
