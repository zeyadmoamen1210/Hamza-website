<template>
  <div class="">
    <div class="container relative mx-auto ">
      <img class="hidden lg:block absolute top-0 right-0 z-[-1] " src="@/assets/imgs/carrer-1.svg" alt="">
      <img class="block lg:hidden absolute top-0 left-[-150px] z-[-1] " src="@/assets/imgs/carrer-2.svg" alt="">

      <div class="p-10 pt-[100px] mt-10 pb-20">
        <div>
          <h5 class="mb-[30px] mx-auto text-center uppercase text-2xl md:text-3xl max-w-[600px] leading-[1.4] text-[#181544]">
            Front end – Angular
          </h5>
          <p class="max-w-[700px] leading-[1.4] text-[#181544] mx-auto text-center text-md lg:text-[20px]">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero          </p>
        </div>
      </div>
    </div>
    <div class="container relative mx-auto p-6 lg:px-28 overflow-hidden">
      <img class="hidden lg:block absolute top-0 left-0 z-[-1]" src="@/assets/imgs/carrer-2.svg" alt="">
      <img class="block lg:hidden absolute top-0 right-[-150px] z-[-1]" src="@/assets/imgs/carrer-1.svg" alt="">
      <div class="mt-[120px]">
        <h3 class="text-[#697CE8] lg:text-[#181544] text-[30px] mb-8 uppercase">requirments</h3>
        <ul>
          <li class="flex gap-[15px] lg:gap-[20px] items-center mb-5" v-for="(item, index) in items" :key="index">
            <img src="@/assets/imgs/list-item-icon.svg" alt="">
            <span class="text-[#181544] text-[16px] lg:text-[21px]"> {{item}} </span>
          </li>
        </ul>
      </div>

      <div class="bg-[#F8F9FB] py-20 p-4 lg:pl-14 lg:pr-20 mt-20 rounded-3xl">
        <div class="flex gap-[20px] items-center flex-col lg:flex-row">
          <div class="flex-1 order-2 lg:order-1">
            <h6 class="text-[#3D2875] max-w-[550px] text-lg mb-4 leading-6 font-['Poppins-Regular']">fill this form to and we will response you as possible as we can </h6>

            <el-form class="contact-us-form" :model="joinUs" ref="joinUsRef">
              <el-form-item class="mt-[31px]" prop="username" :rules="[{required: true, message: 'this field is required'}]">
                <label for="username" class="block text-[#3D2875] max-w-[550px] text-lg  leading-6 font-['Poppins-Regular']">Username</label>
                <el-input id="username" class="block w-full" type="text" v-model="joinUs.username"></el-input>
              </el-form-item>

              <el-form-item class="mt-[31px]" prop="email" :rules="[{required: true, message: 'this field is required'}]">
                <label for="email" class="block text-[#3D2875] max-w-[550px] text-lg  leading-6 font-['Poppins-Regular']">Email</label>
                <el-input id="email" class="block w-full" type="text" v-model="joinUs.email"></el-input>
              </el-form-item>

              <el-form-item class="mt-[31px]" prop="phone" :rules="[{required: true, message: 'this field is required'}]">
                <label for="phone" class="block text-[#3D2875] max-w-[550px] text-lg  leading-6 font-['Poppins-Regular']">Phone Number</label>
                <el-input id="phone" class="block w-full" type="text" v-model="joinUs.phone"></el-input>
              </el-form-item>

              <el-form-item class="mt-[31px]" prop="attachment" :rules="[{required: true, message: 'this field is required'}]">
                <label for="attachment" class="block text-[#3D2875] max-w-[550px] text-lg mb-2 leading-6 font-['Poppins-Regular']">Your Cv / Resume</label>
                <div class="input-file">
                  <input @change="uploadFile" id="attachment" class="block w-full" type="file" />
                  <div :class="!file ? 'flex-row-reverse' : ''">
                    <h3 v-if="file"> {{file.name}} </h3>
                    <div>
                      <i class="text-[24px] el-icon-paperclip"></i>
                    </div>
                  </div>
                </div>
              </el-form-item>

              <button @click.prevent="sendJobRequest" class=" flex items-center gap-[10px] mt-[40px] rounded-full px-5 p-[8px] bg-[#181544] text-[#fff]"><span>Send</span> <img class="w-[23px]" src="@/assets/imgs/arrow-btn.svg" alt=""> </button>


            </el-form>
          </div>
          <div class="flex-1 order-1 lg:order-2 flex flex-row-reverse">
            <img class="block w-full lg:max-w-[300px]" src="@/assets/imgs/join-us.png" alt="">
          </div>
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
export default {
  components: {
    Footer
  },
  methods: {
    sendJobRequest() {
      this.$refs.joinUsRef.validate((valid) => {
        if(valid) {

        }
      })
    },
    uploadFile(e) {
      if(e.target?.files?.length > 0) {
        this.file = e.target.files[0];
      }
    },
  },
  data() {
    return {
      joinUs: {},
      file: null,
      items: [
        'Sed facilis id nesciunt rem voluptatem dolorem ut.',
        'Amet voluptatum voluptate molestiae eveniet nulla quibusdam.',
        'Ex molestias voluptatem minus quod facere quo qui.',
        'Porro occaecati quia est fugiat sit voluptate est dolores.',
        'Earum mollitia quis optio voluptas voluptas veniam.',
        'Nulla quis ut excepturi qui.',
        'Enim nesciunt sapiente ut sit magnam sint odit id.',
        'Enim distinctio facere quos assumenda sapiente sequi molestiae.',
        'Est qui eos totam.'
      ]
    }
  },
  head: {
    title: 'Hamza Solutions | Front end - Angular',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'job details page'
      }
    ],
  }
}
</script>


<style lang="postcss">
.input-file {
  position: relative;
  padding: 0 10px;
  border-bottom: 1px solid #3d2875;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h3 {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &:first-child {
      border-bottom: 1px solid #3d2875;
    }
  }
  input[type="file"] {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
}
.contact-us-form {
  .el-input__inner {
    background: transparent !important;
    color: #3d2875 !important;
    border: none !important;
    border-radius: 0 !important;
    border-bottom: 1px solid #3d2875 !important;
  }
}
</style>
