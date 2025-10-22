import axios from "axios";

const backendUrl = "http://localhost:3000/api";

const AuthAxios = axios.create({
  baseURL: backendUrl,
  withCredentials: true,
});

AuthAxios.interceptors.request.use(
  (config) => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      const { token } = JSON.parse(userInfo);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

AuthAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default AuthAxios;
