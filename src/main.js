import Vue from 'vue'
import App from './App.vue'
import Button from './components/base/Button'
import Input from './components/base/Input'

Vue.config.productionTip = false

Vue.component('Button', Button)
Vue.component('Input', Input)

new Vue({
  render: (h) => h(App),
}).$mount('#app')
