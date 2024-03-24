<template>
  <div>
    <div class="container mx-auto mt-20 mb-5 p-10 lg:p-0">
      <h3 class="text-[30px] md:text-[35px] text-center font-['Poppins-Regular'] mb-[30px] md:mb-5 leading-[1.1]">join our conference</h3>
      <p class="text-center max-w-[600px] mx-auto text-md leading-6 font-['Poppins-Light']">
        nonumy eirmod tempor invidunt utLorem ipsum dolor sit amet, consetetur sadipscing elitr,
      </p>
      <button @click.prevent="$router.push('/join-now')" class="mx-auto flex items-center gap-[10px] mt-[40px] rounded-full px-5 p-[8px] bg-[#181544] text-[#fff]"><span>join now</span> <img class="w-[23px]" src="@/assets/imgs/arrow-btn.svg" alt=""> </button>
    </div>
  </div>

</template>
<script>
export default {
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>
