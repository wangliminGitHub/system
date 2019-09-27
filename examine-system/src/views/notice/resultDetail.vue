<template>
  <div class="notice-detail">
    <!-- 报名成功 -->
    <div class="notice-result-content">
      <div class="cell-title">
        报名结果通知
        <span>9月6日 19:45</span>
      </div>
      <div class="cell-content text-center">
        <p class="cell-text">辛橙武，您所选择的“健康管理师”专业报考成功！  </p>
        <div class="cell-info">
          <p>考试时间为：2019年11月20日09:00</p>
          <p>考试地点：陕西省西安市雁塔区xxx学校6号楼</p>
          <p>座位号：09</p>
        </div>
      </div>
    </div>
    <!-- 报名失败 -->
    <!-- <div class="notice-result-content">
      <div class="cell-title">
        报名结果通知
        <span>9月6日 19:45</span>
      </div>
      <div class="cell-content text-center">
        <p class="cell-text">辛橙武，您所选择的“健康管理师”专业报考失败！  </p>
        <div class="cell-info">
          <p>原因： </p>
          <p>信息填写不完整</p>
        </div>
        <div class="update-div">
            <span class="update-btn">去修改</span>
        </div>
      </div>
    </div> -->
    <!-- 考试结果通知 -->
    <!-- <div class="notice-result-content">
      <div class="cell-title">
        考试结果通知
        <span>9月6日 19:45</span>
      </div>
      <div class="cell-content text-center">
        <p class="cell-text">辛橙武，您所选择的“健康管理师”专业成绩已出<br />您的分数如下：</p>
        <div class="cell-info">
          <table>
              <tr>
                  <td>理论考试：</td>
                  <td>86分</td>
              </tr>
               <tr>
                  <td>操作技能考试：</td>
                  <td>90分</td>
              </tr>
          </table>
        </div>
        <p class="cell-notice">恭喜您通过考试！</p>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "noticeResult"
};
</script>
<style lang="scss" scoped>
.notice-detail {
  background: #fff;
  min-height: 100vh;
}
.notice-detail {
  padding: 29px 15px 0px 15px;
  .cell-title {
    color: #6392fe;
    font-size: 1.6rem;
    font-weight: bold;
    text-align: center;
    position: relative;
    span {
      color: #666666;
      font-size: 1rem;
      font-weight: 400;
      margin-top: 4px;
      position: absolute;
      right: 0;
      top: 0;
    }
  }
  .cell-text {
    margin-top: 30px;
    margin-bottom:25px;
    font-weight: 400;
    font-size: 1.2rem;
    color: #666666;
    line-height: 20px;
  }
  .cell-info{
      font-size:1.4rem;
      font-weight:bold;
      line-height:2rem;
      table{
          width:50%;
          margin:auto;
          td:nth-child(1){
              text-align:left;
          }
      }
  }
}
.update-btn{
    display: inline-block;
    padding:10px 30px;
    margin-top:75px;
    color:#fff;
    font-size:1.6rem;
    background:linear-gradient(0deg,rgba(69,125,252,1) 0%,rgba(99,146,254,1) 100%);
    border-radius:30px;
}
.cell-notice{
    font-size:1.4rem;
    margin-top:35px;
}

</style>