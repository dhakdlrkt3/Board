import Vue from 'vue'
import VueRouter from 'vue-router'
import Board from '../views/Board.vue'

Vue.use(VueRouter)

// const About = () => {
//   return import(/* webpackChunkName: "about" */ '../views/About.vue')
// }
  const routes = [
  {
    path: '/',
    name: 'Board',
    component: Board,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
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
