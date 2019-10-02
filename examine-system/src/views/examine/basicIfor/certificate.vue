<template>
  <!-- 步骤4 证明材料 -->
  <div class="chose-identity">
    <van-steps :active="active">
      <van-step></van-step>
      <van-step></van-step>
      <van-step></van-step>
      <van-step></van-step>
    </van-steps>
    <!-- 范本 -->
    <div class="student-data">
      <div class="certificate-cell">
        <van-row>
          <van-col span="8">
            <div class="upload-div">
              <van-uploader :after-read="upload1">
                <div class="upload-img-style" v-if="uploadShow1">
                  <img class="bg-img" src="@/assets/img/appImg/16.png" alt />
                  <p>个人申请表</p>
                </div>
                <div class="upload-complete relative" v-else>
                  <img :src="uploadImgUrl1" alt />
                  <div class="upload-complete-text">重新上传</div>
                </div>
              </van-uploader>
            </div>
          </van-col>
          <van-col span="16">
            <div class="upload-div-text">
              <p>
                个人申请表
                <span>需单位盖章，个人签字</span>
              </p>
              <p>
                <!-- <a href="" download="" target="_blank">下载</a> -->
                <span @click="downloadApplication">下载</span>
              </p>
              <p>
                <span @click="show1=true">查看范本</span>
              </p>
              <van-image-preview v-model="show1" :images="images1" @change="onChange1">
                <template></template>
              </van-image-preview>
            </div>
          </van-col>
        </van-row>
      </div>
      <div class="certificate-cell">
        <van-row>
          <van-col span="8">
            <div class="upload-div">
              <van-uploader :after-read="upload2">
                <div class="upload-img-style" v-if="uploadShow2">
                  <img class="bg-img" src="@/assets/img/appImg/16.png" alt />
                  <p>个人承诺书</p>
                </div>
                <div class="upload-complete relative" v-else>
                  <img :src="uploadImgUrl2" alt />
                  <div class="upload-complete-text">重新上传</div>
                </div>
              </van-uploader>
            </div>
          </van-col>
          <van-col span="16">
            <div class="upload-div-text">
              <p>
                个人承诺书
                <span>需个人签字</span>
              </p>
              <p>
                <!-- <a :href="bookUrl" download target="_blank">下载</a> -->
                <span @click="downloadBook">下载</span>
              </p>
              <p>
                <span @click="show2=true">查看范本</span>
              </p>
              <van-image-preview v-model="show2" :images="images2" @change="onChange2">
                <template></template>
              </van-image-preview>
            </div>
          </van-col>
        </van-row>
      </div>
      <div class="certificate-cell">
        <van-row>
          <van-col span="8">
            <div class="upload-div">
              <van-uploader :after-read="upload3">
                <div class="upload-img-style" v-if="uploadShow3">
                  <img class="bg-img" src="@/assets/img/appImg/16.png" alt />
                  <p>工作证明</p>
                </div>
                <div class="upload-complete relative" v-else>
                  <img :src="uploadImgUrl3" alt />
                  <div class="upload-complete-text">重新上传</div>
                </div>
              </van-uploader>
            </div>
          </van-col>
          <van-col span="16">
            <div class="upload-div-text">
              <p>
                工作证明
                <span>需单位盖章</span>
              </p>
              <p>
                <span @click="downloadWork">下载</span>
              </p>
              <p>
                <span @click="show3=true">查看范本</span>
              </p>
              <van-image-preview v-model="show3" :images="images3" @change="onChange3">
                <template></template>
              </van-image-preview>
            </div>
          </van-col>
        </van-row>
      </div>
    </div>

    <div class="confirm-btn-step-div">
      <p class="confirm-btn-step" @click="submit()">已完成，去缴费</p>
    </div>
  </div>
</template>
<script>
import {
  appform,
  commitment,
  employment,
  downLoadCommitment,
  downLoadSqb,
  dowmLoadGz
} from "@/api/form/index";
export default {
  name: "",
  data() {
    return {
      active: 3,
      name: "",
      phone: "",
      email: "",
      uploadShow1: true,
      uploadShow2: true,
      uploadShow3: true,
      uploadImgUrl1: "https://img.yzcdn.cn/vant/cat.jpeg",
      uploadImgUrl2: "https://img.yzcdn.cn/vant/cat.jpeg",
      uploadImgUrl3: "https://img.yzcdn.cn/vant/cat.jpeg",
      show1: false,
      images1: ["http://bookexaln.jiankangpeini.com/sqb72zz.png"],
      show2: false,
      images2: ["http://bookexaln.jiankangpeini.com/cns72zz.png"],
      show3: false,
      images3: ["http://bookexaln.jiankangpeini.com/gzzm7fzz.png"],
      imgData: "",
      bookUrl: "",
      judgeFile1: false,
      judgeFile2: false,
      judgeFile3: false
    };
  },
  created() {
    // this.downloadBook()
  },
  methods: {
    upload1(file) {
      // 此时可以自行将文件上传至服务器
      this.uploadImgUrl1 = file.content;
      this.uploadShow1 = false;
      var formData = new FormData();
      this.$toast.loading({
        mask: true,
        message: "上传中..."
      });
      formData.append("file_data", file.file);
      appform(formData).then(response => {
        if (response.data.status == 0) {
          this.judgeFile1 = true;
          this.$toast("上传成功！");
        }
      });
    },
    upload2(file) {
      // 此时可以自行将文件上传至服务器
      this.uploadImgUrl2 = file.content;
      this.uploadShow2 = false;
      var formData = new FormData();
      this.$toast.loading({
        mask: true,
        message: "上传中..."
      });
      formData.append("file_data", file.file);
      commitment(formData).then(response => {
        if (response.data.status == 0) {
          this.judgeFile2 = true;
          this.$toast("上传成功！");
        }
      });
    },
    upload3(file) {
      // 此时可以自行将文件上传至服务器
      this.uploadImgUrl3 = file.content;
      this.uploadShow3 = false;
      var formData = new FormData();
      this.$toast.loading({
        mask: true,
        message: "上传中..."
      });
      formData.append("file_data", file.file);
      employment(formData).then(response => {
        if (response.data.status == 0) {
          this.judgeFile3 = true;
          this.$toast("上传成功！");
        }
      });
    },
    submit() {
      if (!this.judgeFile1) {
        this.$toast("个人申请表必须上传！");
        return false;
      }
      if (!this.judgeFile2) {
        this.$toast("个人承诺书必须上传！");
        return false;
      }
      if (!this.judgeFile3) {
        this.$toast("工作证明必须上传！");
        return false;
      }
      // 目前没有这步的提交接口 暂时不写 直接跳转路径
      this.$router.push({
        path: "/signUpSuccess"
      });
    },
    downloadBook() {
      let self = this;
      downLoadCommitment().then(res => {
        if (res.data.status === 0) {
          let url = res.data.data;
          self.bookUrl = res.data.data;
          self.createA(url);
        }
      });
    },
    createA(url) {
      let aId = document.getElementById("down");
      let link = document.createElement("a");
      link.id = "down";
      link.style.display = "none";
      link.href = url;
      link.setAttribute("download", "个人申请表");
      link.click();
    },
    downloadApplication() {
      let self = this;
      downLoadSqb().then(res => {
        if (res.data.status === 0) {
          let url = res.data.data;
          self.bookUrl = res.data.data;
          self.createA(url);
        }
      });
    },
    downloadWork() {
      let self = this;
      dowmLoadGz().then(res => {
        if (res.data.status === 0) {
          let url = res.data.data;
          self.bookUrl = res.data.data;
          self.createA(url);
        }
      });
    },
    onChange1(value) {},
    onChange2(value) {},
    onChange3(value) {}
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
.certificate-cell {
  margin-bottom: 10px;
}
.upload-div-text {
  font-size: 1.4rem;
  color: #6392fe;
  font-weight: 400;
  padding-left: 8px;
  a {
    color: #6392fe;
  }
  p:nth-child(1) {
    color: #333333;
    margin-top: 14px;
    span {
      color: #999999;
      font-size: 1rem;
      margin-left: 5px;
    }
  }
  p:nth-child(2) {
    margin-top: 18px;
  }
  p:nth-child(3) {
    margin-top: 7px;
  }
}
</style>
<style lang="scss">
</style>
