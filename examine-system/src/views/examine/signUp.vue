<template>
  <div class="sign-up">
    <div class="sign-title">
      <div class="sign-title-left">
        <img src="../../assets/img/appImg/6.png" alt="" class="sign-img">
      </div>
      <div class="sign-title-right">
        <div>健康管理师</div>
        <div style="padding-top: 16px;color: rgba(102, 102, 102, 1);">
          <span>科目名称：</span>
          <span>理论考试+操作技能考试</span>
        </div>
        <div class="title-text">
          <span>考试时间：</span>
          <span>2019年9月21日</span>
        </div>
        <div class="title-text">
          <span>报名费用：</span>
          <span>300元</span>
        </div>
      </div>
    </div>
    <div class="divider"></div>
    <div class="conditions">
      健康管理师考生报考条件：
    </div>
    <div class="conditions-infor">
      <div>1.具有医学药生专业大学专科以上学历证书。</div>
      <div>2.具有非医药卫生专业大学专科以上学历证书，连续从事本职业或相关工作2年以上，经三级健康管理师正规培训达标学时数，并取得结业证书。</div>
      <div>3.具有医药卫生专业中等专科以上学历，连续从事本职业或相关职业工作3年以上，经三级健康管理师正规培训达规定学时数，并去的结业证书。</div>
      <div>4.医药卫生专业的在校生，如不能由学校开出在读证明，可以在教育部网站上开出学籍报告（如附件），且能看出是当年毕业的学生，可以报考。</div>
    </div>
    <div class="login-btn" @click="signUp">报名</div>
  </div>
</template>
<script>
export default {
  name: "signUp",
  data () {
    return {}
  },
  methods: {
    signUp () {
      this.$router.push({
        path: "/chooseIndentity"
      })
    }
  }
}
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
    color:rgba(102,102,102,1);
    font-size: 10px;
  }
  .login-btn {
    display: inherit;
    text-align: center;
    background:linear-gradient(0deg,rgba(69,125,252,1) 0%,rgba(99,146,254,1) 100%);
    width: calc(100% - 75px);
    margin: 0 auto;
    height: 42px;
    line-height: 42px;
    border: none;
    border-radius: 21px;
    margin-top: 68px;
    font-size: 1.6rem;
    font-weight:400;
    color:rgba(255,255,255,1);
  }
</style>