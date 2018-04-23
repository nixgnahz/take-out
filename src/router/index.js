import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home.vue'
import Find from '../components/Find.vue'
import Order from '../components/Order.vue'
import Index from '../components/order/Index.vue'
import Detail from '../components/order/Detail.vue'
import Timeline from '../components/order/Timeline.vue'
import Info from '../components/Info.vue'
import Service from '../components/Service.vue'
import IssuesDetail from '../components/service/IssuesDetail.vue'
import Shop from '../components/Shop.vue'
import Dishes from '../components/shop/Dishes.vue'
import Value from '../components/shop/Value.vue'
import Seller from '../components/shop/Seller.vue'
import Search from '../components/Search.vue'
import Login from '../components/Login.vue'
import Message from '../components/login/Message.vue'
import Password from '../components/login/Password.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/search",
      name: "search",
      component: Search
    },
    {
      path: "/shop",
      name: "shop",
      component: Shop,
      children: [
        {path: '/:id(\\d+)', redirect: 'dishes'},
        {path: 'dishes/:id(\\d+)', name: 'dishes', component: Dishes},
        {path: 'value/:id(\\d+)', name: 'value', component: Value},
        {path: 'seller/:id(\\d+)', name: 'seller', component: Seller}
      ]
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      children: [
        {path: '/', redirect: 'message'},
        {path: 'message', name: 'message', component: Message},
        {path: 'password', name: 'password', component: Password}
      ]
    },
    {
      path: "/find",
      name: "find",
      component: Find
    },
    {
      path: "/order",
      name: "order",
      component: Order,
      children: [
        {path: '/',  name: 'index', component: Index},
        {path: 'detail/:id(\\d+)', name: 'detail', component: Detail},
        {path: 'timeLine/:id(\\d+)', name: 'timeLine', component: Timeline}
      ]
    },
    {
      path: "/info",
      name: "info",
      component: Info
    },
    {
      path: "/service",
      name: "service",
      component: Service
    },
    {
      path: "/issues/:id(\\w+)",
      name: "issues",
      component: IssuesDetail
    },
    {
      path: "/",
      redirect: '/home'
    },
    {
      path: "*",
      redirect: '/home'
    }
  ]
})
