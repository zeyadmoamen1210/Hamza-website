<template>
  <div class="min-h-[400px] mt-[80px] lg:mt-0">
    <div class="relative container mx-auto overflow-hidden">
      <img class="hidden lg:block absolute bottom-0 right-0 z-[-1] " src="@/assets/imgs/our-plans-bg-2.svg" alt="">
      <img class="hidden lg:block absolute top-0 left-0 z-[-1]" src="@/assets/imgs/our-plans-bg.svg" alt="">

      <img class="lg:hidden absolute top-0 left-[-73px] z-[-1]" src="@/assets/imgs/mobile-rec.svg" alt="">
      <img class="lg:hidden absolute top-0 right-[-320px] z-[-1]" src="@/assets/imgs/mobile-rec.svg" alt="">

      <div class="relative z-[1] p-10 px-10 lg:px-24">
        <span class="text-xl block mb-4 font-['Poppins-Regular']">OUR Plans</span>
        <h2 class="text-[25px] lg:text-[50px] font-['Poppins-Regular'] uppercase my-[20px] lg:my-0 leading-[1.1] mb-[80px] lg:mb-[20px]">
          <span class="block">what is next in</span>
          <span> hamza house solutions</span>
        </h2>
        <p class="max-w-[550px] text-md leading-6 font-['Poppins-Light'] mb-[50px] lg:mb-0">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut..
        </p>
        <button @click="$router.push('/our-plans')" class="flex items-center gap-[10px] mt-[20px] rounded-full px-5 p-[8px] bg-[#181544] text-[#fff]"><span>explore now</span> <img class="w-[23px]" src="@/assets/imgs/arrow-btn.svg" alt=""> </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
