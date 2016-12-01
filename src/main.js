import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

Vue.use(VueRouter)

const home = resolve => require(['./home.vue'], resolve)
const login = resolve => require(['./login.vue'], resolve)
const list = resolve => require(['./list.vue'], resolve)
const details = resolve => require(['./details.vue'], resolve)

const routes = [
  { path: '/', component: home },
  { path: '/login', component: login },
  { path: '/list', component: list },
  { name: 'details', path: '/details/:pageId', component: details }
]

Vue.filter('filterTest', function (value, second) {
  return value + ': ' + second
})

const router = new VueRouter({
  mode: 'history',
  routes
})

router.afterEach(route => {
  console.log(route)
  app.$set(app, 'pageId', Number(route.params.pageId))
})

/* eslint-disable no-new */
let app = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data: function () {
    return {
      username: '',
      pageId: 0
    }
  }
})
