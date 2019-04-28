export default {
  namespaced: true,
  state: {
    text: 'aaaa'
  },
  mutations: {
    change (state, payload) {
      state.text = payload.text
    }
  },
  actions: {
    changeText (context) {
      context.commit('change', {
        text: '123'
      })
    }
  },
  getters: {}
}