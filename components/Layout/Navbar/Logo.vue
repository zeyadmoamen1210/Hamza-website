<template>
  <div>
    <img :class="logoWidth" class="max-w-[110px] md:max-w-auto" src="@/assets/imgs/logo-lg.svg" alt="">
  </div>
</template>

<script>
export default {
  props: {
    logoWidth: {
      required: false,
      default: '110px'
    }
  }
}
</script>
