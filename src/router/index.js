import Vue from 'vue'
import Router from 'vue-router'
import Account from '@/components/Account'
import Platform from '@/components/Platform'
import GuideIOS from '@/components/GuideIOS'
import Users from '@/components/Users'

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
    path: '/platform',
    name: 'platform',
    component: Platform,
    meta: {
      title: '房东信息',
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
  {
    path: '/users',
    name: 'users',
    component: Users,
    meta: {
      title: '用户列表',
    }
  },
]

export default new Router({
  // mode: 'hash',
  mode: 'history',
  routes: constantRouterMap
})
