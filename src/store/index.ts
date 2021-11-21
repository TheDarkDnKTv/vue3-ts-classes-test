import { createStore } from 'vuex'

export default createStore({
  state: {
    test: "PogU"
  },
  mutations: {
    updateTest(state: any, newValue: string) {
      state.test = newValue;
    }
  },
  actions: {
  },
  modules: {
  }
})
