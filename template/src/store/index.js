import Vue from 'vue'
import Vuex from 'vuex'
import User from './user'
import Index from './navIndex'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    User,
    Index
  }
})

export default store
