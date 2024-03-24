<template>
  <div>
    <div class="container mx-auto">
      <div class="px-10 pt-10">
        <h6 class="text-xl mb-2 text-[#181544]">Contact Us</h6>
        <div class="flex gap-[10px] justify-between flex-wrap">
          <h5 class="uppercase text-2xl max-w-[400px] leading-8 text-[#181544]">feel free to contact us we would love to hear from you</h5>
        </div>

        <div class="bg-[#F8F9FB] p-10 mt-10 rounded-3xl">
          <div class="flex gap-[20px] items-center flex-col lg:flex-row">
            <div class="max-w-[600px] order-2 lg:order-1">
              <h6 class="text-[#3D2875] max-w-[550px] text-lg mb-4 leading-6 font-['Poppins-Regular']">Your Interest</h6>
              <div class="flex gap-[25px] flex-wrap">
                <button :class="[active == 1 ? 'border border-[#697CE8]' : '']" @click.prevent="active=1" class="relative bg-[#fff] rounded-full p-3 px-5 text-[#666666] text-sm font-['Poppins-Light']">
                  Web Development
                  <div :class="[active == 1 ? 'block' : 'hidden']" class=" bg-[#697CE8] rounded-full leading-[30px] h-[25px] w-[25px] text-[#fff] absolute top-[-11px] right-[-1px]">
                    <i class="font-bold text-[17px] el-icon-check"></i>
                  </div>
                </button>

                <button :class="[active == 2 ? 'border border-[#697CE8]' : '']" @click.prevent="active=2" class="relative bg-[#fff] rounded-full p-3 px-5 text-[#666666] text-sm font-['Poppins-Light']">
                  Design
                  <div :class="[active == 2 ? 'block' : 'hidden']" class=" bg-[#697CE8] rounded-full leading-[30px] h-[25px] w-[25px] text-[#fff] absolute top-[-11px] right-[-1px]">
                    <i class="font-bold text-[17px] el-icon-check"></i>
                  </div>
                </button>

                <button :class="[active == 3 ? 'border border-[#697CE8]' : '']" @click.prevent="active=3" class="relative bg-[#fff] rounded-full p-3 px-5 text-[#666666] text-sm font-['Poppins-Light']">
                  Mobile App Development
                  <div :class="[active == 3 ? 'block' : 'hidden']" class=" bg-[#697CE8] rounded-full leading-[30px] h-[25px] w-[25px] text-[#fff] absolute top-[-11px] right-[-1px]">
                    <i class="font-bold text-[17px] el-icon-check"></i>
                  </div>
                </button>


                <button :class="[active == 4 ? 'border border-[#697CE8]' : '']" @click.prevent="active=4" class="relative bg-[#fff] rounded-full p-3 px-5 text-[#666666] text-sm font-['Poppins-Light']">
                  Maintenance
                  <div :class="[active == 4 ? 'block' : 'hidden']" class=" bg-[#697CE8] rounded-full leading-[30px] h-[25px] w-[25px] text-[#fff] absolute top-[-11px] right-[-1px]">
                    <i class="font-bold text-[17px] el-icon-check"></i>
                  </div>
                </button>

                <button :class="[active == 5 ? 'border border-[#697CE8]' : '']" @click.prevent="active=5" class="relative bg-[#fff] rounded-full p-3 px-5 text-[#666666] text-sm font-['Poppins-Light']">
                  Marketing Automation
                  <div :class="[active == 5 ? 'block' : 'hidden']" class=" bg-[#697CE8] rounded-full leading-[30px] h-[25px] w-[25px] text-[#fff] absolute top-[-11px] right-[-1px]">
                    <i class="font-bold text-[17px] el-icon-check"></i>
                  </div>
                </button>

                <button :class="[active == 6 ? 'border border-[#697CE8]' : '']" @click.prevent="active=6" class="relative bg-[#fff] rounded-full p-3 px-5 text-[#666666] text-sm font-['Poppins-Light']">
                  E-commerce
                  <div :class="[active == 6 ? 'block' : 'hidden']" class=" bg-[#697CE8] rounded-full leading-[30px] h-[25px] w-[25px] text-[#fff] absolute top-[-11px] right-[-1px]">
                    <i class="font-bold text-[17px] el-icon-check"></i>
                  </div>
                </button>


              </div>
              <el-form class="contact-us-form" :model="contactUs" ref="contactUsRef">
                <el-form-item class="mt-[31px]" prop="username" :rules="[{required: true, message: 'this field is required'}]">
                  <label for="username" class="block text-[#3D2875] max-w-[550px] text-lg  leading-6 font-['Poppins-Regular']">Username</label>
                  <el-input id="username" class="block w-full" type="text" v-model="contactUs.username"></el-input>
                </el-form-item>

                <el-form-item class="mt-[31px]" prop="email" :rules="[{required: true, message: 'this field is required'}]">
                  <label for="email" class="block text-[#3D2875] max-w-[550px] text-lg  leading-6 font-['Poppins-Regular']">Email</label>
                  <el-input id="email" class="block w-full" type="text" v-model="contactUs.email"></el-input>
                </el-form-item>

                <el-form-item class="mt-[31px]" prop="phone" :rules="[{required: true, message: 'this field is required'}]">
                  <label for="phone" class="block text-[#3D2875] max-w-[550px] text-lg  leading-6 font-['Poppins-Regular']">Phone Number</label>
                  <el-input id="phone" class="block w-full" type="text" v-model="contactUs.phone"></el-input>
                </el-form-item>

                <el-form-item class="mt-[31px]" prop="about" :rules="[{required: true, message: 'this field is required'}]">
                  <label for="about" class="block text-[#3D2875] max-w-[550px] text-lg  leading-6 font-['Poppins-Regular']">Tell Us About Your Project</label>
                  <el-input id="about" class="block w-full" type="text" v-model="contactUs.about"></el-input>
                </el-form-item>


                <el-form-item class="mt-[31px]" prop="attachment" :rules="[{required: true, message: 'this field is required'}]">
                  <label for="attachment" class="block text-[#3D2875] max-w-[550px] text-lg mb-2 leading-6 font-['Poppins-Regular']">Attachment</label>
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


                <h6 class="text-[#3D2875] max-w-[550px] text-lg mb-6 mt-[31px] leading-6 font-['Poppins-Regular']">Project Budget (EGP)</h6>
                <div class="flex gap-[25px] flex-wrap">
                  <button :class="[active == 1 ? 'border border-[#697CE8]' : '']" @click.prevent="active=1" class="relative bg-[#fff] rounded-full p-3 px-5 text-[#666666] text-sm font-['Poppins-Light']">
                    10K - 30K
                    <div :class="[active == 1 ? 'block' : 'hidden']" class=" bg-[#697CE8] rounded-full leading-[30px] h-[25px] w-[25px] text-[#fff] absolute top-[-11px] right-[-1px]">
                      <i class="font-bold text-[17px] el-icon-check"></i>
                    </div>
                  </button>

                  <button :class="[active == 2 ? 'border border-[#697CE8]' : '']" @click.prevent="active=2" class="relative bg-[#fff] rounded-full p-3 px-5 text-[#666666] text-sm font-['Poppins-Light']">
                    30K - 100K
                    <div :class="[active == 2 ? 'block' : 'hidden']" class=" bg-[#697CE8] rounded-full leading-[30px] h-[25px] w-[25px] text-[#fff] absolute top-[-11px] right-[-1px]">
                      <i class="font-bold text-[17px] el-icon-check"></i>
                    </div>
                  </button>

                  <button :class="[active == 3 ? 'border border-[#697CE8]' : '']" @click.prevent="active=3" class="relative bg-[#fff] rounded-full p-3 px-5 text-[#666666] text-sm font-['Poppins-Light']">
                    100K - 400K
                    <div :class="[active == 3 ? 'block' : 'hidden']" class=" bg-[#697CE8] rounded-full leading-[30px] h-[25px] w-[25px] text-[#fff] absolute top-[-11px] right-[-1px]">
                      <i class="font-bold text-[17px] el-icon-check"></i>
                    </div>
                  </button>

                </div>

                <button @click.prevent="sendRequest()" class="mt-[30px] rounded-full px-5 p-[8px] bg-[#181544] font-semibold text-[#fff]">send request</button>


              </el-form>
            </div>
            <div class="flex-1 order-1 lg:order-2">
              <img class="mx-auto block" src="@/assets/imgs/contact-us-img.svg" alt="">
            </div>
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
  components: {Footer},
  methods: {
    uploadFile(e) {
      if(e.target?.files?.length > 0) {
        this.file = e.target.files[0];
      }
    },
    sendRequest() {
      this.$refs.contactUsRef.validate((valid) => {
        if(valid) {

        }
      })
    }
  },
  data() {
    return {
      active: 1,
      contactUs: {},
      file: null
    }
  },
  head: {
    title: 'Hamza Solutions | contact us',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Hamza contact us page'
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
