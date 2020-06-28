import Vue from 'vue'
import Board from './views/Board.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

export const eventBus = new Vue()

new Vue({
  router,
  store,
  render: h => h(Board)
}).$mount('#app')
