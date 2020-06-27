import Vue from 'vue'
import Board from './Board.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Board)
}).$mount('#app')
