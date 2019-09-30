export const settings = {
  isProduction: process.env.NODE_ENV === "production",
  requestUrl: "/api",
  timeout: 8000,
  user: {
    useInfor: {}
  },
  router: {
    whiteList: ["/login"]
  },
  global: {
    appId: ""
  },
  examineData: {
    time: ""
  }
};
