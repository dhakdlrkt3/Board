import Vue from 'vue'
import VueRouter from 'vue-router'
import Board from '../views/Board.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Board',
    component: Board,
    
  },
  {
    path: '/Writing',
    name: 'Writing',
    component: () => import(/* webpackChunkName: "Writing" */ '../views/Writing.vue')
  },
  {
    path: "/detail/:ContentsId",
    name: "board-detail",
    component: () => import(/* webpackChunkName: "board-detail" */ '../views/BoardDetail.vue' ),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
