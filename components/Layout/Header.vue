<template>
  <div class="relative min-h-[70vh] bg-[url('@/assets/imgs/header.png')] bg-cover bg-no-repeat bg-left" >
    <Navbar @sidebarOpen="isSidebarOpened = true" :withoutHeader="false" class="relative z-[2]" />
    <Sidebar v-model="isSidebarOpened" />


    <div class="container mx-auto relative z-[2] grid" style="height: calc(70vh - 130px); min-height: 500px">
      <div class="flex flex-col lg:flex-row lg:justify-between items-center px-[40px] lg:px-[80px]">
        <div class="order-2 lg:order-1 mt-[50px] lg:mt-0">
          <h3 class="text-3xl text-center lg:text-left lg:text-4xl text-[#fff] mb-2">Hamza</h3>
          <p class="text-2xl text-center lg:text-left lg:text-3xl text-[#fff]">
            Software house solutions
          </p>
        </div>
        <div class="order-1 lg:order-2">
          <img class="w-full max-w-[500px]" src="@/assets/imgs/rocket.png" alt="">
        </div>
      </div>
    </div>
    <vue-particles :hoverEffect="false" class="absolute top-0 left-0 w-full h-full z-[1]" color="#dedede"></vue-particles>
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
  },
}
</script>
