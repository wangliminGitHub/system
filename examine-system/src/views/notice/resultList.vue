<template>
  <div class="notice-result">
    <div class="notice-result-cell" @click="jumpDetail()">
      <van-row>
        <van-col span="4">
          <img class="notice-result-img" src="../../assets/img/appImg/notice-1.png" alt />
        </van-col>
        <van-col span="20">
          <div class="notice-result-content">
            <div class="cell-title">
              报名结果通知
              <span class="float-right">9月6日 19:45</span>
            </div>
            <p class="cell-text">辛橙武，您所选择的“健康管理师”专业报考成功！及时查看准考证！<点击查看></p>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "noticeResultList",
  data(){
    return {

    }
  },
  methods:{
    jumpDetail (){
      this.$router.push({
        path: "/noticeResultDetail"
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.notice-result {
  background: #fff;
}
.notice-result-cell {
  padding: 18px 15px 13px 16px;
  .notice-result-img {
    width: 44px;
  }
  .cell-title{
      color:#6392FE;
      font-size:1.6rem;
      font-weight:bold;
      span{
          color:#666666;
          font-size:1rem;
           font-weight:400;
           margin-top: 4px;
      }
  }
  .cell-text{
      margin-top:7px;
      font-weight:400;
      font-size:1.2rem;
      color:#666666;
      line-height:20px;
  }
}
</style>