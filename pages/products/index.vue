<template>
  <div>
    <OurProjects />
    <div class="bg-gradient-to-t from-[#f5f5f5] to-[#fff] mt-[100px]">
      <Footer />
    </div>
  </div>
</template>
<script>
import OurProjects from "~/components/LandingPage/OurProjects.vue";
import Footer from "~/components/LandingPage/Footer.vue";
export default {
  components: {
    OurProjects,
    Footer
  },
  head: {
    title: 'Hamza Solutions | products',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Hamza products page'
      }
    ],
  }
}
</script>
