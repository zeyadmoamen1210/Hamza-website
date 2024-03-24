<template>
  <div class="rounded-3xl bg-[#1B194F] overflow-hidden max-w-[290px] h-[350px] w-[90vw] fixed bottom-[40px] right-[40px] md:bottom-[70px] md:right-[70px] z-[99]">

   <div class="relative">
     <div class="p-[10px] bg-[#1B194F]">
       <h6 class="text-center text-[#fff]">Hamza House Solutions</h6>
     </div>



     <section class="chat p-3 rounded-3xl bg-[#fff]">
       <div class="bg-[#fff]">
         <h6 class="text-center text-[#b9b9b9] text-[14px]"> {{ new Date().toLocaleString() }} </h6>
       </div>
       <div class="chat__message  chat__message_A" style="--delay: 1s;">
         <div class="chat__content">
           <p>Hello, my name is Jane</p>
         </div>
         <span class="self-center text-[#697ce8] text-[13px]">05:20</span>
       </div>

       <div class="chat__message  chat__message_A" style="--delay: 2s;">
         <div class="chat__content">
           <p>How can I help you?</p>
         </div>
         <span class="self-center text-[#697ce8] text-[13px]">05:20</span>
       </div>

       <div class="chat__message chat__message_B" style="--delay: 3s;">
         <div class="chat__content">
           <p>Thank you.</p>
         </div>
         <span class="self-center text-[#697ce8] text-[13px]">05:20</span>
       </div>


     </section>

     <div class="absolute bottom-[15px] left-[15px] flex gap-[5px] items-center outline-0 justify-between" style="width: calc(100% - 20px)">
       <div>
         <input class="rounded-full p-2 px-4 bg-[#f4f4f4d9]" type="text" placeholder="Send a message">
       </div>
       <div>
         <button class="bg-[#1B194F] w-[40px] h-[40px] leading-[40px] rounded-full">
           <img class="w-[20px] block mx-auto" src="@/assets/imgs/send-white.svg" alt="">
         </button>
       </div>
     </div>
   </div>
  </div>
</template>

<style scoped>
*, *::before {
  box-sizing: border-box;
}

.chat {
  display: flex;
  flex-direction: column;
  height: 309px;
  overflow: hidden;
  color: #313131;
  position: relative;
  overflow-y: scroll;
}



.chat p {
  margin: 0;
  padding: 0;
}

.chat__content {
  flex: 0 1 auto;
  padding: 8px 16px;
  font-size: 13px;
  margin: 0 0.5rem;
  background: #eaeaea;
  border-radius: 0 50px 50px 50px;
}

.chat__message {
  width: 95%;
  display: flex;
  align-items: flex-end;
  transform-origin: 0 100%;
  padding-top: 0;
  transform: scale(0);
  max-height: 0;
  overflow: hidden;
  animation: message 0.15s ease-out 0s forwards;
  animation-delay: var(--delay);
  --bgcolor: #d8d8d8;
  --radius: 8px 8px 8px 0;
}

.chat__message_B {
  flex-direction: row-reverse;
  text-align: right;
  align-self: flex-end;
  transform-origin: 100% 100%;
  --bgcolor: #d2ecd4;
  --radius: 8px 8px 0 8px;
}

.chat__message::before {
  content: "";
  flex: 0 0 34px;
  aspect-ratio: 1/1;
  background: var(--bgcolor);
  border-radius: 50%;
  align-self: start;
}

.chat__message.chat__message_A::before {
  background-image: url(@/assets/imgs/logo-2.png);
  background-size: cover;
}

@keyframes message {
  0% {
    max-height: 100vmax;
  }
  80% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
    max-height: 100vmax;
    overflow: visible;
    padding-top: 1rem;
  }
}


/* width */
.chat::-webkit-scrollbar {
  width: 10px;
}

/* Track */
.chat::-webkit-scrollbar-track {
  background: none;
}

/* Handle */
.chat::-webkit-scrollbar-thumb {
  background: none;
}

/* Handle on hover */
.chat::-webkit-scrollbar-thumb:hover {
  background: none;
}

</style>
<script setup>
</script>
