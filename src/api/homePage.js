import request from '@/utils/request'


//统计区域数据查询
export function queryStaticData(params) {
  return request({
    url: '/tmApi/report/measurement/getcount',
    method: 'get',
    params
  })
}


//折线图接口
export function querySerialdetail(params) {
  return request({
    url: '/tmApi/report/measurement/serialdetail',
    method: 'get',
    params
  })
}


