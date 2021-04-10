import axios from "axios";

const api = axios.create({
  baseURL: "https://mais-imune.herokuapp.com",
});

export default api;
