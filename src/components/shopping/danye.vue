<template>
    <div class="danye">
        <ul class="danye-ul">
            <li>
                <img src="./../../assets/img/mall/danye1.png" alt="" srcset="">
            </li>
            <li>
                <div>
                    <img src="./../../assets/img/mall/danye2.png" alt="">
                    <div class="danye-shop">
                        <router-link to="/pro1">
                            <img src="./../../assets/img/mall/danye3.png" alt="">
                        </router-link >
                        <router-link to="/pro1">
                            <img src="./../../assets/img/mall/danye4.png" alt="">
                        </router-link>
                    </div>
                    <img src="./../../assets/img/mall/danye5.png" alt="">
                </div>
            </li>
        </ul>
        <div style="width:1100px; margin:10px auto 0px;">
            <img width="1100px" src="./../../assets/img/mall/danye6.png" alt="" srcset="">
        </div>
        <div style="width:1100px; margin:0 auto;">
            <img width="1100px" src="./../../assets/img/mall/danye7.png" alt="">
        </div>
        <div style="width:1100px; margin:0 auto;">
            <img width="1100px" src="./../../assets/img/mall/danye8.png" alt="">
            <img width="1100px" src="./../../assets/img/mall/danye10.png" alt="">
            <img width="1100px" src="./../../assets/img/mall/danye11.png" alt="">
            <img width="1100px" src="./../../assets/img/mall/danye12.png" alt="">
            <img width="1100px" src="./../../assets/img/mall/danye13.png" alt="">
            <img width="1100px" src="./../../assets/img/mall/danye14.png" alt="">
            <img width="1100px" src="./../../assets/img/mall/danye15.png" alt="">
            <img width="1100px" src="./../../assets/img/mall/danye16.png" alt=""> 
            <img width="1100px" src="./../../assets/img/mall/danye17.png" alt="">
            <img width="1100px" src="./../../assets/img/mall/danye18.png" alt="">  
            <img width="1100px" src="./../../assets/img/mall/danye19.png" alt="">  
        </div>
    </div>
</template>
<script>
export default {
    
   methods: {
  // 加载的时候从上开始显示
  scrollTop () {
    document.documentElement.scrollTop = 0;
  },

},
created () {
  this.scrollTop()  // 执行清零scrollTop操作


}

}
</script>

<style>
@import '../../../static/css/shopping/danye.css'
</style>

