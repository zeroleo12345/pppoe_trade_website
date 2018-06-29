// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 第三方库
import moment from 'moment'

Vue.config.productionTip = false

// 绑定第三方库到 this
Object.defineProperty(Vue.prototype, '$moment', { value: moment })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
