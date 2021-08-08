import request from '@/utils/request'

export function queryLabel(data) {
    return request({
        url: '/tmApi/label/query',
        method: 'post',
        data
    })
}

export function delLabel(params) {
    return request({
        url: '/tmApi/label/del',
        method: 'get',
        params
    })
}

export function createLabel(data) {
    return request({
        url: '/tmApi/label/create',
        method: 'post',
        data
    })
}

export function modLabel(data) {
    return request({
        url: '/tmApi/label/mod',
        method: 'post',
        data
    })
}

export function deptsView(data) {
  return request({
    url: '/tmApi/userinfo/deptsView',
    method: 'post',
    data
  })
}
// 查询公司名称
export function queryCompany(data) {
  return request({
    url: '/tmApi/userinfo/mCompanyView',
    method: 'get',
    data
  })
}
//查询用户
export function querUserView(data) {
  return request({
    url: '/tmApi/userinfo/usersView',
    method: 'post',
    data
  })
}
