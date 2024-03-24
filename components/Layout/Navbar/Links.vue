<template>
  <div>
    <div class="hidden lg:block">
      <ul class="flex gap-[30px] text-[#fff]">
        <nuxt-link class="cursor-pointer after:content[' ']" exact-active-class="nav-link-active" tag="li" to="/">Home</nuxt-link>
        <nuxt-link class="cursor-pointer after:content[' ']" exact-active-class="nav-link-active" tag="li" to="/#services">Services</nuxt-link>
        <nuxt-link class="cursor-pointer after:content[' ']" exact-active-class="nav-link-active" tag="li" to="/#products">Products</nuxt-link>
        <nuxt-link class="cursor-pointer after:content[' ']" exact-active-class="nav-link-active" tag="li" to="/#team-work">Team Work</nuxt-link>
        <nuxt-link class="cursor-pointer after:content[' ']" exact-active-class="nav-link-active" tag="li" to="/#who-are-you">About Us</nuxt-link>
        <nuxt-link class="cursor-pointer after:content[' ']" exact-active-class="nav-link-active" tag="li" to="/careers">Careers</nuxt-link>
        <nuxt-link class="cursor-pointer after:content[' ']" exact-active-class="nav-link-active" tag="li" to="/contact">Contact</nuxt-link>
      </ul>
    </div>
    <div class="lg:hidden">
      <img @click="$emit('sidebarOpen', true)" src="@/assets/imgs/Icon feather-menu.svg" alt="">
    </div>


  </div>
</template>
<script>
export default {

}
</script>

<style lang="postcss">
.nav-link-active {
  @apply relative after:absolute after:bottom-[-6px] after:left-0 after:h-[3px] after:w-[100%] after:bg-[#fff];
}
</style>
