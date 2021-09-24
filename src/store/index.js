import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    darkTheme: true,
  },
  mutations: {
    SWITCH_THEME(state) {
      state.darkTheme = !state.darkTheme;
    },
  },
  actions: {},
  modules: {},
  getters: {
    isDarkThemeOn: (state) => state.darkTheme,
  },
});
