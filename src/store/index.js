import Vue from 'vue'
import Vuex from 'vuex'
import i from './modules/store'
import errorLog from './modules/errorLog'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    i,
    errorLog
  },
  getters
})

export default store
