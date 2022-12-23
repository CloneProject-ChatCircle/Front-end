import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_AKIJAKI,
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  // withCredentials: true,
});

export const baseURL = axios.create({
  baseURL: process.env.REACT_APP_AKIJAKI,
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  // withCredentials: true,
});

//인스턴스 request header
baseURL.interceptors.request.use((config) => {
  if (config.headers === undefined) return;
  const token = localStorage.getItem("id");
  config.headers["Authorization"] = `${token}`;
  return config;
});
