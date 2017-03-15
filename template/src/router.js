import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// ===================== Pages Components ======================
import Hello from './pages/Hello'
import Test  from './pages/test'

// ==================== Router registration ====================
export default new Router({
  mode: 'hash',
  routes: [
    { path: '/', component: Hello },
    { path: '/test', component: Test}
  ]
})
