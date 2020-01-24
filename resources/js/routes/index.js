import VueRouter from 'vue-router'

import Bookables from '../bookables/Bookables'
import Bookable from '../bookable/Bookable'

const routes = [
  {
    path: '/',
    component: Bookables,
    name: 'index'
  },
  {
    path: '/bookable/:id',
    component: Bookable,
    name: 'bookable'
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})
