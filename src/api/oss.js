import request from '@/utils/request'


//查询上传到oss的文件信息
export function queryFile(data) {
  return request({
    url: '/tmApi/common/oss/query',
    method: 'post',
    data
  })
}

//oss文件下载接口
export function downloadFile(params) {
  return request({
    url: '/tmApi/common/oss/downloadFile',
    method: 'get',
    params
  })
}

//文件保存接口
export function fileSave(data) {
  return request({
    url: '/tmApi/common/oss/commit',
    method: 'post',
    data
  })
}

/*export function downloadFile2(params) {
  downloadRequest({
    url: '/tmApi/common/oss/downloadFile',
    method: 'get',
    params
  }).then(res => {
    let data = res.data // 这里后端对文件流做了一层封装，将data指向res.data即可
    if (!data) {
      return
    }
    let url = window.URL.createObjectURL(new Blob([data]))
    let a = document.createElement('a')
    a.style.display = 'none'
    a.href = url
    a.setAttribute('download', params.url)
    document.body.appendChild(a)
    a.click() //执行下载
    window.URL.revokeObjectURL(a.href) //释放url
    document.body.removeChild(a) //释放标签
  }).catch((error) => {
    console.log(error)
  })
}*/

