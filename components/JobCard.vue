<template>
  <div class="flex flex-col md:flex-row flex-wrap gap-y-[30px] gap-[10] justify-between p-8 py-[25px] md:items-center shadow-medium rounded-3xl">
    <div>
      <h6 class="text-lg">Web Development</h6>
      <span class="text-md text-[#697CE8]">Web Development - angular</span>
    </div>
    <div>
      <h6 class="text-lg">working hours</h6>
      <span class="text-md">full time</span>
    </div>
    <div>
      <h6 class="text-lg">posted</h6>
      <span  class="text-md">2 month ago</span>
    </div>
    <div>
      <button class="rounded-full px-5 p-[8px] bg-[#181544] font-light text-[#fff]" @click.prevent="$router.push('/careers/1')">apply now</button>
    </div>
  </div>
</template>
<script setup>
</script>
