import Vue from 'vue'
import Account from '@/components/Account'

describe('Account.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Account)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})
