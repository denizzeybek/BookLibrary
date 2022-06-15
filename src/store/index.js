import Vue from 'vue'
import Vuex from 'vuex'
import books from './modules/books'
import users from './modules/users'

Vue.use(Vuex)

export default new Vuex.Store({
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
