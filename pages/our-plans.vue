<template>
  <div>
    <div class="container relative mx-auto overflow-hidden p-10 pt-[100px] mt-5 md:mt-10 pb-5">
      <img class="hidden lg:block absolute top-0 right-0 z-[-1] " src="@/assets/imgs/carrer-1.svg" alt="">
      <img class="block lg:hidden absolute top-[10px] left-0 z-[-1] " src="@/assets/imgs/shadow-top.svg" alt="">

      <div class="p-0 mt-0 pb-5">
        <div>
          <h5 class="mx-auto text-center uppercase text-xl md:text-3xl max-w-[600px] leading-[1.4] text-[#181544]">
            what is next
            <br>
            in hamza house solutions
          </h5>
          <p class="max-w-[700px] leading-[1.4] text-[#181544] mx-auto mt-[15px] text-center text-sm md:text-[19px]">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
          </p>
        </div>
      </div>
    </div>
    <div class="container relative mx-auto p-4 lg:px-28">
      <img class="hidden lg:block absolute top-0 left-0 z-[-1]" src="@/assets/imgs/carrer-2.svg" alt="">
      <img class="block lg:hidden absolute top-0 right-0 z-[-1] " src="@/assets/imgs/shadow-bottom.svg" alt="">

      <div class="mt-[120px] md:mt-[170px]">
        <div class="mx-auto md:px-5 md:p-0">

          <div class="relative w-full mx-auto rounded-2xl overflow-hidden mb-6">
            <img class="block mx-auto h-[250px] md:h-full md:w-full object-cover object-left" src="@/assets/imgs/video-bg.png" alt="">
            <span class="absolute top-0 left-0 w-full h-full content-[''] bg-[rgba(0,0,0,0.29)]"></span>
            <div class="cursor-pointer absolute top-[50%] left-[50%] w-[40px] h-[40px] md:w-[100px] md:h-[100px]" style="transform: translate(-50%,-50%)">
              <img src="@/assets/imgs/video-play-icon.svg" alt="">
            </div>
          </div>
          <p class="leading-[1.4] text-[#181544] mx-auto mt-[15px] text-[17px] md:text-[19px]">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
          </p>
        </div>
      </div>
    </div>
    <div class="container mx-auto p-4 lg:px-28">
      <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-[50px] mt-[30px] lg:mt-[100px] px-4">
        <div class="mb-[50px] lg:mb-0 lg:mt-[100px] order-2 lg:order-1">
          <h2 class="text-2xl lg:text-3xl max-w-[300px]">Lorem ipsum dolor sit amet</h2>
          <p class="mt-4 text-xl leading-9">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut..nt utLorem ipsum
          </p>
        </div>
        <div class="mb-[30px] lg:mb-0 order-1 lg:order-2">
          <img class="block mx-auto" src="@/assets/imgs/charts-1.png" alt="">
        </div>
      </div>




      <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-[50px] lg:mt-[100px] px-4">
        <div class="mb-[30px] lg:mb-0">
          <img class="block mx-auto" src="@/assets/imgs/charts-2.png" alt="">
        </div>
        <div class="lg:mt-[90px] mb-[30px] lg:mb-0">
          <h2 class="text-2xl lg:text-3xl max-w-[300px]">Lorem ipsum dolor sit amet</h2>
          <p class="mt-4 text-xl leading-9" >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut..nt utLorem ipsum
          </p>
        </div>
      </div>

      <p class="mt-4 text-xl leading-9 lg:mb-[100px] mb-[40px] px-4">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut..nt utLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut..nt utLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
      </p>

      <p class="hidden lg:block mt-4 text-xl leading-9 px-4">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut..nt utLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut..nt utLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
      </p>

    </div>
    <div class="bg-gradient-to-t from-[#f5f5f5] to-[#fff] mt-[100px]">
      <Footer />
    </div>


  </div>
</template>

<script>
import Footer from "~/components/LandingPage/Footer.vue";

export default {
  components: {Footer},
  head: {
    title: 'Hamza Solutions | our plans',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'our plans page'
      }
    ],
  }
}
</script>
