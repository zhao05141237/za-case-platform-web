import request from '@/utils/request'


//查询bvt记录
export function queryBVT(data) {
  return request({
    url: '/tmApi/bvt/info/query',
    method: 'post',
    data
  })
}

//更新bvt记录
export function updateBVT(data) {
  return request({
    url: '/tmApi/bvt/info/update',
    method: 'post',
    data
  })
}


//应用信息查询
export function appInfoQuery(data) {
  return request({
    url: '/tmApi/app/info/query',
    method: 'post',
    data
  })
}

//应用信息更新
export function appInfoUpdate(data) {
  return request({
    url: '/tmApi/app/info/update',
    method: 'post',
    data
  })
}
