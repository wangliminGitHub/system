module.exports = {
  devServer: {
    porxy: {
      "/api": {
        target: "http://pc.pooway.net.cn/poowayapi",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
