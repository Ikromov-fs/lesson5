import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    name: 'Nodirbek',
    age: 19,
    datas: [],
    count: 1,
    limit: 1,
    qadamKa: 0,
    yurish: 0,
  },
  getters: {
  },
  mutations: {
    functons(state, item) {
      state.datas = item
    },
    puls(state, icr) {
      state.count -= icr
    },
    next(state, icr) {
      state.count += icr
    },
    shagat(state, icr) {
      state.qadamKa += icr
    },
    limit(state, val) {
      state.limit = val
    },
    yur(state) {
      state.yurish += state.qadamKa
    }
  },
  actions: {
    todo({ commit, state }) {
      axios.get(`https://jsonplaceholder.typicode.com/comments?_page=${state.count}&_limit=${state.limit}`).then(res => {
        const rezult = res.data.splice(0, 100)
        commit('functons', rezult)
      })
    },

    prev({ commit }) {
      commit('puls', 1)
    },
    next({ commit }) {
      commit('next', 1)
    },
    select({ commit }, { val }) {
      commit('limit', val)
    },
    qadam({ commit }) {
      commit('shagat', 1)
    },
    yurish({ commit }) {
      commit('yur')
    }
  },
  modules: {
  }
})