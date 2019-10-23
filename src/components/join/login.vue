<template>
    <div class="login">
        <p class="login-title">会员登录/注册</p>
        <ul class="login-ul">
            <li>
                <h5>会员登录</h5>
                <div class="user">
                    ID：
                <input type="text">
                请输入邮箱/手机号/账号
                </div>
                <div class="password">
                    密码：
                <input type="text">
                <span class="dong-tai">获取动态密码</span>
                </div>
                <p class="login-iocn"><router-link style="color:#fff;" to="/pro2">登录</router-link></p>
            </li>
            <li>
                <h5>还不是会员？</h5>
                <p class="members">立即加入我们，不但可以方便购物还可以积攒积分，更有大礼包可以领取！</p>
                <p class="join-eat">加入一品茶庄</p>
            </li>
        </ul>
        <p class="login-title">会员专区</p>
        <img class="join-imgea" src="../../assets/img/join/product.png" alt="">
    </div>
</template>

<style scoped>
    @import '../../../static/css/join/login.css'
</style>

