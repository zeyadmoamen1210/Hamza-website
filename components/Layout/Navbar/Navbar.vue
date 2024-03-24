<template>
  <div>
    <div class="px-10" v-if="!withoutHeader">
      <div class="container mx-auto">
        <div class="flex justify-between items-center gap-[10px] pt-2 pb-[100px] lg:pb-[10px]">
          <div class="mt-[5px]">
            <NavLogo />
          </div>
          <div>
            <NavLinks @sidebarOpen="$emit('sidebarOpen', true)" />
          </div>
        </div>
      </div>
    </div>
    <div v-else class="bg-[#181544] rounded-br-3xl rounded-bl-3xl">
      <div class="container mx-auto px-10 py-[5px]">
        <div class="flex justify-between items-center gap-[10px] py-[10px]">
          <div>
            <NavLogo logoWidth="max-w-[90px]" />
          </div>
          <div>
            <NavLinks @sidebarOpen="$emit('sidebarOpen', true)" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavLinks from "~/components/Layout/Navbar/Links.vue";
import NavLogo from "~/components/Layout/Navbar/Logo.vue";
export default {
  components: {
    NavLinks,
    NavLogo
  },
  props: {
    withoutHeader: {
      required: false,
    }
  }
}
</script>
