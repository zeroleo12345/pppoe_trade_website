import Vue from 'vue'
import Router from 'vue-router'
import Account from '@/components/Account'
import GuideIOS from '@/components/GuideIOS'
import GuideAndroid from '@/components/GuideAndroid'

Vue.use(Router)

const constantRouterMap = [
  {
    path: '/',
    name: 'Account',
    component: Account
  },
  {
    path: '/ios',
    name: 'GuideIOS',
    component: GuideIOS
  },
  {
    path: '/android',
    name: 'GuideAndroid',
    component: GuideAndroid
  },
]

export default new Router({
  // mode: 'hash',
  mode: 'history',
  routes: constantRouterMap
})
