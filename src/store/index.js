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
    filterSearch: "",
    currentPage: 1,
    perPage: 8,
    nextPage: 8,
    totalCountries: 250,
    showPagination: false,
  },
  mutations: {
    SWITCH_THEME(state) {
      state.darkTheme = !state.darkTheme;
    },
    SET_COUNTRIES(state, payload) {
      state.countries = payload;
      const countries = JSON.stringify(payload);
      state.totalCountries = payload.length;
      state.showPagination = true;
      const regions = [];
      localStorage.setItem("zuvyCountries", countries);
      state.countries.forEach((c) => {
        regions.push(c.region);
      });
      localStorage.setItem(
        "zuvyRegions",
        new Set([...regions].filter(Boolean))
      );
      state.regions = new Set([...regions].filter(Boolean));
    },
    SET_STATE(state, data) {
      Object.keys(data).forEach((key) => (state[key] = data[key]));
    },
    MOVE_TO_PAGE(state, payload) {
      if (payload === "increase") {
        state.nextPage = state.nextPage + state.perPage;
        state.currentPage = state.currentPage + state.perPage;
      } else if (payload === "decrease") {
        state.nextPage = state.nextPage - state.perPage;
        state.currentPage = state.currentPage - state.perPage;
      }
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
      } else if (state.filterSearch) {
        return state.countries.filter((c) =>
          c.region.match(state.filterSearch)
        );
      }
      return state.countries;
    },
    paginateCountryResult: (state, getters) =>
      getters.allCountries.slice(state.currentPage - 1, state.nextPage),
    allRegions: (state) => state.regions,
  },
});
