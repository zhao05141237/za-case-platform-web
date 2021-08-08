import { queryProject, queryApp } from '@/api/product'

const state = {
  projectList: []
}

const mutations = {

}

const actions = {
  // get user info
  queryProject({ commit, state }) {
    return new Promise((resolve, reject) => {
      queryProject({
        pageNo: 1,
        pageSize: 9999
      }).then(res => {
        const arr = res.data.list.map((v) => {
          return {
            value: v.id,
            label: v.name
          }
        })
        // arr.unshift({
        //   value: '',
        //   label: '全部'
        // })
        resolve(arr)
      })
    })
  },
  queryApp({ commit, state }) {
    return new Promise((resolve, reject) => {
      queryApp({
        currentPage: 1,
        pageSize: 9999
      }).then(response => {
        const arr = []
        response.data.list.map(v => {
          arr.push({
            value: v.appNo,
            label: `${v.appName}`
          })
        })
        // arr.unshift({
        //   value: '',
        //   label: '全部'
        // })
        resolve(arr)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

