<template>
  <div class="sign-up">
    <div class="sign-title">
      <div class="sign-title-left">
        <img :src="detail.examImg" alt class="sign-img" />
      </div>
      <div class="sign-title-right">
        <div>健康管理师</div>
        <div style="padding-top: 16px;color: rgba(102, 102, 102, 1);">
          <span>科目名称：</span>
          <span>{{detail.examKind}}</span>
        </div>
        <div class="title-text">
          <span>考试时间：</span>
          <span>{{detail.examDate}}</span>
        </div>
        <div class="title-text">
          <span>报名费用：</span>
          <span>{{detail.examMoney}}元</span>
        </div>
      </div>
    </div>
    <div class="divider"></div>
    <div class="conditions">健康管理师考生报考条件：</div>
    <div class="conditions-infor" v-html="detail.relatedData">
    </div>
    <div class="login-btn" @click="signUp">报名</div>
  </div>
</template>
<script>
import { getExamDetail } from "@/api/index/index.js";

export default {
  name: "signUp",
  data() {
    return {
      detail:{}
    };
  },
  created() {
    var params = {
      id: this.$route.query.examId
    };
    getExamDetail(params).then(response => {
      this.detail=response.data.data;
    });
  },
  methods: {
    signUp() {
      this.$router.push({
        path: "/chooseIndentity"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.sign-up {
  height: 100%;
  box-sizing: border-box;
  background: white;
  padding: 18px 15px 65px 15px;
  .sign-title {
    display: flex;
    .sign-img {
      width: 95px;
      height: 95px;
    }
    .sign-title-right {
      padding: 10px 0px 10px 12px;
    }
  }
}
.sign-title-right div {
  line-height: 1;
}
.title-text {
  padding-top: 6px;
  color: rgba(102, 102, 102, 1);
  font-size: 1.2rem;
}
.sign-title-right div:first-child {
  color: rgba(99, 146, 254, 1);
  font-size: 1.6rem;
}
.divider {
  height: 1px;
  background: rgba(242, 242, 242, 1);
  margin: 18px 0px;
}
.conditions {
  color: rgba(102, 102, 102, 1);
  font-size: 1.4rem;
}
.conditions-infor {
  margin-top: 13px;
  color: rgba(102, 102, 102, 1);
  font-size: 10px;
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
  line-height: 42px;
  border: none;
  border-radius: 21px;
  margin-top: 68px;
  font-size: 1.6rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
</style>