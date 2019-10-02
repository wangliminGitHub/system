// vue.config.js
module.exports = {
  // 修改的配置
  // 将baseUrl: '/api',改为baseUrl: '/',
  publicPath: "./",
  devServer: {
    proxy: {
      "/api": {
        target: "http://47.93.187.63:7070",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/api"
        }
      }
    }
  }
};
// .env.development
// VUE_APP_BASE_API=/api
