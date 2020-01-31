import request from '@/utils/request'

// params 为 url 后的参数;  data 为 form 内的参数

/**
 * 请求用户信息
 * @param  {Object} params 参数对象，其结构如下:
 *                         {
 *                           code: 'xxxx',    // 微信公众号redirect_uri带回来的code
 *                         }
 */
function getUser (params = {}) {
  return request({
    url: '/user',
    method: 'GET',
    params
  })
}

function getResource (params = {}) {
  return request({
    url: '/resource',
    method: 'GET'
  })
}

function getTest (params = {}) {
  return request({
    url: '/user/test',
    method: 'GET',
    params: params
  })
}

/**
 * 创建订单
 * @param data
 * 备注: 设置属性 headers: {'Content-Type': 'application/x-www-form-urlencoded'}
 */
function postCreateOrder (data = {}) {
  return request({
    url: '/order',
    method: 'POST',
    data: data
  })
}

export default {
  getTest,
  getUser,
  getResource,
  postCreateOrder
}
