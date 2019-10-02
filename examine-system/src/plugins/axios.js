import axios from "axios";
// import globalConfig from '@/settings.js'
import { settings } from "@/setting.js";
import { getUserInfor } from "@/utils/index.js";
// eslint-disable-next-line no-console

let config = {
  baseURL: settings.requestUrl,
  timeout: 5000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  }
};
const axiosInstance = axios.create(config);
axiosInstance.interceptors.request.use(
  config => {
    let userInfor = getUserInfor("userInfo"),
  userId = userInfor ? userInfor.id : "";
let userToken = userInfor ? userInfor.userToken : "";
config.headers.userId=userId;
config.headers.userToken=userToken;
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
