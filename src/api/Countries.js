import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.countrylayer.com/v2/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
const accessKey = process.env.VUE_APP_ACCESS_KEY;
const countriesInStorage = localStorage.getItem("zuvyCountries");

export default {
  fetchAllCountries() {
    return apiClient.get("/all?access_key=" + accessKey);
  },
  getCountryByName(name) {
    if (countriesInStorage) {
      const search = name;
      if (search.length === 3) {
        return JSON.parse(localStorage.getItem("zuvyCountries")).find(
          (c) => c.alpha3Code === search.toUpperCase()
        );
      }
      const transformName = search.charAt(0).toUpperCase() + search.slice(1);
      return JSON.parse(localStorage.getItem("zuvyCountries")).find(
        (c) => c.name === transformName
      );
    }
  },
};
