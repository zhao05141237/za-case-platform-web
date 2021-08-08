import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/assure/ops/login',
    method: 'post',
    data
  })
}

export function getUserName(data) {
  return request({
    url: '/hsb/login/getUserName',
    method: 'post',
    data
  })
}

export function logout(data) {
  return request({
    url: '/assure/ops/logout',
    method: 'post',
    data
  })
}

export function getCookie(param) {
  return request.get(`/tmApi/oss/getCookieByTicket`, { params: param })
}

export function getInfo() {
  return request.get(`/tmApi/oss/getSsoUserByCookie`)
}
