import axios from "axios";
import { getCookie } from "../hooks/cookieHook";

export const instance = axios.create({
  baseURL: "http://localhost:5000/",
});

instance.interceptors.request.use(
  (config) => {
    const token = getCookie("access");
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log("error");
    return Promise.reject(error);
  }
);
