import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/index'        //主页
import Product from '@/pages/product/index'  //产品中心
import News from '@/pages/news/index'        //新闻资讯
import Partner from '@/pages/partner/index'  //合作伙伴
import Join from '@/pages/Join/index'        //加入我们 
import Contact from '@/pages/contact/index'  //联系我们

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'Home',
      component:Home
    },{
      path:'/product',
      name:'Product',
      component:Product
    },{
      path:'/news',
      name:'News',
      component:News
    },{
      path:'/partner',
      name:'partner',
      component:Partner
    },{
      path:'/join',
      name:'Join',
      component:Join
    },{
      path:'/contact',
      name:'Contact',
      component:Contact
    }
  ]
})
