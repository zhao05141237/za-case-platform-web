import request from '@/utils/request'

//查询研发应用
export function queryApp(params) {
  return request({
    url: '/tmApi/common/app/query',
    method: 'get',
    params
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

//查询部门信息
export function deptsView(data) {
  return request({
    url: '/tmApi/userinfo/deptsView',
    method: 'post',
    data
  })
}
