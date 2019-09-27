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
        path: ''
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
    height: 3.86rem;
    background: url("../../assets/img/appImg/8.png");
    background-size: cover;
  }
  .home-content {
    background:rgba(217,227,249,0.34);
    // opacity:0.34;
    height: calc(100% - 5.59rem);
    padding: 0.26rem 0.4rem;
  }
  .examine-list {
    padding: 0.48rem;
    background:rgba(255,255,255,1);
    border-radius: 0.266rem;
    display: flex;
    align-items: center;
  }
  .list-img {
    width: 1.68rem;
    height: 1.68rem;
  }
  .text-top {
    color:rgba(99,146,254,1);
    font-size: 0.42rem;
  }
  .list-text {
    margin-left: 0.48rem;
    flex-grow: 1;
    div {
      line-height: 1;
      text-align: left;
    }
    .text-center {
      padding: 0.27rem 0px;
      font-weight:400;
      color:rgba(102,102,102,1);
      font-size: 0.37rem;
    }
    .text-bottom {
      font-weight:400;
      color:rgba(102,102,102,1);
      font-size: 0.37rem;
    }
  }
  .end-img {
    width: 2.44rem;
    height: 1.9rem;
  }
</style>