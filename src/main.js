import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
import {
  required,
  email,
  min,
  length,
  numeric,
  confirmed
} from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTw from '@vee-validate/i18n/dist/locale/zh_TW.json'

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
defineRule('length', length)
defineRule('numeric', numeric) // 必數字
defineRule('confirmed', confirmed) // 字串全等
configure({
  generateMessage: localize({
    zh_TW: zhTw
  }),
  validateOnInput: true
})
setLocale('zh_TW')
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import 'bootstrap'


import './assets/all.scss'


const app = createApp(App)
app.component('VForm', Form)
app.component('VField', Field)
app.component('VErrorMessage', ErrorMessage)
app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)
app.mount('#app')
