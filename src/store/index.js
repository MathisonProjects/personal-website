import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  state: {
    seenCookieConsent: false
  },
  getters: {
  },
  mutations: {
    setSeenCookieConsent(state, value) {
      state.seenCookieConsent = value;
    }
  },
  actions: {
    storeReset(context) {
      context.commit('setSeenCookieConsent', false);
    },
    setSeenCookieConsent(context, value) {
      context.commit('setSeenCookieConsent', value);
    }
  },
  plugins: [createPersistedState()]
})
