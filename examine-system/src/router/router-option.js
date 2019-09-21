import routers from "./routers.js";
export default {
  base: process.env.BASE_URL,
  /**
   * 当浏览器不支持 history.pushState 控制路由,回退到 hash 模式。
   */
  fallback: true,
  linkActiveClass: "router-link-active",
  linkExactActiveClass: "router-link-exact-active",
  mode: "hash",
  routers
};
