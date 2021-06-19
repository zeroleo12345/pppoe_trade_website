import request from '@/utils/request'

// params 为 url 后的参数;  data 为 form 内的参数

class Api {
  constructor (component) {
    this.component = component
  }

  /**
   * 请求用户信息
   * @param  {Object} params 参数对象，其结构如下:
   *                         {
   *                           code: 'xxxx',    // 微信公众号redirect_uri带回来的code
   *                         }
   */
  async getUser (params = {}) {
    let response = await request({
      url: '/user',
      method: 'GET',
      params, // parameter=xxx
    })
    // 错误处理
    if (response.data.code !== 'ok') {
      // 组件 VueSimpleAlert
      this.component.$alert(response.data.message, '错误')
      return Promise.reject(new Error('response not ok'))
    }
    // 先清空, 再保存全局jwt token, 用于后续请求
    this.component.$store.commit('SET_TOKEN', '')
    let token = response.data.data.authorization
    this.component.$store.commit('SET_TOKEN', token)
    return response.data
  }

  /**
   * 获取所有用农户信息
   */
  async getUsers (params = {}) {
    let response = await request({
      url: '/users',
      method: 'GET',
      params, // parameter=xxx
    })
    // 错误处理
    if (response.data.code !== 'ok') {
      // 组件 VueSimpleAlert
      this.component.$alert(response.data.message, '错误')
      return Promise.reject(new Error('response not ok'))
    }
    return response.data
  }

  /**
   * 获取用户账户信息
   */
  async getAccount (params = {}) {
    let response = await request({
      url: '/account',
      method: 'GET',
      params, // parameter=xxx
    })
    // 错误处理
    if (response.data.code !== 'ok') {
      // 组件 VueSimpleAlert
      this.component.$alert(response.data.message, '错误')
      return Promise.reject(new Error('response not ok'))
    }
    return response.data
  }

  /**
   * 创建订单
   * @param data
   * 备注: 设置属性 headers: {'Content-Type': 'application/x-www-form-urlencoded'}
   */
  async postCreateOrder (data = {}) {
    let response = await request({
      url: '/order',
      method: 'POST',
      data: data,
    })
    // 错误处理
    if (response.data.code !== 'ok') {
      // 组件 VueSimpleAlert
      this.component.$alert(response.data.message, '错误')
      return Promise.reject(new Error('response not ok'))
    }
    return response.data
  }
}

export default Api
