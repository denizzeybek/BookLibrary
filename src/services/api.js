import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:3000", // TODO: read from ENV
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default instance;
