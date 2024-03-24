<template>
  <div>
    <Navbar @sidebarOpen="isSidebarOpened = true"  :withoutHeader="$route.path !== '/'" v-if="$route.path !== '/'" />
    <Sidebar v-model="isSidebarOpened" />
    <nuxt/>
  </div>
</template>
<script>
import Navbar from "~/components/Layout/Navbar/Navbar.vue";
import Sidebar from "~/components/Layout/Navbar/Sidebar.vue";
export default {
  components: {
    Sidebar,
    Navbar
  },
  data() {
    return {
      isSidebarOpened: false,
    }
  }
}
</script>


<style>
html {
  scroll-behavior: smooth;
}
</style>

