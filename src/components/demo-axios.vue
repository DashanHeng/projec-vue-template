<template>
  <div>
    <div v-transfer-dom >
      <x-dialog  v-model="load" hide-on-blur>我是加载成功后才有得哦</x-dialog>
    </div>

  </div>
</template>

<script>

import { XDialog } from 'vux'

export default {
  components: {
    XDialog
  },
  data () {
    return {
      load:false,
    }
  },
   mounted () {
    this.$http.post('youka',{'action':'Main/index'}).then((res)=>{
      if(res.code==200){
        this.load=true;
      }
    })
  }
}
</script>


<style scoped>

</style>
