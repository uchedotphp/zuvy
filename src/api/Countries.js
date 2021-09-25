import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://api.countrylayer.com/v2/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
const accessKey = process.env.ACCESS_KEY;

export default {
  fetchAllCountries() {
    return apiClient.get("/all?access_key=" + accessKey);
  },
};
