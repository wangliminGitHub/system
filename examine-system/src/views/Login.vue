<template>
  <div class="login">
    <div class="login-title">健康管理师<br/>报名系统</div>
    <div class="login-input top-box">
      <input type="text" class="my-input">
    </div>
    <div class="login-input center-box">
      <div class="login-verification">
        <input type="text" class="my-input">
      </div>
      <div class="login-verification-btn">
        <div class="verification-btn">短信验证码</div>
      </div>
    </div>
    <button class="login-btn">登陆</button>
  </div>
</template>
<style lang="scss" scoped>
.login {
  background: url("./../assets/img/appImg/22.png");
  background-size: cover;
  width: 100%;
  height: 100%;
}
.login-title {
  font-size: 0.69rem;
  font-weight: bold;
  color: #FFFFFF;
  font-family: 'PingFang-SC-Bold';
  padding-top: 2.16rem;
  // line-height: 70px;
}
.top-box {
  padding-top: 2.1rem;
}
.login-btn {
  background:linear-gradient(0deg,rgba(69,125,252,1) 0%,rgba(99,146,254,1) 100%);
  width: 8rem;
  margin: 0 auto;
  height: 1.12rem;
  border: none;
  border-radius: 0.56rem;
  margin-top: 1.25rem;
  font-size: 0.42rem;
  font-weight:400;
  color:rgba(255,255,255,1);
}
.center-box {
  padding-top: 0.4rem;
}
.login-verification-btn {
  width: 2.8rem;
}
.verification-btn {
  width: 100%;
  border-radius: 0.56rem;
  border:1px solid rgba(99,146,254,1);
  height: 1.12rem;
  background:rgba(255,255,255,1);
  opacity:0.18;
  cursor: pointer;
  color:rgba(255,254,254,1);
  font-size: 0.42rem;
  line-height: 1.12rem;
  font-weight:400;
}
.login-input {
  width: 8rem;
  margin: auto;
  display: flex;
  justify-content: space-between;
}
.my-input {
  -webkit-appearance: none;
  background-color: transparent;
  background-image: none;
  border-radius: 0.56rem;
  border: 1px solid #6392FE;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: 32px;
  font-family:PingFang SC;
  font-weight:400;
  color:rgba(153,153,153,1);
  height: 1.12rem;
  line-height: 1;
  outline: none;
  padding: 0.34rem 0.41rem;
  transition: border-color .2s cubic-bezier(.645,.045,.355,1);
  width: 100%;
}
.login-verification {
  width: 4.8rem;
}
</style>
