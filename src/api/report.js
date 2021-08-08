import request from '@/utils/request'
//报告查询
export function queryStatement(data) {
    return request({
        url: '/tmApi/report/measurement/statement',
        method: 'post',
        data

    })
}