<template>
  <div class="my-[70px] p-10 pb-10 meet-our-clients">
    <div class="container mx-auto">

      <div class="mt-10 mb-5">
        <h3 class="text-[30px] md:text-[35px] text-center font-['Poppins-Regular'] mb-[30px] md:mb-5 leading-[1.1] uppercase">MEET OUR CLIENTS</h3>
        <p class="text-center max-w-[600px] mx-auto text-md leading-6 font-['Poppins-Light']">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt utLorem ipsum dolor sit amet, consetetur sadipscing elitr,        </p>
      </div>

      <client-only>
        <!-- Swiper component -->
        <swiper
          ref="swiperComponentRef"
          :options="swiperOptions"
          class="pb-[130px] "
        >

          <swiper-slide >
            <div class="mt-10 flex p-2 px-4 rounded-full shadow-medium items-center gap-[10px]">
              <div>
                <img class="max-w-[50px] object-cover" src="@/assets/imgs/logo=2.png" alt="">
              </div>
              <h6>nalbes</h6>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="mt-10 flex p-2 px-4 rounded-full shadow-medium items-center gap-[10px]">
              <div>
                <img class="max-w-[50px] object-cover" src="@/assets/imgs/rewaa-logo.png" alt="">
              </div>
              <h6>rewaa</h6>
            </div>
          </swiper-slide>


          <swiper-slide>
            <div class="mt-10 flex p-2 px-4 rounded-full shadow-medium items-center gap-[10px]">
              <div>
                <img class="max-w-[50px] object-cover" src="@/assets/imgs/nebrass.png" alt="">
              </div>
              <h6>nebrass</h6>
            </div>
          </swiper-slide>


          <div class="swiper-button-prev" slot="button-prev">
            <img src="@/assets/imgs/arrow-left-2.svg" alt="">
          </div>
          <div class="swiper-button-next" slot="button-next">
            <img src="@/assets/imgs/arrow-right-2.svg" alt="">
          </div>

        </swiper>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOptions: {
        loop: true,
        slidesPerView: 5,
        spaceBetween: 30,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false
        },
        breakpoints: {
          1024: {
            slidesPerView: 5,
            spaceBetween: 30
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 30
          }
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
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


<style>
.meet-our-clients {
  .swiper-button-prev {
    background-image: none !important;
    bottom: 0;
    top: auto;
    left: 53% !important;
    transform: translate(-50%, 0);
  }
  .swiper-button-next {
    background-image: none !important;
    bottom: 0;
    top: auto;
    left: 50% !important;
    transform: translate(-125%, 0 );

  }
}

</style>
