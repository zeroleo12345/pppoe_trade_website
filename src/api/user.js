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

/**
 * 忘记密码后通过邮件链接进入页面重置密码，注意与用户正常修改密码做区分
 * @param  {Object} data 参数对象，其结构如下:
 *                         {
 *                           new_password: 'xxxx',    // 用户设置的新密码
 *                           confirm_token: 'xxxx',   // 后端带在url链接中的参数
 *                         }
 */
function resetPassword (data = {}) {
  return request({
    url: '/user/recover/confirm',
    method: 'PUT',
    data: data
  })
}

export default {
  resetPassword,
  getTest,
  getUser,
  getResource,
  postCreateOrder
}
