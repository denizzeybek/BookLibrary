import Vue from 'vue'
import Vuex from 'vuex'
import books from './modules/books'
import users from './modules/users'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  plugins:[createPersistedState({
    overwrite:true
  })],
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    books, users
  }
})
