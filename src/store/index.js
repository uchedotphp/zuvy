import Vue from "vue";
import Vuex from "vuex";
import Countries from "../api/Countries";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    darkTheme: true,
    countries: [],
    regions: [],
    searchTerm: "",
  },
  mutations: {
    SWITCH_THEME(state) {
      state.darkTheme = !state.darkTheme;
    },
    SET_COUNTRIES(state, payload) {
      state.countries = payload;
      const countries = JSON.stringify(payload);
      const regions = [];
      localStorage.setItem("zuvyCountries", countries);
      state.countries.forEach((c) => {
        regions.push(c.region);
      });
      localStorage.setItem("zuvyRegions", new Set([...regions]));
      state.regions = new Set([...regions]);
    },
    SET_STATE(state, data) {
      Object.keys(data).forEach((key) => (state[key] = data[key]));
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
    allCountries: (state) => {
      if (state.searchTerm) {
        const transformName =
          state.searchTerm.charAt(0).toUpperCase() + state.searchTerm.slice(1);
        return state.countries.filter((c) => c.name.match(transformName));
      }
      return state.countries;
    },
    allRegions: (state) => state.regions,
  },
});
