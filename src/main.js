// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'  //状态管理
import './plugin//axios.js'  //axios封装
import './plugin/validate.js'   //validate封装
import { TransferDom } from 'vux'  //这个是为了解决使用弹出层时候的bug


Vue.use(Vuex)  

Vue.config.productionTip = false
Vue.directive('transfer-dom', TransferDom) //这个是为了解决使用弹出层时候的bug
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
