import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from './store/moduleA'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    moduleA
  }
})
