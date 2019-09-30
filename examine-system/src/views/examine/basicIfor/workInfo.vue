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
        <van-field v-model="unit" center clearable label="工作单位：" placeholder="请填写工作单位"></van-field>
        <van-field
          readonly
          clickable
          label="工作时间："
          :value="timeBefore"
          placeholder="请选择工作时间"
          @click="showTime = true"
        />
        <van-field v-model="type" center clearable label="职业类型：" placeholder="请填写职业类型"></van-field>
        <van-field v-model="address" center clearable label="单位地址：" placeholder="请填写单位地址"></van-field>
        <van-field v-model="people" center clearable label="证    明    人：" placeholder="请填写证明人"></van-field>
      </van-cell-group>
      <!-- <div class="add-cell text-center" @click="addWorkInfo()">
          <van-icon name="plus" />
          增加职业信息
      </div> -->
      <!-- 选择工作时间 -->
      <van-datetime-picker v-if="showTime"
          @change="changeTime"
        v-model="currentDate"
        type="year-month"
       
        @cancel="cancel"
        @confirm="confirm"
      />
    </div>

    <div class="confirm-btn-step-div">
      <p class="confirm-btn-step" @click="next()">下一步</p>
    </div>
  </div>
</template>
<script>
import addressInfo from "@/assets/common/area";
import { commitWork } from "@/api/form/index.js";

export default {
  name: "studentInfo",
  data() {
    return {
      active: 1,
      unit: "",
      timeBefore: "",
      timeAfter: "",
      type: "",
      address: "",
      people: "",
      showTime:false,
      currentDate:""
    };
  },
  methods: {
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`
      }
      return value;
    },
    cancel(){
      this.showTime=false;
    },
    confirm(value){
      this.showTime=false;
    },
    changeTime(e){
      this.timeBefore=e.getValues().join('-');
    },
    // 添加工作信息
    addWorkInfo(){
      
    },
    next() {
      let params = [
        {
          workUnit: this.unit,
          workingBefore: this.timeBefore,
          workingBehind: this.timeBefore,
          vocationalType: this.type,
          unitArress: this.address,
          workCertifier: this.people
        }
      ];
      commitWork(params).then(response => {
        console.log(response);
      });
      this.$router.push({
        path: "/studentInfo"
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
.work-title {
  color: #999999;
  font-size: 1.2rem;
  // margin-bottom:10px;
  margin: 10px 0;
}
.add-cell {
  background: #fff;
  color: #575757;
  font-size: 1.6rem;
  padding: 18.5px 0;
  margin-top: 15px;
  i {
    vertical-align: -2px;
  }
}
</style>
<style lang="scss">
</style>
