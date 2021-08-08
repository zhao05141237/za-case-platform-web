const state = {
  searchForm: '',
  multipleSelection: []
}

const mutations = {
  FORM: (state, form) => {
    state.searchForm = form
  },
  CLEARFORM: () => {
    state.searchForm = ''
  },
  MULTIPLE: (state, multipleSelection) => {
    state.multipleSelection = multipleSelection
  },
  CLEARMULTIPLE: () => {
    state.multipleSelection = []
  }
}

export default {
  namespaced: true,
  state,
  mutations
}

