import Vue from 'vue'
// 1.1导入路由的包
import VueRouter from 'vue-router'
// 1.2安装路由
Vue.use(VueRouter)



// 导入Mint-UI组件
import {Header} from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header)

// 导入MUI样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'


// 1.3导入自己的router.js 路由模块
import router from './router.js'


import app from './App.vue'

const vm = new Vue({
  el: '#app',
  render: c => c(app),
  router // 1.4挂载路由对象到 vm 实例上
})