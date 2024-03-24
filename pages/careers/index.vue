<template>
  <div class="">
    <div class="container relative mx-auto overflow-hidden mt-10">
      <img class="hidden lg:block absolute top-0 right-0 z-[-1] " src="@/assets/imgs/carrer-1.svg" alt="">
      <img class="block lg:hidden absolute top-0 left-[-150px] z-[-1] " src="@/assets/imgs/carrer-2.svg" alt="">

      <div class="p-10 pt-[50px] lg:pt-[100px] mt-10 pb-20">
        <div>
          <h5 class="hidden md:block mx-auto text-center uppercase text-2xl lg:text-3xl lg:max-w-[600px] leading-[1.4] text-[#181544]">
            we are here <br>
            to make an impact on people's life
          </h5>
          <h5 class="block md:hidden mx-auto text-center uppercase text-2xl lg:text-3xl lg:max-w-[600px] leading-[1.4] text-[#181544]">
            we are here
            to make an impact on people's life
          </h5>
          <p class="max-w-[700px] leading-[1.4] text-[#181544] mx-auto mt-[15px] text-center text-sm md:text-[19px]">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero          </p>
        </div>
      </div>
    </div>
    <div class="container relative mx-auto p-10 overflow-hidden">
      <img class="hidden lg:block absolute top-0 left-0 z-[-1]" src="@/assets/imgs/carrer-2.svg" alt="">
      <img class="block lg:hidden absolute top-0 right-[-150px] z-[-1]" src="@/assets/imgs/carrer-1.svg" alt="">
      <div class="mt-[100px] md:mt-[120px]">
        <h3 class="text-[#697CE8] text-[30px] mb-6">Job Listings</h3>

        <div v-for="(i) in 5" :key="i">
          <JobCard class="mb-[40px]" />
        </div>
      </div>
    </div>
    <div class="bg-gradient-to-t from-[#f5f5f5] to-[#fff] mt-[100px]">
      <Footer />
    </div>
  </div>
</template>
<script>
import Footer from "~/components/LandingPage/Footer.vue";
import JobCard from "~/components/JobCard.vue";
export default {
  components: {
    Footer,
    JobCard
  },
  head: {
    title: 'Hamza Solutions | careers',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Hamza careers page'
      }
    ],
  }
}
</script>
