  <template>
  <div class="personal-center">
    <div class="personal-top">
      <van-row>
        <van-col span="4">
          <img class="head-img" src="../../assets/img/appImg/head-img.png" alt />
        </van-col>
        <van-col span="20">
          <div class="personal-top-text">
            <span>辛成武</span>
            <img class="float-right" src="../../assets/img/appImg/pen.png" alt />
          </div>
        </van-col>
      </van-row>
    </div>
    <div class="personal-content">
      <p class="title">我的考试</p>
      <div class="personal-div">
        <!--  -->
        <div class="personal-cell">
          <van-row>
            <van-col span="5">
              <img class="personal-cell-img" src="../../assets/img/appImg/20.png" alt />
            </van-col>
            <van-col span="19">
              <p class="cell-title">健康管理师</p>
              <p class="cell-text">
                状态：
                <span>等待考试</span>
              </p>
            </van-col>
          </van-row>
        </div>
        <!-- <div class="personal-cell personal-cell-not-through">
          <van-row>
            <van-col span="5">
              <img class="personal-cell-img" src="../../assets/img/appImg/20.png" alt />
            </van-col>
            <van-col span="19">
              <p class="cell-title">健康管理师</p>
              <div class="cell-text clearfix">
                <div class="float-left">
                  <p>
                    状态：
                    <span class="red">未通过审核</span>
                  </p>
                  <p>
                    原因：
                    <span class="red">信息录入错误</span>
                  </p>
                </div>
                <span class="float-right update-btn" @click="update()">修改</span>
              </div>

              <p></p>
            </van-col>
          </van-row>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
// import footerCom from "@/components/layout/footer.vue";
export default {
  name: "personalCenter",
  components: {},
  data(){
    return {

    }
  },
  methods:{
    update(){
        this.$router.push({
        path: "/chooseIndentity"
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.personal-top {
  background: url("../../assets/img/appImg/person-top.png") 0px 0px no-repeat;
  background-size: 100%;
  color: #fff;
  padding: 20px 21px 20px 34px;
  font-size: 1.6rem;
}
.personal-top-text {
  text-align: left;
  padding-top: 22px;
  padding-left: 33px;
  span {
    display: inline-block;
    vertical-align: middle;
  }
  img {
    width: 21px;
    display: inline-block;
    vertical-align: middle;
  }
}
.head-img {
  width: 66px;
  height: 66px;
  border-radius: 100%;
  object-fit: cover;
}
.personal-content {
  margin-top: 7px;
  background: #fff;
  .title {
    color: #333333;
    font-size: 1.6rem;
    padding: 15px 16px 10px 16px;
  }
  .personal-cell {
    padding: 15px;
    padding-top: 0;
    & > div {
      padding-top: 15px;
      border-top: 1px solid #f2f5fd;
    }
    .cell-title {
      color: #6392fe;
      font-size: 1.6rem;
      margin-top: 5px;
      font-weight:600;
    }
    .cell-text {
      color: #999999;
      font-size: 1.4rem;
      margin-top: 6px;
      font-weight:400;
    }
  }
  .personal-cell-not-through{
      .red{
          color:#FF0000;
      }
      .cell-title{
          margin-top:0px;
      }
      .cell-text{
          margin-top:8px;
          line-height:14px;
          p:nth-child(2){
              margin-top:5px;
          }
      }
      .update-btn{
          color:#fff;
          font-weight:400;
          display: inline-block;
          padding:9px 21px;
          border-radius:30px;
          background:linear-gradient(0deg,rgba(69,125,252,1) 0%,rgba(99,146,254,1) 100%);
      }
  }
}
.personal-cell {
  .personal-cell-img {
    width: 63px;
    height: 63px;
    border-radius: 5px;
    object-fit: cover;
  }
}
</style>
