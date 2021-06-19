// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 第三方库
import moment from 'moment'
// Alert 报错组件
import VueSimpleAlert from 'vue-simple-alert'
// Toast 提示组件
// "vue-toasted": "^1.1.28",
// import Toasted from 'vue-toasted'

Vue.use(VueSimpleAlert)
// Vue.use(Toasted)

Vue.config.productionTip = false

// 绑定第三方库到 this
Object.defineProperty(Vue.prototype, '$moment', { value: moment })

// 修改每隔页面的title
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
