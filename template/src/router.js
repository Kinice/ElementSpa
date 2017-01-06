import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// ===================== Pages Components ======================
import Hello from './components/Hello'
import Test  from './components/test'

// ==================== Router registration ====================
export default new Router({
  mode: 'hash',
  routes: [
    { path: '/', component: Hello },
    { path: '/test', component: Test}
  ]
})
