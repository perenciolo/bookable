import VueRouter from 'vue-router'

import Bookables from '../bookables/Bookables'

const routes = [
  {
    path: '/',
    component: Bookables,
    name: 'Index'
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})
