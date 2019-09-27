<template>
  <div class="home">
    <div class="home-bg"></div>
    <div class="home-content">
      <div class="examine-list" @click="goExamineInfor">
        <div class="list-img">
          <img src="./../../assets/img/appImg/19.png" alt="" class="list-img">
        </div>
        <div class="list-text">
          <div class="text-top">秋季考试</div>
          <div class="text-center">2019年9月8日</div>
          <div class="text-bottom">
            <span>报名费用：</span>
            <span>80</span>
          </div>
        </div>
        <div class="list-end">
          <img src="./../../assets/img/appImg/18.png" alt="" class="end-img">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data () {
    return {}
  },
  methods: {
    goExamineInfor () {
      this.$router.push({
        path: "/signUp"
      })
    }
  }
};
</script>
<style lang="scss" scoped>
  .home {
    height: 100%;
    box-sizing: border-box;
  }
  .home-bg {
    height: 145px;
    background: url("../../assets/img/appImg/8.png") no-repeat;
    background-size: 100%;
  }
  .home-content {
    padding: 10px 15px;
    padding-bottom: 60px;
  }
  .examine-list {
    padding: 16px;
    background:rgba(255,255,255,1);
    border-radius: 0.266rem;
    display: flex;
    align-items: center;
  }
  .list-img {
    width: 63px;
    height: 63px;
  }
  .text-top {
    color:rgba(99,146,254,1);
    font-size: 1.6rem;
  }
  .list-text {
    margin-left: 16px;
    flex-grow: 1;
    div {
      line-height: 1;
      text-align: left;
    }
    .text-center {
      padding: 0.9px 0px;
      font-weight:400;
      color:rgba(102,102,102,1);
      font-size: 1.4rem;
    }
    .text-bottom {
      font-weight:400;
      color:rgba(102,102,102,1);
      font-size: 1.4rem;
    }
  }
  .end-img {
    width: 92px;
    height: 72px;
  }
</style>