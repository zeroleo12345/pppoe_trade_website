import request from '@/utils/request'

// params 为 url 后的参数;  data 为 form 内的参数

function getAccount (params = {}) {
  return request({
    url: '/account',
    method: 'GET',
    params, // parameter=xxx
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
    data: data,
  })
}

export default {
  getAccount,
  postCreateOrder,
}
