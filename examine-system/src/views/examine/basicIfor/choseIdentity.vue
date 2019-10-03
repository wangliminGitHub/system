<template>
  <!-- 步骤1 基本信息-->
  <div class="chose-identity">
    <van-steps :active="active">
      <van-step></van-step>
      <van-step></van-step>
      <van-step></van-step>
      <van-step></van-step>
    </van-steps>
    <div class="chose-identity-form">
      <van-cell-group>
        <van-field v-model="name" center clearable label="姓名：" placeholder="请输入姓名"></van-field>
        <van-field v-model="phone" center clearable label="联系方式：" placeholder="请输入电话号码"></van-field>
        <van-field v-model="email" center clearable label="常用邮箱：" placeholder="请输入邮箱"></van-field>
        <van-field
          readonly
          clickable
          label="本人身份："
          :value="identityValue"
          placeholder="请选择"
          right-icon="arrow"
          @click="showPicker = true"
        />
        <van-field
          readonly
          clickable
          label="报考地区："
          :value="addressValue"
          right-icon="arrow"
          placeholder="选择地区"
          @click="showAddress = true"
        />
      </van-cell-group>
      <!-- 选择身份 -->
      <van-popup v-model="showPicker" position="bottom">
        <van-picker
          show-toolbar
          :columns="columns"
          @cancel="showPicker = false"
          @confirm="onConfirm"
        />
      </van-popup>
      <!-- 选择地址 -->
      <van-popup v-model="showAddress" position="bottom">
        <van-area
          :area-list="areaList"
          @confirm="confirm"
          @cancel="showAddress = false"
          :columns-num="2"
        />
      </van-popup>
    </div>
    <div class="chose-identity-upload">
      <div class="flex-div">
        <van-uploader :after-read="upload1">
          <div class="upload-img-style" v-if="uploadShow1">
            <img class="bg-img" src="@/assets/img/appImg/16.png" alt />
            <p>身份证人像面</p>
          </div>
          <div class="upload-complete relative" v-else>
            <img :src="uploadImgUrl1" alt />
            <div class="upload-complete-text">重新上传</div>
          </div>
        </van-uploader>
        <van-uploader :after-read="upload2">
          <div class="upload-img-style" v-if="uploadShow2">
            <img class="bg-img" src="@/assets/img/appImg/16.png" alt />
            <p>身份证国徽面</p>
          </div>
          <div class="upload-complete relative" v-else>
            <img :src="uploadImgUrl2" alt />
            <div class="upload-complete-text">重新上传</div>
          </div>
        </van-uploader>
        <van-uploader :after-read="upload3">
          <div class="upload-img-style" v-if="uploadShow3">
            <img class="bg-img" src="@/assets/img/appImg/16.png" alt />
            <p>本人近期电子照</p>
          </div>
          <div class="upload-complete relative" v-else>
            <img :src="uploadImgUrl3" alt />
            <div class="upload-complete-text">重新上传</div>
          </div>
        </van-uploader>
      </div>
      <p class="attention">*注：个人照片要求为两寸白底近期本人电子照</p>
    </div>
    <div class="confirm-btn-step-div">
      <p class="confirm-btn-step" @click="next()">下一步</p>
    </div>
    <div class="modal-div-van">
      <van-overlay :show="showLoading" z-index="2">
        <van-loading size="36px" color="#fff" vertical>上传比对中...</van-loading>
      </van-overlay>
    </div>
  </div>
</template>
<script>
import addressInfo from "@/assets/common/area";
import {
  commitForm,
  getCardBack,
  getCardFront,
  judge,
  uploadPersonalImg
} from "@/api/form/index.js";

export default {
  name: "choseIdentity",
  data() {
    return {
      active: 0,
      name: "",
      phone: "",
      email: "",
      identityValue: "",
      addressValue: "",
      showPicker: false,
      showAddress: false,
      uploadShow1: true,
      uploadShow2: true,
      uploadShow3: true,
      uploadImgUrl1: "https://img.yzcdn.cn/vant/cat.jpeg",
      uploadImgUrl2: "https://img.yzcdn.cn/vant/cat.jpeg",
      uploadImgUrl3: "https://img.yzcdn.cn/vant/cat.jpeg",
      areaList: addressInfo,
      columns: ["在校学生", "社会人士"],
      judgeFile1: false,
      judgeFile2: false,
      judgeFile3: false,
      showLoading: false
    };
  },
  created() {
    judge().then(response => {
      console.log(response);
    });
  },
  methods: {
    onConfirm(value) {
      this.identityValue = value;
      this.showPicker = false;
    },
    confirm(value) {
      this.addressValue = value[0].name + "/" + value[1].name;
      this.showAddress = false;
    },
    upload1(file) {
      // 此时可以自行将文件上传至服务器
      this.uploadImgUrl1 = file.content;
      this.uploadShow1 = false;
      var formData = new FormData();
      formData.append("file_data", file.file);
      this.showLoading = true;
      getCardFront(formData).then(response => {
        this.showLoading = false;
        if (response.data.status == 0) {
          this.judgeFile1 = true;
          this.$toast("上传成功！");
        } else {
          this.judgeFile1 = false;
          this.$toast(response.data.msg);
        }
      });
    },
    upload2(file) {
      // 此时可以自行将文件上传至服务器
      this.uploadImgUrl2 = file.content;
      this.uploadShow2 = false;
      var formData = new FormData();
      this.showLoading = true;

      formData.append("file_data", file.file);
      getCardBack(formData).then(response => {
        this.showLoading = false;
        if (response.data.status == 0) {
          this.judgeFile2 = true;
          this.$toast("上传成功！");
        } else {
          this.judgeFile2 = false;
          this.$toast(response.data.msg);
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
      uploadPersonalImg(formData).then(response => {
        if (response.data.status == 0) {
          this.judgeFile3 = true;
          this.$toast("上传成功！");
        }
      });
    },
    next() {
      if (this.name == "") {
        this.$toast("姓名不能为空！");
        return false;
      }
      if (this.phone == "") {
        this.$toast("联系方式不能为空！");
        return false;
      }
      if (this.phone.length != 11) {
        this.$toast("请输入正确的联系方式！");
        return false;
      }
      if (this.email == "") {
        this.$toast("邮箱不能为空！");
        return false;
      }
      var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
      if (!myreg.test(this.email)) {
        this.$toast("请输入正确的邮箱！");
        return false;
      }
      if (this.identityValue == "") {
        this.$toast("本人身份不能为空！");
        return false;
      }
      if (this.addressValue == "") {
        this.$toast("报考地区不能为空！");
        return false;
      }
      if (!this.judgeFile1) {
        this.$toast("身份证人像面必须上传！");
        return false;
      }
      if (!this.judgeFile2) {
        this.$toast("身份证国徽面必须上传！");
        return false;
      }
      if (!this.judgeFile3) {
        this.$toast("本人近期电子照必须上传！");
        return false;
      }

      var params = {
        examArea: this.addressValue,
        personalIdentity: this.identityValue,
        province: this.addressValue.split("/")[0],
        userEmail: this.email,
        userName: this.name,
        userPhone: this.phone
      };
      commitForm(params).then(response => {
        if (response.data.status != 0) {
          this.$toast(response.data.msg);
        } else {
          this.$router.push({
            path: "/workInfo"
          });
        }
      });
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
</style>
<style lang="scss">
.modal-div-van {
  .van-loading {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
