import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import module1Router from './router/index'
import page404 from './views/404.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    ...module1Router,
    {
      path: '*',
      name: '404',
      component: page404
    }
  ]
})
