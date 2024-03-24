<template>
  <div class="container mx-auto">
    <div class="px-10 pt-10">
      <h6 class="text-2xl text-[#181544] font-[Poppins-Regular] mb-4 md:mb-2">Our Products</h6>
      <div class="flex gap-[10px] justify-between flex-wrap">
        <h5 class="uppercase text-2xl md:text-3xl max-w-[470px] leading-10 text-[#181544] font-[Poppins-Regular]">case studies are conducted by our team</h5>
        <button @click="$router.push('/products')" class="hidden md:flex text-[#181544] items-center gap-[15px] uppercase"><span>All Projects</span> <img class="w-[15px]" src="@/assets/imgs/arrow.svg" alt=""> </button>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-[50px] mt-[30px]">
        <div class="overflow-hidden rounded-3xl">
          <div class="hidden md:block hover:scale-[1.1] duration-700 bg-no-repeat w-full h-[770px] bg-[url('@/assets/imgs/kashkha-1.jpg')] bg-cover bg-[top_center] rounded-3xl"></div>
          <img class="block md:hidden" src="@/assets/imgs/kashkha-1.jpg" alt="">

          <div class="mt-[30px] md:mt-[60px] mb-[80px] md:mb-[60px] block lg:hidden">
            <h3 class="text-3xl mb-2">kashkha app</h3>
            <p class="font-['Poppins-Light']">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.
            </p>
          </div>
        </div>
        <div>
          <div class="hidden md:block max-h-[570px] overflow-hidden rounded-3xl">
            <div class="hover:scale-[1.1] duration-700 bg-no-repeat w-full h-[570px] bg-[url('@/assets/imgs/heaven-1.jpg')] bg-cover bg-[top_center] rounded-3xl"></div>
          </div>
          <img class="block md:hidden" src="@/assets/imgs/heaven-1.jpg" alt="">
          <div class="mt-[30px] md:mt-[60px] mb-[35px] md:mb-[0]">
            <h3 class="text-4xl mb-4"> heaven website</h3>
            <p class="text-lg font-['Poppins-Light']">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.            </p>
          </div>
        </div>

        <div>
          <div class="mt-[30px] hidden lg:block mb-[80px] md:mb-[0]">
            <h3 class="text-3xl mb-2">kashkha app</h3>
            <p class="font-['Poppins-Light']">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.
            </p>
          </div>
          <div class="hidden md:block mt-[50px] overflow-hidden rounded-3xl">
            <div class="hover:scale-[1.1] duration-700 bg-no-repeat w-full h-[620px] max-h-[620px]  bg-[url('@/assets/imgs/sass-learning-1.jpg')] bg-cover bg-[top_center] rounded-3xl"></div>
          </div>
          <img class="block md:hidden mt-[60px]" src="@/assets/imgs/sass-learning-1.jpg" alt="">

          <div class="mt-[30px] mb-[40px] md:mb-[0]">
            <h3 class="text-3xl mb-2">Sass Learning</h3>
            <p class="font-['Poppins-Light']">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.
            </p>
          </div>
        </div>


        <div class=" mt-[50px]">
          <div class="hidden md:block overflow-hidden rounded-3xl max-h-[740px]">
            <div class="hover:scale-[1.1] duration-700 bg-no-repeat w-full max-h-[740px] h-[740px] bg-[url('@/assets/imgs/pet-1.jpg')] bg-cover bg-[top_center] rounded-3xl"></div>
          </div>
          <img class="block md:hidden" src="@/assets/imgs/pet-1.jpg" alt="">

          <div class="mt-[30px] mb-[80px] md:mb-[0]">
            <h3 class="text-3xl mb-2">Pet app</h3>
            <p class="font-['Poppins-Light']">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.
            </p>
          </div>
        </div>
      </div>

      <button @click="$router.push('/products')" class="text-2xl mx-auto flex md:hidden text-[#181544] items-center gap-[15px] uppercase"><span>All Projects</span> <img class="w-[15px]" src="@/assets/imgs/arrow.svg" alt=""> </button>

    </div>
  </div>
</template>
<script setup>
</script>
