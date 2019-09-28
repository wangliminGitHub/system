<template>
  <!-- 报名成功 -->
  <div class="sign-up-success">
      <div class="sign-up-success-content text-center">
          <van-icon name="checked" />
          <p>报名成功</p>
          <span @click="look()">查看我的考试</span>
      </div>
  </div>
</template>
<script>
import addressInfo from "@/assets/common/area";
export default {
  name: "choseIdentity",
  data() {
    return {
      
     
    };
  },
  methods: {
    look(){
      this.$router.push({
        path: "/personalCenter"
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.sign-up-success-content{
    i{
        color:#FEA563;
        font-size:74px;
        margin-top:61px;
    }
    p{
        color:#666666;
        font-size:1.4rem;
        margin-top:20px;
    }
    span{
        margin-top:40px;
        display: inline-block;
        color:#fff;
        font-size:1.6rem;
        background:linear-gradient(0deg,rgba(69,125,252,1) 0%,rgba(99,146,254,1) 100%);
        border-radius:30px;
        padding:13px 36px;
    }

}
</style>
<style lang="scss">

</style>
