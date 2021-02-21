import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const includPush = Router.prototype.push

Router.prototype.push = function push(location) {
  return includPush.call(this, location).catch(err => err)

}
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/home/Home')
    },
    {
      path: '/city',
      name: 'City',
      component: () => import('@/pages/city/City')
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: () => import('@/pages/detail/Detail')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
