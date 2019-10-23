<template>
  <div class="pro5">
    <div class="pro5-box">
      <div class="jiesuan"><router-link to="/mall"></router-link></div>
      <img src="./../../assets/img/mall/danye26.png" alt srcset>
    </div>
  </div>
</template>

<style>
.pro5 {
  width: 100%;
  height: 800px;
  background: #f2f2f2;
  overflow: hidden;
}
.pro5-box {
  position: relative;
  position: relative;
  width: 1000px;
  margin: 80px auto 0;
  text-align: center;
}
.jiesuan {
  position: absolute;
  right: 150px;
  top: 270px;
  width: 200px;
  height: 30px;
  cursor: pointer;
  /* background: #f40; */
}
.jiesuan  a{
  /* position: absolute;
  right: 150px;
  top: 320px; */
  display: inline-block;
  width: 200px;
  height: 26px;
  cursor: pointer;
  /* background: #f40; */
}
</style>
