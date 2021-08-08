import request from '@/utils/request'

// 获取页面列表
export function queryConfigList(data) {
  return request({
    url: '/tmApi/config/queryconfig',
    method: 'post',
    data
  })
}

// 获取应用名称下拉列表
export function queryProjectsList(params) {
  return request({
    url: '/tmApi/config/queryprojects',
    method: 'get',
    params
  })
}

// 获取可继承配置下拉列表
export function getconfignameList(data) {
  return request({
    url: '/tmApi/config/getconfigname',
    method: 'post',
    data
  })
}

// 新增配置文件
export function addConfig(data) {
  return request({
    url: '/tmApi/config/addconfig',
    method: 'post',
    data
  })
}

// 获取配置文件详情
export function getconfiginfokv(params) {
  return request({
    url: '/tmApi/config/getconfiginfokv',
    method: 'get',
    params
  })
}

// 删除配置文件
export function delconfig(params) {
  return request({
    url: '/tmApi/config/delconfig',
    method: 'get',
    params
  })
}

// 更新配置文件
export function updateConfig(data) {
  return request({
    url: '/tmApi/config/update',
    method: 'post',
    data
  })
}

