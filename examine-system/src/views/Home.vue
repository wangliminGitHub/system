<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <layout-com></layout-com>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue"
import layoutCom from './layout/layout'
export default {
  name: "home",
  components: {
    HelloWorld,
    layoutCom
  }
};
</script>
