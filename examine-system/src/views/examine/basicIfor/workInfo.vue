<template>
  <!-- 步骤2 工作信息 -->
  <div class="chose-identity">
    <van-steps :active="active">
      <van-step></van-step>
      <van-step></van-step>
      <van-step></van-step>
      <van-step></van-step>
    </van-steps>
    <div class="chose-identity-form">
       <p class="work-title">工作经历请从最近一份开始填写</p>
      <van-cell-group>
        <van-field v-model="name" center clearable label="工作单位：" placeholder=""></van-field>
        <van-field v-model="phone" center clearable label="工作时间：" placeholder=""></van-field>
        <van-field v-model="email" center clearable label="职业类型：" placeholder=""></van-field>
        <van-field v-model="email" center clearable label="单位地址：" placeholder=""></van-field>
        <van-field v-model="email" center clearable label="证    明    人：" placeholder=""></van-field>
      </van-cell-group>
      <div class="add-cell text-center">
          <van-icon name="plus" />
          增加职业信息
      </div>
    </div>
    
    <div class="confirm-btn-step-div">
      <p class="confirm-btn-step" @click="next()">下一步</p>
    </div>
  </div>
</template>
<script>
import addressInfo from "@/assets/common/area";
export default {
  name: "studentInfo",
  data() {
    return {
      active: 1,
      name: "",
      phone: "",
      email: "",
      identityValue: "",
      addressValue: "",
     
    };
  },
  methods: {
    next(){
      this.$router.push({
        path: "/studentInfo"
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.chose-identity {
  padding: 0 15px;
}
.van-steps {
  background: transparent;
}
.van-cell {
  color: #666666;
}
.work-title{
    color:#999999;
    font-size:1.2rem;
    // margin-bottom:10px;
    margin:10px 0;
}
.add-cell{
    background: #fff;
    color:#575757;
    font-size:1.6rem;
    padding:18.5px 0;
    margin-top:15px;
    i{
        vertical-align: -2px;
    }
}
</style>
<style lang="scss">

</style>
