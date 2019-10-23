<template>
    <div class="mall">
        <div class="mall-yuan">
            <img src="./../../assets/img/mall/mall.png" alt="" srcset="">
        </div>
        <div class="nall">
            <p class="nall-title">热门商品</p>
            <ul class="nall-ul">
                <li v-for="(item,index) in list" :key="index">
                    <router-link to="danye">
                        <img :src="item.img" alt="" srcset="">
                    </router-link>
                </li>
               
            </ul>
            <img width="840px" src="./../../assets/img/mall/nall5.png" alt="" srcset="">
        </div>
    </div>
</template>

    <script>
    export default {
        data(){
            return{
                list:[{
                    img:require('./../../assets/img/mall/nall1.png')
                },{
                    img:require('./../../assets/img/mall/nall2.png')
                },{
                    img:require('./../../assets/img/mall/nall3.png')
                },{
                    img:require('./../../assets/img/mall/nall4.png')
                }]
            }
        },
        
    }
    </script>
    

<style scoped>
    @import '../../../static/css/shopping/center.css'
</style>
