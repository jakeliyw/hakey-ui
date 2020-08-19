import Vue from 'vue'
import App from './App.vue'
import HakeyUI from '../packages'

Vue.config.productionTip = false
Vue.use(HakeyUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
