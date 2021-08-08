import request from '@/utils/request'

//查询收藏用例
export function queryCollectCase(data) {
  return request({
    url: '/tmApi/caseCollect/query',
    method: 'post',
    data
  })
}

//新增收藏用例
export function addCollectCase(data) {
  return request({
    url: '/tmApi/caseCollect/add',
    method: 'post',
    data
  })
}

//更新收藏用例
export function updateCollectCase(data) {
  return request({
    url: '/tmApi/caseCollect/update',
    method: 'post',
    data
  })
}

//删除收藏用例
export function delCollectCase(params) {
  return request({
    url: '/tmApi/caseCollect/del',
    method: 'get',
    params
  })
}

