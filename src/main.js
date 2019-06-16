import Vue from 'vue'

import app from './App.vue'

// 导入Mint-UI组件
import {Header} from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header)

// 导入MUI样式
import './lib/mui/css/mui.min.css'

const vm = new Vue({
  el: '#app',
  render: c => c(app)
})