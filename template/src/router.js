import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// ===================== Pages Components ======================
import Hello from './pages/Hello'
import Test  from './pages/test'

import Frame from './components/frame'
import Login from './pages/common/login'
import ErrorPage from './pages/common/404'

// ==================== Router registration ====================
export default new Router({
  mode: 'hash',
  routes: [
    {
        path: '/login',
        component: Login,
        meta: { auth: false }
    },
    { 
        path: '/', 
        component: Frame,
        children: [
        {
            path: '/hello',
            component: Hello
        },
        {
            path: '/test',
            component: Test
        }
        ],
        redirect: '/hello'
    },
    {
        path: '*',
        component: ErrorPage,
        meta: { auth: false }
    }
  ]
})
