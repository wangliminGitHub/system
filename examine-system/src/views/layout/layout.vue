<template>
  <div class="layout">
    <nav-com></nav-com>
    <header-com></header-com>
    <div class="content">
      <router-view></router-view>
    </div>
    <footer-com></footer-com>
  </div>
</template>
<script>
import footerCom from "@/components/layout/footer.vue";
import headerCom from "@/components/layout/header.vue";
import navCom from "@/components/layout/nav.vue";
export default {
  name: "layoutCom",
  components: {
    footerCom,
    headerCom,
    navCom
  }
};
</script>
