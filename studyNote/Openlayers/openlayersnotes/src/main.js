import Vue from 'vue'
import App from './App.vue'
import './assets/css/globe.css'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
