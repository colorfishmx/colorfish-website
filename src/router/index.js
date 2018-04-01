import Vue from 'vue'
import Router from 'vue-router'
import AppIndex from '@/components/pages/AppIndex'
import AppProduct from '@/components/pages/AppProduct'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppProduct',
      component: AppProduct
    }
  ]
})
