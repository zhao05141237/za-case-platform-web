const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  loading: state => state.user.loading,
  searchForm: state => state.table.searchForm,
  multipleSelection: state => state.table.multipleSelection
}
export default getters
