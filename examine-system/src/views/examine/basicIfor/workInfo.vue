<template>
  <!-- 步骤2 工作信息 -->
  <div class="chose-identity">
    <van-steps :active="active">
      <van-step></van-step>
      <van-step></van-step>
      <van-step></van-step>
      <van-step></van-step>
    </van-steps>
    <div class="chose-identity-form work-step">
      <p class="work-title">工作经历请从最近一份开始填写(所有字段都为必填项)</p>
      <van-cell-group v-for="(item,index) in dataList" :key="index">
        <van-field v-model="item.workUnit" center clearable label="工作单位：" placeholder="请填写工作单位"></van-field>
        <van-field
          readonly
          :value="item.workingBefore"
          clickable
          label="开始工作时间："
          placeholder="请选择时间"
          @click="item.showTimeStart = true"
        />
        <van-field
          readonly
          :value="item.workingBehind"
          clickable
          label="结束工作时间："
          placeholder="请选择时间"
          @click="item.showTimeEnd= true"
        />
        <van-field
          v-model="item.vocationalType"
          center
          clearable
          label="职业类型："
          placeholder="请填写职业类型"
        ></van-field>
        <van-field v-model="item.unitArress" center clearable label="单位地址：" placeholder="请填写单位地址"></van-field>
        <van-field
          v-model="item.workCertifier"
          center
          clearable
          label="证    明    人："
          placeholder="请填写证明人"
        ></van-field>
        <!-- 选择工作时间 -->
        <van-popup v-model="item.showTimeStart" position="bottom">
          <van-datetime-picker
            @change="changeTimeStart(item,current)"
            v-model="current"
            type="year-month"
            @cancel="cancel(item)"
            @confirm="confirm(item)"
          />
        </van-popup>
        <van-popup v-model="item.showTimeEnd" position="bottom">
          <van-datetime-picker
            @change="changeTimeEnd(item,current)"
            v-model="current"
            type="year-month"
            @cancel="cancel(item)"
            @confirm="confirm(item)"
          />
        </van-popup>
        <div class="text-center delete-cell" v-if="index>0" @click="deleteWorkInfo(index)">
          <van-icon name="cross" />删除职业信息
        </div>
      </van-cell-group>
      <div class="add-cell text-center" @click="addWorkInfo()">
        <van-icon name="plus" />增加职业信息
      </div>
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
      current: new Date(),
      dataList: [
        {
          workUnit: "",
          workingBefore: "",
          workingBehind: "",
          vocationalType: "",
          unitArress: "",
          workCertifier: "",
          showTimeStart: false,
          showTimeEnd: false
        }
      ],
      showTime: false
    };
  },
  methods: {
    formatter(type, value) {
      if (type === "year") {
        return `${value}年`;
      } else if (type === "month") {
        return `${value}月`;
      }
      return value;
    },
    cancel(item) {
      item.showTimeStart = false;
      item.showTimeEnd = false;
    },
    confirm(item) {
      item.showTimeStart = false;
      item.showTimeEnd = false;
    },
    changeTimeStart(e, current) {
      let year = current.getFullYear();
      let month = current.getMonth() + 1;
      e.workingBefore = year + "-" + month;
    },
    changeTimeEnd(e, current) {
      let year = current.getFullYear();
      let month = current.getMonth() + 1;
      e.workingBehind = year + "-" + month;
    },
    // 添加工作信息
    addWorkInfo() {
      this.dataList.push({
        workUnit: "",
        workingBefore: "",
        workingBehind: "",
        vocationalType: "",
        unitArress: "",
        workCertifier: "",
        showTimeStart: false,
        showTimeEnd: false
      });
    },
    deleteWorkInfo(index) {
      this.dataList.splice(index, 1);
    },
    next() {
      let judgeTimeIndex = 0,
        judgeTime = false;

      let judgeCommit = true;
      // 判断所有字段全不为空
      this.dataList.forEach(res => {
        for (let key in res) {
          if (
            key != "showTimeStart" &&
            key != "showTimeEnd" &&
            res[key] == ""
          ) {
            this.$toast("必填项不能为空");
            judgeCommit = false;
            return false;
          }
        }
      });

      if (!judgeCommit) {
        return false;
      }
      // 判断工作经历  开始时间不能大于结束时间
      this.dataList.forEach((res, index) => {
        let startTime = new Date(res.workingBefore).getTime();
        let endTime = new Date(res.workingBehind).getTime();
        if (startTime > endTime) {
          judgeTimeIndex = index;
          judgeTime = true;
          return false;
        }
      });
      if (judgeTime) {
        this.$toast(
          第 +
            judgeTimeIndex +
            1 +
            "份工作经历，工作开始时间不能大于工作结束时间"
        );
      }

      let params = this.dataList;
      commitWork(params).then(response => {
        if (response.data.status == 0) {
          this.$router.push({
            path: "/studentInfo"
          });
        }else{
            this.$toast(response.data.msg);
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
.work-title {
  color: #999999;
  font-size: 1.2rem;
  // margin-bottom:10px;
  margin-top: 10px;
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
.delete-cell {
  color: #575757;
  font-size: 1.6rem;
  padding: 12px 0;
  i {
    vertical-align: -2px;
  }
}
.van-cell-group {
  margin-top: 10px;
}
.confirm-btn-step-div{
  margin-bottom:60px;
}
</style>
<style lang="scss">
.chose-identity .work-step .van-field__label {
  width: 110px;
}
</style>
