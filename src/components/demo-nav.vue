<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <router-link to="/nopage">这里是路由错误的展示</router-link>
      </li>
      <li>
        <router-link to="/vux">vux展示</router-link>
      </li>
      <li>
        <router-link to="/axios">axios展示</router-link>
      </li>
      <li>
        <router-link to="/validate">validate展示</router-link>
      </li>
      <li>
        <router-link to="/vue">vue默认页面</router-link>
      </li>
      <a href="https://geekjc-img.geekjc.com/logo.png" download="logo.png">下载图片</a>
    </ul>
  </div>
</template>

<script>

export default {
  data () {
    return {
      msg:'插件及配置演示'
    }
  },
   mounted () {
   
  }
}
</script>

<style scoped>

</style>
