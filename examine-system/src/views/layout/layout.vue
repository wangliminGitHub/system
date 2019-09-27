<template>
  <div class="layout">
    <div class="content">
      <router-view></router-view>
    </div>
    <footer-com></footer-com>
  </div>
</template>
<script>
import footerCom from "@/components/layout/footer.vue";
export default {
  name: "layoutCom",
  components: {
    footerCom
  }
};
</script>
<style lang="scss" scoped>
  .layout {
    height: 100%;
    .content {
      height: 100%;
    }
  }
</style>