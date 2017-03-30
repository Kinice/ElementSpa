// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// =============== Base libraries integration ==================
import Vue from 'vue'
import ElementUI from 'element-ui'
import VueResource from 'vue-resource'
import VueTranslate from 'vue-translate-plugin'
import VueValidator from 'vue-validator'

import 'element-ui/lib/theme-default/index.css'

Vue.use(VueResource)
Vue.use(VueTranslate)
Vue.use(ElementUI)

import filters from './libs/filter'
import store from './store/'
import router from './router'

// ======================= Base Component ======================
import App from './App'

// ======================== Vue Instance =======================

// 初始化filter
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))
// Ajax拦截器
Vue.http.interceptors.push(function(request, next) {
    request.headers.set('token',store.state.User.password)
    next(response => {
        console.log(response)
    })
});

router.beforeEach(({meta, path}, from, next) => {
    var { auth = true } = meta
    var isLogin = Boolean(store.state.User.username)

    if(auth && !isLogin && path !== '/login') return next({ path: '/login' })

    next()
})

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
