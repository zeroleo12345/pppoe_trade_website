import axios from 'axios'
import store from '@/store'

// axios 配置
const instance = axios.create({
  baseURL: process.env.API_URL,
  timeout: 10000,
  validateStatus: function (status) {
    // 以下返回码不进入到error流程, default: [200, 300)
    return status >= 200 && status < 500
  },
})

// 添加请求拦截器
instance.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  // config.data = JSON.stringify(config.data)
  // config.headers['authorization'] = 'bae03ccae84b44ab86eb3999709a30c0'
  if (store.getters.token) {
    config.headers['authorization'] = store.getters.token
  }
  return config
}, error => {
  // 对请求错误做些什么
  console.log(error)
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(response => {
  // 对响应数据做点什么
  // const data = response.data

  // 对错误代码做处理
  return response
}, error => {
  // 对响应错误做点什么
  console.log('err' + error)
  // 格式化字符串
  alert(`错误码: ${error.response.status}, 请联系管理员`)
  return Promise.reject(error)
})

export default instance
