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
    return response.data
  }
}

export default Api
