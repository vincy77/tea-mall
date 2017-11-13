import App from '../App'

import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const home = r => require.ensure([], () => r(require('../views/home/home')), 'home')
const category = r => require.ensure([], () => r(require('../views/category/category')), 'category')
const car = r => require.ensure([], () => r(require('../views/car/car')), 'car')
const uc = r => require.ensure([], () => r(require('../views/uc/uc')), 'uc')

Vue.use(Router)
const routes = [{
  path: '/',
  name: 'App',
  component: App, // 顶层路由，对应index.html
  children: [
    // 地址为空时跳转home页面
    {
      path: '',
      redirect: '/home'
    },
    // 首页
    {
      path: '/home',
      component: home
    },
    // 分类
    {
      path: '/category',
      component: category
    },
    // 购物车
    {
      path: '/car',
      component: car
    },
    // 我的
    {
      path: '/uc',
      component: uc
    }
  ]
}
]
export default new Router({
  mode: 'history',
  // ES6缩写语法，相当于routes:routes
  routes
})
