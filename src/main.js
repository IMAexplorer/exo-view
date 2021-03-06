import Vue from 'vue'
import App from './App.vue'
import AsyncComputed from 'vue-async-computed'
import VueMaterial from 'vue-material'


import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false

Vue.use(VueMaterial)
Vue.use(AsyncComputed)

new Vue({
  render: h => h(App)
}).$mount('#app')
