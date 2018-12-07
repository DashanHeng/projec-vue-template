<template>
  <div>
    <div>
       <input type="text"   v-validate="'required|email'" name="email">
       <span>{{errors.first('email')}}</span>
    </div>
 
  </div>
</template>


<script>
import { Flexbox, FlexboxItem } from 'vux'

export default {
  data(){
    return {
      email:'123456@qq.com'
    }
  },
  components: {
    Flexbox,
    FlexboxItem
  },
  methods:{
    exam(){
      let res=this.$validator.validate('email').then((res)=>{
        console.log(res)
      });
    }
  }
}
</script>
