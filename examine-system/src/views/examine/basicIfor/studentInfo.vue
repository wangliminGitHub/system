<template>
  <!-- 步骤3 学籍资料 -->
  <div class="chose-identity">
    <van-steps :active="active">
      <van-step></van-step>
      <van-step></van-step>
      <van-step></van-step>
      <van-step></van-step>
    </van-steps>
    <div class="chose-identity-form">
      <p class="title-info">请您务必核实 学信网账号密码的正确性！</p>
      <van-cell-group>
        <van-field v-model="account" center clearable label="账号：" placeholder="请输入学信网登录账号"></van-field>
        <van-field v-model="password" center clearable label="密码：" placeholder="请输入学信网登录密码"></van-field>
      </van-cell-group>
    </div>
    <!-- 无学信网资料显示 -->
    <div class="student-data">
      <p class="student-data-title">
        无学信网资料学员
        <span @click="judgeShow=!judgeShow">点击这里</span>
      </p>
      <div class="upload-div" v-if="judgeShow">
        <van-uploader :after-read="upload1">
          <div class="upload-img-style" v-if="uploadShow1">
            <img class="bg-img" src="@/assets/img/appImg/16.png" alt />
            <p>学信证书复印件</p>
          </div>
          <div class="upload-complete relative" v-else>
            <img :src="uploadImgUrl1" alt />
            <div class="upload-complete-text">重新上传</div>
          </div>
        </van-uploader>
      </div>
    </div>

    <div class="confirm-btn-step-div">
      <p class="confirm-btn-step" @click="next()">下一步</p>
    </div>
  </div>
</template>
<script>
import { studentInfo,uploadStudentImg } from "@/api/form/index.js";

export default {
  name: "",
  data() {
    return {
      active: 2,
      account: "",
      password: "",
      uploadShow1: true,
      uploadImgUrl1: "https://img.yzcdn.cn/vant/cat.jpeg",
      judgeShow:false
    };
  },
  methods: {
    upload1(file) {
      // 此时可以自行将文件上传至服务器
      this.uploadImgUrl1 = file.content;
      this.uploadShow1 = false;
      console.log(file);
      var params={

      }
      var formData = new FormData();
      formData.append("file_data", file.file);
      uploadStudentImg(formData).then(response=>{
        console.log(response);
      })
    },
     next(){
       var params={
         xueUsername:this.account,
         xuePassword:this.password
       }
       studentInfo(params).then(response=>{
         console.log(response);
       })
      this.$router.push({
        path: "/certificate"
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
.student-data {
  margin-top: 30px;
  .student-data-title {
    margin-bottom: 10px;
    color: #999999;
    font-size: 1.2rem;
    span {
      color: #6392fe;
    }
  }
}
.upload-div{
    min-height:134px;
}

.confirm-btn-step-div {
  margin-top: 159px;
}
.title-info{
  color:#999999;
  font-size:1.2rem;
  margin-bottom:5px;
}
</style>
<style lang="scss">
</style>
