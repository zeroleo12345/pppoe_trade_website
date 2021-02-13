import Vue from 'vue'
import Router from 'vue-router'
import Account from '@/components/Account'
import GuideIOS from '@/components/GuideIOS'

Vue.use(Router)

const constantRouterMap = [
  {
    path: '/',
    name: 'account',
    component: Account,
    meta: {
      title: '账户充值',
    }
  },
  {
    path: '/ios',
    name: 'ios',
    component: GuideIOS,
    meta: {
      title: '上网教程 (苹果手机)',
    }
  },
  {
    path: '/android',
    name: 'android',
    component: GuideIOS,
    meta: {
      title: '上网教程 (安卓手机)',
    }
  },
]

export default new Router({
  // mode: 'hash',
  mode: 'history',
  routes: constantRouterMap
})
