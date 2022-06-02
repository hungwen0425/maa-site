import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import {setCookie, getCookie} from "@/utils/cookie";

// 创建axios实例
const service = axios.create({
  baseURL: 'http://localhost',
  // baseURL: 'http://139.198.165.238:32607', //生产环境
  timeout: 15000 // 请求超时时间
})

// http request 拦截器
service.interceptors.request.use(
  config => {
    // token 放到 header
    if (getCookie('token')) {
      config.headers['token'] = getCookie('token')
    }
    return config
  },
  err => {
    return Promise.reject(err)
  })
// http response 拦截器
service.interceptors.response.use(
  response => {
    //狀態碼是208
    if (response.data.code === 208) {
      //彈出登陸輸入框
      eventLogin.$emit('loginDialogEvent')
      return
    } else {
      if (response.data.code !== 200) {
        Message({
          message: response.data.message,
          type: 'error',
          duration: 5 * 1000
        })
        return Promise.reject(response.data)
      } else {
        return response.data
      }
    }
  },
  error => {
    return Promise.reject(error.response)
  })
export default service
