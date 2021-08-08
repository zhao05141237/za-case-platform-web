import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  // timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    config.headers = {
      'Content-Type': 'application/json',
      'token': window.localStorage.getItem('token')
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    store.commit('user/HIDE_LOADING')
    if (res.returnCode === '999999') {
      // 未登录
      const url = window.location.href
      const nsso_target = `${window.location.origin}${window.location.pathname}#/ticket?redirect=${encodeURIComponent(url)}`
      window.location.href = `http://nsso.zhonganonline.com/login?service=za-tm-platform&target=${nsso_target}`
    }
    if (res.returnCode !== '000000') {
      store.commit('user/HIDE_LOADING')
      Message({
        message: res.returnMsg,
        type: 'error',
        duration: 2 * 1000
      })
      return Promise.reject('err')
    }
    return res
  },
  error => {
    store.commit('user/HIDE_LOADING')
    console.log('err' + error) // for debug
    Message({
      message: error.resultMsg || '系统繁忙',
      type: 'error',
      duration: 2 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
