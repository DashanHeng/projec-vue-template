import Vue from 'vue'
import VeeValidate,{Validator} from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'


const ValidateConfig = {
  events: 'blur',
  locale: 'zh_CN',
};


Validator.addLocale(zh_CN)
Vue.use(VeeValidate,ValidateConfig)









