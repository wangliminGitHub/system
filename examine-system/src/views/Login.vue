<template>
  <div class="login">
    <div class="login-title">
      健康管理师
      <br />报名系统
    </div>
    <div class="login-input top-box">
      <input type="text" v-model="phone" class="my-input" placeholder="请输入手机号码" />
    </div>
    <div class="login-input center-box">
      <div class="login-verification">
        <input type="text" class="my-input" v-model="code" placeholder="请输入验证码" />
      </div>
      <div class="login-verification-btn">
        <div class="verification-btn" @click="getCode">短信验证码</div>
      </div>
    </div>
    <button class="login-btn" @click="login">登陆</button>
  </div>
</template>
<script>
import { getCode, login } from "@/api/login/index.js";
import { serachLoginInfo } from "@/api/index/index.js";

import { setUserInfor, getUserInfor } from "@/utils/index.js";
import { settings } from "@/setting.js";

export default {
  name: "login",
  components: {},
  data() {
    return {
      phone: "",
      code: ""
    };
  },
  methods: {
    getCode() {
      var param = {
        userPhone: this.phone
      };
      getCode(param).then(response => {
        console.log(response);
      });
    },
    login() {
      window.location.herf =
        "http://47.93.187.63:8080/user/enter?organization=报名机构名称";
      var location = window.location.herf;
      var param = {
        phoneCode: this.code,
        username: this.phone,
        organization: location.split("?")[1].split("=")[1]
      };
      login(param).then(response => {
        var userInfor = response.data.data;
        settings.user.useInfor = userInfor;
        setUserInfor("userInfo", JSON.stringify(userInfor));
        // 登录成功之后
        // serachLoginInfo().then(response=>{
        //   // console.log(response);
        // })
        this.$router.push({
          path: "/",
          query: {}
        });
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.login {
  background: url("./../assets/img/appImg/22.png");
  background-size: cover;
  width: 100%;
  height: 100%;
}
.login-title {
  text-align: center;
  font-size: 2.6rem;
  font-weight: bold;
  color: #ffffff;
  font-family: "PingFang-SC-Bold";
  padding-top: 81px;
  // line-height: 70px;
}
.top-box {
  padding-top: 79px;
}
.login-btn {
  display: inherit;
  text-align: center;
  background: linear-gradient(
    0deg,
    rgba(69, 125, 252, 1) 0%,
    rgba(99, 146, 254, 1) 100%
  );
  width: calc(100% - 75px);
  margin: 0 auto;
  height: 42px;
  border: none;
  border-radius: 21px;
  margin-top: 47px;
  font-size: 1.6rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.center-box {
  padding-top: 15px;
}
.login-verification-btn {
  width: 105px;
}
.verification-btn {
  width: 100%;
  border-radius: 21px;
  border: 1px solid rgba(99, 146, 254, 1);
  height: 42px;
  background: rgba(255, 255, 255, 0.18);
  cursor: pointer;
  color: rgba(255, 254, 254, 1);
  font-size: 1.6rem;
  line-height: 42px;
  font-weight: 400;
  text-align: center;
}
.login-input {
  width: calc(100% - 75px);
  margin: auto;
  display: flex;
  justify-content: space-between;
}
.my-input {
  box-sizing: border-box;
  -webkit-appearance: none;
  background-color: transparent;
  background-image: none;
  border-radius: 21px;
  border: 1px solid #6392fe;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: 1.6rem;
  font-family: PingFang SC;
  font-weight: 400;
  color: rgba(153, 153, 153, 1);
  height: 42px;
  line-height: 1;
  outline: none;
  padding: 13px 16px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
}
.login-verification {
  width: 180px;
}
</style>
