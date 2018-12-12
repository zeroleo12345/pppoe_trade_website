import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import House from '@/components/House'

Vue.use(Router)

const constantRouterMap = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/house',
    name: 'House',
    component: House
  }
]

export default new Router({
  // mode: 'hash',
  mode: 'history',
  routes: constantRouterMap
})
