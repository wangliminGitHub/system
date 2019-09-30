// vue.config.js
module.exports = {
  // 修改的配置
  // 将baseUrl: '/api',改为baseUrl: '/',
  baseUrl: "./",
  devServer: {
    proxy: {
      "/api": {
        target: "http://47.93.187.63:8080",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
// .env.development
// VUE_APP_BASE_API=/api
