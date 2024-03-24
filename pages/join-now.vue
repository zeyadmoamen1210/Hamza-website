<template>
  <div>
    <div class="container mx-auto p-4 lg:p-10">
      <div class="bg-[#F8F9FB] py-20 md:pl-14 md:pr-20 p-4 mt-16 rounded-3xl">
        <div class="flex gap-[20px] items-center flex-col lg:flex-row">
          <div class="flex-1 order-2 lg:order-1">
            <h6 class="text-[#3D2875] max-w-[550px] text-lg mb-4 leading-6 font-['Poppins-Regular']">please fill the following data and enter your main email to send you the date of beginning </h6>

            <el-form class="contact-us-form" :model="joinUs" ref="joinUsRef">
              <el-form-item class="mt-[31px]" prop="username" :rules="[{required: true, message: 'this field is required'}]">
                <label for="username" class="block text-[#3D2875] max-w-[550px] text-lg  leading-6 font-['Poppins-Regular']">Username</label>
                <el-input id="username" class="block w-full" type="text" v-model="joinUs.username"></el-input>
              </el-form-item>
              <el-form-item class="mt-[31px]" prop="email" :rules="[{required: true, message: 'this field is required'}]">
                <label for="email" class="block text-[#3D2875] max-w-[550px] text-lg  leading-6 font-['Poppins-Regular']">Email</label>
                <el-input id="email" class="block w-full" type="text" v-model="joinUs.email"></el-input>
              </el-form-item>
              <button @click.prevent="sendRequest" class=" flex items-center gap-[10px] mt-[40px] rounded-full px-5 p-[8px] bg-[#181544] text-[#fff]"><span>Send</span> <img class="w-[23px]" src="@/assets/imgs/arrow-btn.svg" alt=""> </button>
            </el-form>
          </div>
          <div class="flex-1 order-1 lg:order-2">
            <img class="mx-auto block w-full lg:max-w-[300px]" src="@/assets/imgs/fill-form.png" alt="">
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
  data() {
    return {
      joinUs: {}
    }
  },
  methods: {
    sendRequest() {
      this.$refs.joinUsRef.validate((valid) => {
        if(valid) {

        }
      })
    },
  },
  head: {
    title: 'Hamza Solutions | join us',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'join us page'
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
