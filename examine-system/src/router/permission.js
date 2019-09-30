import router from "./router.js";
import { getUserInfor } from "@/utils/index.js";
import { settings } from "@/setting.js";

router.beforeEach((to, from, next) => {
  let isLogin = getUserInfor("userInfo");
  let whiteList = settings.router.whiteList;
  if (!isLogin) {
    // 未登录
    if (whiteList.includes(to.path)) {
      next();
    } else {
      next("login");
    }
  } else {
    if (to.path === "/login") {
      next("/");
    } else {
      next();
    }
  }
});
