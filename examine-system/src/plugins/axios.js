import axios from "axios";
// import globalConfig from '@/settings.js'
import { settings } from "@/setting.js";
// eslint-disable-next-line no-console
let config = {
  baseURL: settings.requestUrl,
  timeout: 5000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json"
  }
};
const axiosInstance = axios.create(config);
axiosInstance.interceptors.request.use(
  config => {
    config.headers.userId = settings.user.useInfor.id;
    config.headers.userToken = settings.user.useInfor.userToken;
    return config;
  },
  error => {
    // eslint-disable-next-line no-console
    console.log(error);
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // eslint-disable-next-line no-console
    console.log(error);
    return Promise.reject(error);
  }
);
export default axiosInstance;
