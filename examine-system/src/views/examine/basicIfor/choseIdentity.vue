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
      columns: ["在校学生", "社会人士"]
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
      getCardFront(formData).then(respnse => {
        console.log(respnse);
      });
    },
    upload2(file) {
      // 此时可以自行将文件上传至服务器
      this.uploadImgUrl2 = file.content;
      this.uploadShow2 = false;
      var formData = new FormData();
      formData.append("file_data", file.file);
      getCardBack(formData).then(respnse => {
        console.log(respnse);
      });
    },
    upload3(file) {
      // 此时可以自行将文件上传至服务器
      this.uploadImgUrl3 = file.content;
      this.uploadShow3 = false;
      var formData = new FormData();
      formData.append("file_data", file.file);
      uploadPersonalImg(formData).then(response=>{
        console.log(response)
      })
    },
    next() {
      var params = {
        examArea: this.addressValue,
        personalIdentity: this.identityValue,
        province: this.addressValue.split("/")[0],
        userEmail: this.email,
        userName: this.name,
        userPhone: this.phone
      };
      commitForm(params).then(response => {
        this.$router.push({
          path: "/workInfo"
        });
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
</style>
