import Vue from 'vue'
import Router from 'vue-router'
import Nav from '@/components/demo-nav'
import defVue from '@/components/demo-vue'  
import MissingPage from '@/components/MissingPage' //404配置
import Vux from '@/components/demo-vux' //vux UI框架
import Axios from '@/components/demo-axios'  //axios插件
import Validate from '@/components/demo-validate'   //表单验证插件
import Vuex from '@/components/demo-Vuex'  //vuex状态管理插件
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '*', component:MissingPage },
    {
      path: '/',
      name: 'Nav',
      component: Nav
    },
    {
      path: '/vue',
      name: 'defVue',
      component: defVue
    },
    {
      path: '/axios',
      name: 'Axios',
      component: Axios
    },
    {
      path: '/validate',
      name: 'Validate',
      component: Validate
    },
    {
      path: '/vux',
      name: 'Vux',
      component: Vux
    },
    {
      path: '/vuex',
      name: 'Vuex',
      component: Vuex
    }
  ]
})
