import Vue from "vue";
import Vuex from "vuex";
import Countries from "../api/Countries";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    darkTheme: true,
    countries: [],
  },
  mutations: {
    SWITCH_THEME(state) {
      state.darkTheme = !state.darkTheme;
    },
    SET_COUNTRIES(state, payload) {
      state.countries = payload;
    },
  },
  actions: {
    fetchCountries({ commit }) {
      Countries.fetchAllCountries().then(({ data }) => {
        commit("SET_COUNTRIES", data);
        console.log(data);
      });
    },
  },
  modules: {},
  getters: {
    isDarkThemeOn: (state) => state.darkTheme,
    allCountries: (state) => state.countries,
  },
});
