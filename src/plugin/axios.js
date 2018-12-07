import axios from 'axios'
import qs from 'qs'
import Vue from 'vue'
import  { LoadingPlugin } from 'vux'
import  { ToastPlugin } from 'vux'

Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)
// 创建 instance 实例----------------------------------------------------------------
let instance = axios.create({
  baseURL: 'http://192.168.0.200:9527/api/',
  timeout: 2000,
})

// 设置 post、put 默认 Content-Type
// instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


// 添加请求拦截器-----------------------------------------------------------------
instance.interceptors.request.use(config => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  // 在发送请求之前loading动画
  Vue.$vux.loading.show({
    text: 'Loading'
   })
  return config
}, error => {
   // 对请求错误取消loadding动画
   Vue.$vux.loading.hide();
  Vue.$vux.toast.text('你请求哪里写错了哟！')
  return Promise.reject(error)
})

// 添加响应拦截器-----------------------------------------------------------------
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么（取消loadding动画，对某一种返回数据做处理）
  Vue.$vux.loading.hide()
  var data=response.data;
  if(data.code==400){  //服务器报400错误时，页面提示错误信息
    Vue.$vux.toast.text(data.info)
  }else if(data.code==500){
    Vue.$vux.toast.text(data.info)
  }
  return data;
}, function (error) {
  // 对响应错误做点什么（取消loadding动画，然后做报错提示信息）
  Vue.$vux.loading.hide();
  Vue.$vux.toast.text('哟呵，服务器不理你呢！')
    return Promise.reject(error);
  });

  Vue.prototype.$http = instance;
// 输出默认模块------------------------------------------------------------------------
// export default instance;

// export default {
//   get (url, params, headers) {
//     let options = {}
//     if (params) {
//       options.params = params
//     }
//     if (headers) {
//       options.headers = headers
//     }
//     return instance.get(instance.defaults.baseURL+url, options)
//   },
//   post (url, params, headers) {
//     let options = {}
//     if (headers) {
//       options.headers = headers
//     }
//     return instance.post(instance.defaults.baseURL+url, params, options)
//   },
//   put  (url, params, headers) {
//     let options = {}
//     if (headers) {
//       options.headers = headers
//     }
//     return instance.putinstance.defaults.baseURL+(url, params, options)
//   },
//   delete (url, params, headers) {
//     let options = {}
//     if (params) {
//       options.params = params
//     }
//     if (headers) {
//       options.headers = headers
//     }
//     return instance.delete(instance.defaults.baseURL+url, options)
//   }
// }
