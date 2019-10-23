<template>
    <div>
        <el-row>
            <my-banner/>
        </el-row>
        <el-row>
            <my-product :list="list1"/>
        </el-row>
        <el-row>
            <my-banne :img="img1"/>
        </el-row>
         <el-row>
            <my-product :list="list2"/>
        </el-row>
        <el-row>
            <my-banne :img="img2"/>
        </el-row>
         <el-row>
            <my-product :list="list3"/>
        </el-row>
        <el-row>
            <my-banne :img="img3"/>
        </el-row>
    
    </div>
</template>
<script>
import MyBanner from '@/components/product/banner.vue'
import MyProduct from '@/components/product/product.vue'
import MyBanne from '@/components/product/bannerTwo.vue'
export default {
    data(){
        return{
            list1:[{
                img1:require('../../assets/img/product/eat1.png'),
                text:'红茶属全发酵茶，是以适宜的茶树新牙叶为原料，经萎凋、揉捻（切）、发酵、干燥等一系列工艺过程精制而成的茶。萎凋是红茶初制的重要工艺，红茶在初制时称为“乌茶”。红茶因其干茶冲泡后的茶汤和叶底色呈红色而得名。',
                img2:require('../../assets/img/product/eat1-gongxiao.png')

            }],
            img1:[{ 
                img:require('../../assets/img/index-banner7.jpg'),
                },
            { 
                img:require('../../assets/img/index-banner8.jpg'),
                },
            { 
                img:require('../../assets/img/index-banner9.jpg'),
                }],
                 list2:[{
                img1:require('../../assets/img/product/eat2.png'),
                text:'红茶属全发酵茶，是以适宜的茶树新牙叶为原料，经萎凋、揉捻（切）、发酵、干燥等一系列工艺过程精制而成的茶。萎凋是红茶初制的重要工艺，红茶在初制时称为“乌茶”。红茶因其干茶冲泡后的茶汤和叶底色呈红色而得名。',
                img2:require('../../assets/img/product/eat2-gongxiao.png')

            }],
            img2:[{ 
                img:require('../../assets/img/index-banner11.jpg'),
                },
            { 
                img:require('../../assets/img/index-banner12.jpg'),
                },
            { 
                img:require('../../assets/img/index-banner10.jpg'),
                }],
                 list3:[{
                img1:require('../../assets/img/product/eat3.png'),
                text:'红茶属全发酵茶，是以适宜的茶树新牙叶为原料，经萎凋、揉捻（切）、发酵、干燥等一系列工艺过程精制而成的茶。萎凋是红茶初制的重要工艺，红茶在初制时称为“乌茶”。红茶因其干茶冲泡后的茶汤和叶底色呈红色而得名。',
                img2:require('../../assets/img/product/eat3-gongxiao.png')

            }],
            img3:[{ 
                img:require('../../assets/img/index-banner13.jpg'),
                },
            { 
                img:require('../../assets/img/index-banner14.jpg'),
                },
            { 
                img:require('../../assets/img/index-banner16.jpg'),
                }]
        }
    },
    components:{
        MyBanner,
        MyProduct,
        MyBanne
    }
}
</script>

