import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default.vue'
import MIndex from '@/components/index/index.vue'
import MProduct from '@/components/product/index.vue'
import MOneTea from '@/components/oneTea/index.vue'
import MHealth from '@/components/health/index.vue'
import MJoin from '@/components/join/index.vue'
import MShopp from '@/components/shopping/index.vue'
import MDanye from '@/components/shopping/danye.vue'
import MPro1 from '@/components/shopping/pro1.vue'
import MPro2 from '@/components/shopping/pro2.vue'
import MPro3 from '@/components/shopping/pro3.vue'
import MPro4 from '@/components/shopping/pro4.vue'
import MPro5 from '@/components/shopping/pro5.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: defaultPage,
      redirect: '/index',
      children: [{
        path: '/index',
        name: 'MIndex ',
        component: MIndex 
      }, {
        path: '/product',
        name: 'product',
        component: MProduct
      }, {
        path: '/oneTea',
        name: 'oneTea',
        component: MOneTea
      }, {
        path: '/health',
        name: 'health',
        component: MHealth
      }, {
        path: '/join',
        name: 'join',
        component: MJoin
      }, {
        path: '/mall',
        name: 'mall',
        component: MShopp
      }, {
        path: '/danye',
        name: 'danye',
        component: MDanye
      }, {
        path: '/pro1',
        name: 'pro1',
        component: MPro1
      }, {
        path: '/pro2',
        name: 'pro2',
        component: MPro2
      }, {
        path: '/pro3',
        name: 'pro3',
        component: MPro3
      }, {
        path: '/pro4',
        name: 'pro4',
        component: MPro4
      }, {
        path: '/pro5',
        name: 'pro5',
        component: MPro5
      }]
    }
  ]
})