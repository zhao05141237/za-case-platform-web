import request from '@/utils/request'

export function queryMethodSetDetial(params) {
  return request({
    url: '/tmApi/case/case/set/view',
    method: 'get',
    params
  })
}

// 查询case
export function queryMethods(data) {
  return request({
    url: '/tmApi/case/method/query',
    method: 'post',
    data
  })
}

// 删除用例集
export function delMethodSet(params) {
  return request({
    url: '/tmApi/case/case/set/delete',
    method: 'get',
    params
  })
}

// 新增测试集
export function createMethodSet(data) {
  return request({
    url: '/tmApi/case/case/set/create',
    method: 'post',
    data
  })
}

//更新测试集
export function updateMethodSet(data) {
  return request({
    url: '/tmApi/case/case/set/update',
    method: 'post',
    data
  })
}

// 获取测试集列表
export function queryMethodSetList(data) {
  return request({
    url: '/tmApi/case/case/set/query',
    method: 'post',
    data
  })
}

// 获取备注信息
export function getRemarkDetail(data) {
  return request({
    url: '/tmApi/case/method/get/remark',
    method: 'post',
    data
  })
}


// 备注更新
export function updateRemark(data) {
  return request({
    url: '/tmApi/case/method/update/remark',
    method: 'post',
    data
  })
}

// 执行
export function runRemark(data) {
  return request({
    url: '/tmApi/case/method/run',
    method: 'post',
    data
  })
}

// 执行exec
export function execMethodSet(data) {
  return request({
    url: '/tmApi/case/case/set/exec',
    method: 'post',
    data
  })
}
// 获取执行集测试报告
export function queryMethodSetResult(data) {
  return request({
    url: '/tmApi/report/report/runrecordreport?runRecordId=' + data,
    // url: '/tmApi/report/report/runrecordreport',
    contentType: 'application/json',
    method: 'get',
    data
    // data: JSON.stringify(data)
  })
}

// 获取迭代测试报告
export function queryIterationReport(data) {
  return request({
    url: '/tmApi/report/report/labelreport?runRecordId=' + data,
    // url: '/tmApi/report/report/labelreport',
    // url: '/tmApi/report/labelreport',
    method: 'get',
    data

  })
}

// 获取报告方法明细
export function queryReportDetail(data) {
  return request({
    url: '/tmApi/report/report/recordserial',
    method: 'post',
    data

  })
}

// 获取度量报告
export function queryMeasurementReport(data) {
  return request({
    url: '/tmApi/report/measurement/query',
    method: 'post',
    data
  })
}

export function querySelectedmethods(data) {
  return request({
    url: '/tmApi/case/method/selectedmethods?methodSetId='+data,
    method: 'post',
    data
  })
}
