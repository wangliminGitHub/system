import axios from "axios";
import settimg from "@/setting";
let config = {
  baseURL: settimg.requestUrl,
  timeout: settimg.timeout,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json"
  }
};
const axiosInstance = axios.create(config);
axiosInstance.interceptors.request.use(
  config => {
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
