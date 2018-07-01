import request from '@/utils/request'

/**
 * 请求用户信息
 * @param  {Object} params 参数对象，其结构如下:
 *                         {
 *                           code: 'xxxx',    // 微信公众号redirect_uri带回来的code
 *                         }
 */
function getUserInfo (params = {}) {
  return request({
    url: '/user',
    method: 'GET',
    params
  })
}

function getTest (params = {}) {
  return request({
    url: '/user/test',
    method: 'GET',
    params
  })
}

/**
 * 忘记密码后通过邮件链接进入页面重置密码，注意与用户正常修改密码做区分
 * @param  {Object} params 参数对象，其结构如下:
 *                         {
 *                           new_password: 'xxxx',    // 用户设置的新密码
 *                           confirm_token: 'xxxx',   // 后端带在url链接中的参数
 *                         }
 */
function resetPassword (params = {}) {
  return request({
    url: '/user/recover/confirm',
    method: 'PUT',
    data: params
  })
}

export default {
  resetPassword,
  getUserInfo,
  getTest
}
