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
      const countries = JSON.stringify(payload);
      localStorage.setItem("zuvyCountries", countries);
    },
  },
  actions: {
    fetchCountries({ commit }) {
      Countries.fetchAllCountries().then((response) => {
        commit("SET_COUNTRIES", response.data);
      });
    },
    // eslint-disable-next-line no-unused-vars
    getCountryByName({ commit }, payload) {
      const country = Countries.getCountryByName(payload);
      return country;
    },
  },
  modules: {},
  getters: {
    isDarkThemeOn: (state) => state.darkTheme,
    allCountries: (state) => state.countries,
  },
});
