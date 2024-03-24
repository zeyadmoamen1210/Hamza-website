<template>
  <div>
    <Header />
    <OurServices id="services" />
    <OurProjects id="products"  />
    <WhoAreYou id="who-are-you" class="mb-[50px] md:mb-[100px]" />
    <TeamWork id="team-work" />
    <OurPlans  />
    <MeetOurClients />
    <div class="bg-gradient-to-t from-[#f5f5f5] to-[#fff]">
      <JoinOurConference />
      <Footer />
    </div>

    <div class="overflow-hidden" @click.stop>
      <div v-if="!isOpened" @click="isOpened=!isOpened" class="fixed bottom-[20px] right-[20px] z-[3]">
        <div class="flex flex-row-reverse ">
          <div class="flex flex-col items-center mx-[30px]">
            <img class="hover:translate-y-[-10px] cursor-pointer duration-500 max-w-[80px]" src="@/assets/imgs/chat.svg" alt="">
            <transition>
              <h6 v-if="weInTheHeader" class="text-[#fff] text-lg font-semibold">Chat</h6>
              <h6 v-else class="text-[#333] text-lg font-semibold">Chat</h6>
            </transition>
          </div>
        </div>
      </div>
      <button v-else @click="isOpened = !isOpened" :class="weInTheHeader ? 'bg-[#fff]' : 'bg-[#1b194f]'" class=" w-[30px] h-[30px] rounded-full fixed bottom-[10px] right-[10px] md:bottom-[50px] md:right-[50px] z-[3]">
        <i :class="weInTheHeader ? 'text-[#1b194f]' : 'text-[#fff]'" class="font-bold text-[20px] el-icon-arrow-down"></i>
      </button>

      <transition
        name="custom-classes-transition"
        enter-active-class="animated animate__fadeInBottomRight"
        leave-active-class="animated animate__zoomOut"
      >
        <ChatPopup v-if="isOpened" />
      </transition>
    </div>
  </div>
</template>

<script>
import Header from "~/components/Layout/Header.vue";
import OurServices from "~/components/LandingPage/OurServices.vue";
import OurProjects from "~/components/LandingPage/OurProjects.vue";
import WhoAreYou from "~/components/LandingPage/WhoAreYou.vue";
import TeamWork from "~/components/LandingPage/TeamWork.vue";
import OurPlans from "~/components/LandingPage/OurPlans.vue";
import JoinOurConference from "~/components/LandingPage/JoinOurConference.vue";
import Footer from "~/components/LandingPage/Footer.vue";
import MeetOurClients from "~/components/LandingPage/MeetOurClients.vue";
import 'animate.css';

export default {
  name: 'IndexPage',
  components: {
    MeetOurClients,
    JoinOurConference,
    OurPlans,
    TeamWork,
    WhoAreYou,
    OurProjects,
    OurServices,
    Header,
    Footer
  },
  data() {
    return {
      isOpened: false,
      weInTheHeader: true,
    }
  },
  mounted() {
    document.addEventListener('click', () => {
      this.isOpened = false;
    })
    window.addEventListener('scroll', (e) => {
      if(window.scrollY && window.scrollY > 100) {
        this.weInTheHeader = false;
      }else {
        this.weInTheHeader = true;
      }
    })
  },
  head: {
    title: 'Hamza Solutions',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Home page'
      }
    ],
  }
}
</script>
