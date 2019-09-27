<template>
  <div class="footer-bar">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/">考试</van-tabbar-item>
      <van-tabbar-item icon="search" to="/noticeResultDetail">通知</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/personalCenter">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: "footerBar",
  data () {
    return {
      active: 0
    };
  }
};
</script>
