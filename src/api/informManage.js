import request from '@/utils/request'


//触达记录查询
export function queryInformRecord(data) {
  return request({
    url: '/tmApi/inform/record/query',
    method: 'post',
    data
  })
}

//查询触达任务
export function queryInformTask(data) {
  return request({
    url: '/tmApi/inform/template/query',
    method: 'post',
    data
  })
}


//新增触达任务
export function addInformTask(data) {
  return request({
    url: '/tmApi/inform/template/add',
    method: 'post',
    data
  })
}

//更新触达任务
export function updateInformTask(data) {
  return request({
    url: '/tmApi/inform/template/update',
    method: 'post',
    data
  })
}
