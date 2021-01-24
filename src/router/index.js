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
    component: Account,
    meta: {
      title: '宽带充值',
    }
  },
  {
    path: '/ios',
    name: 'GuideIOS',
    component: GuideIOS,
    meta: {
      title: '上网教程 (苹果手机)',
    }
  },
  {
    path: '/android',
    name: 'GuideAndroid',
    component: GuideAndroid,
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
