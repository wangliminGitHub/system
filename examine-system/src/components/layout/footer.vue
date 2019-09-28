<template>
  <div class="footer-bar">
    <van-tabbar v-model="active">
      <van-tabbar-item to="/">
        <div class="navbar-img-div">
          <img :src="active==0?active1:normal1" />
          <p>考试</p>
        </div>
      </van-tabbar-item>
      <van-tabbar-item  to="/noticeResultList">
        <div class="navbar-img-div">
          <img :src="active==1?active2:normal2" />
          <p>通知</p>
        </div>
      </van-tabbar-item>
      <van-tabbar-item  to="/personalCenter">
        <div class="navbar-img-div">
          <img :src="active==2?active3:normal3" />
          <p>通知</p>
        </div>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import icon1active from "../../assets/img/appImg/1.png";
import icon1normal from "../../assets/img/appImg/2.png";
import icon2active from "../../assets/img/appImg/12.png";
import icon2normal from "../../assets/img/appImg/7.png";
import icon3active from "../../assets/img/appImg/17.png";
import icon3normal from "../../assets/img/appImg/11.png";
export default {
  name: "footerBar",
  data() {
    return {
      active: 0,
      actve: 0,
      normal1: icon1normal,
      active1: icon1active,
      normal2: icon2normal,
      active2: icon2active,
      normal3: icon3normal,
      active3: icon3active
    };
  }
};
</script>
<style lang="scss" scoped>
.navbar-img-div {
  img {
    width: 22px;
    height: 22px;
    margin-bottom: 3px;
  }
}
</style>
