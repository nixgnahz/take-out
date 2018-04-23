import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  loginStatus: false
}

const mutations = {
  loginSuccess (state) {
    state.loginStatus = true;
  }
}

export default new Vuex.Store({
  state,
  mutations
})
