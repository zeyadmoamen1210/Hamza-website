<template>
  <div v-if="value" class="fixed top-0 left-0 w-full h-full bg-[#fff] z-[9999] overflow-hidden">
    <div class="relative z-[999]">
      <div class="flex gap-[10px] justify-between items-center p-[25px]">
        <h3 class="uppercase text-[#1b194f] text-[25px] font-['Poppins-Regular']">Hamza Solutions</h3>
        <button @click="$emit('input', false)" class="rounded-full w-[30px] h-[30px] leading-[32px] bg-[#1b194f]">
          <i class="text-[#fff] text-center font-bold text-[20px] el-icon-close"></i>
        </button>
      </div>

      <ul class="p-10">
        <li class="flex gap-[20px] items-center mb-5">
          <img src="@/assets/imgs/list-item-icon.svg" alt="">
          <span class="text-[#181544] text-[21px]">
              <nuxt-link @click.native="$emit('input', false)" to="/">Home</nuxt-link>
            </span>
        </li>

        <li class="flex gap-[20px] items-center mb-5">
          <img src="@/assets/imgs/list-item-icon.svg" alt="">
          <span class="text-[#181544] text-[21px]">
              <nuxt-link @click.native="$emit('input', false)" to="/#services">Services</nuxt-link>
            </span>
        </li>

        <li class="flex gap-[20px] items-center mb-5">
          <img src="@/assets/imgs/list-item-icon.svg" alt="">
          <span class="text-[#181544] text-[21px]">
              <nuxt-link @click.native="$emit('input', false)" to="/#products">Products</nuxt-link>
            </span>
        </li>

        <li class="flex gap-[20px] items-center mb-5">
          <img src="@/assets/imgs/list-item-icon.svg" alt="">
          <span class="text-[#181544] text-[21px]">
              <nuxt-link @click.native="$emit('input', false)" to="/#team-work">Team Work</nuxt-link>
            </span>
        </li>

        <li class="flex gap-[20px] items-center mb-5">
          <img src="@/assets/imgs/list-item-icon.svg" alt="">
          <span class="text-[#181544] text-[21px]">
              <nuxt-link @click.native="$emit('input', false)" to="/#who-are-you">About Us</nuxt-link>
          </span>
        </li>

        <li class="flex gap-[20px] items-center mb-5">
          <img src="@/assets/imgs/list-item-icon.svg" alt="">
          <span class="text-[#181544] text-[21px]">
              <nuxt-link @click.native="$emit('input', false)" to="/careers">Careers</nuxt-link>
          </span>
        </li>

        <li class="flex gap-[20px] items-center mb-5">
          <img src="@/assets/imgs/list-item-icon.svg" alt="">
          <span class="text-[#181544] text-[21px]">
              <nuxt-link @click.native="$emit('input', false)" to="/contact">Contact</nuxt-link>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      required: true,
      type: Boolean
    }
  },
}
</script>
