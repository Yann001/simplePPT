import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import PPT from '@/components/PPT'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/ppt',
      name: 'ppt',
      component: PPT
    }
  ]
})