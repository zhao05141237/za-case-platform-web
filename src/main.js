import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import './assets/theme/index.css';
import './common/css/menu-header.css';
import './common/css/main.css';
import 'mavon-editor/dist/css/index.css'
import App from './App'
import store from './store'
import router from './router'
import * as filters from '@/filters'
import '@/icons' // icon
import '@/permission' // permission control
import './assets/iconfont/iconfont.css'
import './assets/static/font/iconfont.css'
import VueClipboard from 'vue-clipboard2'
Vue.use(ElementUI)
Vue.use(VueClipboard)

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
