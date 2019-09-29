export const system = {
  isProduction: process.env.NODE_ENV === "production",
  requestUrl: process.env.REQUEST_URl,
  timeout: 8000
};
