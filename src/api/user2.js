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
  getUser (params = {}) {
    this.component.$alert(2222)
    let response = request({
      url: '/user',
      method: 'GET',
      params, // parameter=xxx
    })
    // 错误处理
    if (response.data.code !== 'ok') {
    }
    return response
  }
}

export default Api
