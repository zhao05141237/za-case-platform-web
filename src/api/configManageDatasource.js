import request from '@/utils/request'

export function queryDatasource(data) {
    return request({
        url: '/tmApi/datasource/query',
        method: 'post',
        data
    })
}

export function delDatasource(params) {
    return request({
        url: '/tmApi/datasource/del',
        method: 'get',
        params
    })
}

export function createDatasource(data) {
    return request({
        url: '/tmApi/datasource/create',
        method: 'post',
        data
    })
}

export function modDatasource(data) {
    return request({
        url: '/tmApi/datasource/mod',
        method: 'post',
        data
    })
}

export function refreshDatasource(params) {
    return request({
        url: '/tmApi/datasource/refresh',
        method: 'get',
        params
    })
}