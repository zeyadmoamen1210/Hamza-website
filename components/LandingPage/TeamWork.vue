<template>
  <div class="container mx-auto lg:p-10 lg:py-20 lg:pb-[132px]">
    <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-[50px] px-10 lg:px-16 justify-between lg:items-center">
        <div class="mt-[30px] lg:mt-[60px] order-2 lg:order-1 mb-[70px] lg:mb-0">
            <h2 class="text-[45px] lg:text-[50px] font-['Poppins-Regular']  mb-3 leading-[1.1]"><span class="max-w-[250px] block">Hamza</span> <span> Team Work </span></h2>
            <p class="max-w-[500px] text-mg leading-7 font-['Poppins-Light']">
              Each one of us fulfills a piece of a larger puzzle and we Believe that every day is sort of a jigsaw puzzle,So we complete each other and have to make sure that we're putting each piece in the right place to Be Hamza,so Hamza Compelets the technologies Community in our society
            </p>
            <img class="hidden lg:block m-[-20px_auto] rotate-90" src="@/assets/imgs/XMLID_1455_.svg" alt="">
        </div>
        <div class="order-1 lg:order-2 mt-[70px] lg:mt-0 mb-[10px] lg:mb-0">
            <client-only>
              <!-- Swiper component -->
              <swiper
                ref="swiperComponentRef"
                :options="swiperOptions"
                class="pb-[20px]"
              >

                <swiper-slide>
                  <div>
                    <div class="relative lg:p-[0_40px] max-w-[500px] lg:max-w-[400px] mx-auto">
                      <img class="w-full object-fit" src="@/assets/imgs/user.jpg" alt="">
                      <div class="hidden md:block shadow-medium absolute bottom-[30px] right-[-40px] bg-[#fff] p-2 px-[70px] rounded-xl" >
                        <h4 class="text-center">Mohmed Taher</h4>
                        <span class="text-[#FFB951] text-center block">Mobile Developer</span>
                      </div>
                    </div>
                  </div>
                </swiper-slide>

                <swiper-slide>
                  <div >
                    <div class="relative p-[0_40px] max-w-[400px] mx-auto">
                      <img class="w-full object-fit" src="@/assets/imgs/user.jpg" alt="">
                      <div class="hidden lg:block shadow-medium absolute bottom-[30px] right-[-40px] bg-[#fff] p-2 px-[70px] rounded-xl" >
                        <h4 class="text-center">Mohmed Taher</h4>
                        <span class="text-[#FFB951] text-center block">Mobile Developer</span>
                      </div>
                    </div>
                  </div>
                </swiper-slide>


                <swiper-slide>
                  <div >
                    <div class="relative p-[0_40px] max-w-[400px] mx-auto">
                      <img class="w-full object-fit" src="@/assets/imgs/user.jpg" alt="">
                      <div class="hidden lg:block shadow-medium absolute bottom-[30px] right-[-40px] bg-[#fff] p-2 px-[70px] rounded-xl" >
                        <h4 class="text-center">Mohmed Taher</h4>
                        <span class="text-[#FFB951] text-center block">Mobile Developer</span>
                      </div>
                    </div>
                  </div>
                </swiper-slide>

                <div class="bottom-[-5px] swiper-pagination" slot="pagination"></div>
              </swiper>
            </client-only>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOptions: {
        // loop: true,
        slidesPerView: 1,
        // autoplay: {
        //   delay: 4000,
        //   disableOnInteraction: false
        // },
        breakpoints: {
          1024: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 0
          }
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
      }
    }
  }
}
</script>
