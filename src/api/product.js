import request from '@/utils/request'

export function queryProject(data) {
  return request({
    url: '/tmApi/case/project/query',
    method: 'post',
    data
  })
}

export function updateProject(data) {
  return request({
    url: '/tmApi/case/project/update',
    method: 'post',
    data
  })
}

export function scanProject(params) {
  return request({
    url: '/tmApi/case/project/build/hand',
    method: 'get',
    params
  })
}

export function addProject(data) {
  return request({
    url: '/tmApi/case/project/add',
    method: 'post',
    data
  })
}
export function addCaseGather(data) {
  return request({
    url: '/tmApi/autotest/case/set/add',
    method: 'post',
    data
  })
}
export function caseUpdate(data) {
  return request({
    url: '/tmApi/autotest/case/set/update',
    method: 'post',
    data
  })
}
export function queryCaseDetail(params) {
  return request({
    url: '/tmApi/autotest/case/set/detail',
    method: 'get',
    params
  })
}
export function queryCaseTree(params) {
  return request({
    url: '/tmApi/autotest/case/tree',
    method: 'get',
    params
  })
}
export function deleteCase(data) {
  return request({
    url: '/tmApi/autotest/case/set/delete',
    method: 'post',
    data
  })
}

export function queryCase(params) {
  return request({
    url: '/tmApi/autotest/case/query',
    method: 'get',
    params
  })
}

export function queryCaseGather(params) {
  return request({
    url: '/tmApi/autotest/case/set/query',
    method: 'get',
    params
  })
}

export function queryExecutionGather(params) {
  return request({
    url: '/tmApi/autotest/exe/set/query',
    method: 'get',
    params
  })
}

export function queryExecutionPlan(params) {
  return request({
    url: '/tmApi/autotest/exe/plan/query',
    method: 'get',
    params
  })
}

export function executionExecute(data) {
  return request({
    url: '/tmApi/autotest/exe/plan/execute/id',
    method: 'post',
    data
  })
}

export function executionRecord(data) {
  return request({
    url: '/tmApi/case/runRecord/query',
    method: 'post',
    data
  })
}

export function queryApp(data) {
  return request({
    url: '/tmApi/baseinfo/app/query',
    method: 'post',
    data
  })
}

export function syncRecord(params) {
  return request({
    url: '/tmApi/autotest/exe/record/sync',
    method: 'get',
    params
  })
}

export function executionRecordDetail(data) {
  return request({
    url: '/tmApi/case/runRecord/detail',
    method: 'post',
    data
  })
}

export function executionRecordLog(data) {
  return request({
    url: '/tmApi/case/runRecord/log',
    method: 'post',
    data
  })
}

export function closeApplication(params) {
  return request({
    url: '/tmApi/case/runRecord/close',
    method: 'get',
    params
  })
}


export function executionGatherAdd(data) {
  return request({
    url: '/tmApi/autotest/exe/set/add',
    method: 'post',
    data
  })
}

export function executionGatherUpdate(data) {
  return request({
    url: '/tmApi/autotest/exe/set/update',
    method: 'post',
    data
  })
}

export function executionGatherDetail(params) {
  return request({
    url: '/tmApi/autotest/exe/set/detail',
    method: 'get',
    params
  })
}

export function executionGatherDel(data) {
  return request({
    url: '/tmApi/autotest/exe/set/delete',
    method: 'post',
    data
  })
}

// export function createExecutionPlan(data) {
//   return request({
//     url: '/tmApi/autotest/exe/plan/add',
//     method: 'post',
//     data
//   })
// }

export function projectDetail(data) {
  return request({
    url: '/tmApi/case/project/detail',
    method: 'post',
    data
  })
}

export function coverageApp(data) {
  return request({
    url: '/tmApi/case/project/coverage/app',
    method: 'post',
    data
  })
}

