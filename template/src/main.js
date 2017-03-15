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

import store from './store'
import router from './router'

// ======================= Base Component ======================
import App from './App'

// ======================== Vue Instance =======================
/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
