<template>
    <div class="pro2">
        <div class="pro2-box">
            <h1>一品茶庄用户登录</h1>
            <input type="text" placeholder="请输入手机号码">
            <input type="password" placeholder="请输入您的密码" name="" id="">
            <p class="login"><router-link class="login-a" style="color:#fff; font-family: '黑体';" to="/">立即登录</router-link></p>
            <div class="pro2-text">
                <router-link class="text" to="/">忘记密码?</router-link>
                <router-link class="text" to="/pro3">立即注册</router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
.pro2{
        width: 100%;
        height: 800px;
        background: #f2f2f2;
        overflow: hidden;
    }
.pro2-box{
    width: 1000px;
    margin: 80px auto;
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
.login{
    width: 90px;
    line-height: 40px;
    text-align: center;
    margin:  10px auto;
    background: #89764c;
    cursor: pointer;
    font-size: 16px;

}
.login:hover{
    background:#a88946 ;
}
.pro2-text{
    width:1000px;
    margin: 20px auto;
    text-align: center;
    /* background: #f40; */
}
.pro2-text a{
    font-size: 16px;
    color: #89764c;
    display: inline-block;
    width: 90px;
}

</style>
