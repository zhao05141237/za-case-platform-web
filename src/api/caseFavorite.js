import request from '@/utils/request'

//查询收藏用例
export function queryFavoriteCase(data) {
  return request({
    url: '/tmApi/favorite/query',
    method: 'post',
    data
  })
}

//新增收藏用例
export function addFavoriteCase(data) {
  return request({
    url: '/tmApi/favorite/add',
    method: 'post',
    data
  })
}

//更新收藏用例
export function updateFavoriteCase(data) {
  return request({
    url: '/tmApi/favorite/update',
    method: 'post',
    data
  })
}

//删除收藏用例
export function delFavoriteCase(data) {
  return request({
    url: '/tmApi/favorite/delete',
    method: 'post',
    data
  })
}

