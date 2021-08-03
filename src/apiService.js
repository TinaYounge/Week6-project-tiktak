import axios from "axios";

const api = axios.create({
  baseURL: "https://cs-ecom-be.herokuapp.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
