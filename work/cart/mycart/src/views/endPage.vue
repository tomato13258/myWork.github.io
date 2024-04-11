<script>
// import returnBtn from '@/components/returnBtn.vue';
// import cartItemCard from '@/components/cartItemCard.vue'


export default {
  components: {
    // returnBtn,
    // cartItemCard,

  },
  data() {
    return {
      returnValue: true,

    }
  },
  emits: ['returnClick'],
  methods: {
    // 回傳值給父層
    returnClick() {
      this.$emit('returnClick', this.returnValue);
      console.log(this.returnValue);
    },
  },
};
</script>


<template>
  <main class="w-full bg-neutral-200 px-[8%] py-[5%]  ">
    

    <div class="items-box  flex justify-around  flex-wrap mb-[10px] ">
      <div class="w-[80%]  flex justify-center mb-[50px]">
      <img src="../components/icons/check-circle.svg" alt="" class="mr-[20px]">
      <span class="text-[50px] font-bold text-[#3b9d48]">購買完成 !</span>
      
    </div>
      
      <!-- 這裏面放商品卡 -->
      <div class="w-[80%] h-[150px] bg-slate-500  flex ">
        <img src="https://fakeimg.pl/150x150/000000,100/f7c995,200" class="">
        <div class="item-text-box   px-[10px] flex items-center">
          <div class="font-bold text-neutral-200 px-[50px]">我是商品</div>

          <!--按鈕組 -->
          <div class="">
            <div class="flex justify-start px-[50px]">
              <div class=" text-[#f7c995] w-full  h-[30px] text-[20px] text-center px-[50px]">1</div>
            </div>

          </div>
          <div class="text-[#f7c995] px-[50px] font-bold">＄400 NT</div>
        </div>
      </div>
      <div class="flex justify-around bg-slate-600 w-[80%] py-[30px] text-gray-200">
        <div class="">
          <span class="mr-[10px]">商品數量:</span>
          <span class="">2</span>
        </div>
        <div class="">
          <span class="mr-[10px]">商品總金額:</span>
          <span class="">5000</span>
          <span class="">元</span>
        </div>
      </div>

    </div>
    <div class=" w-full   flex justify-center mb-[100px] ">
      <div class="bg-slate-500 w-[80%] pt-[50px] pb-[50px]">
        <div class="ml-[150px]">
          <span class="text-[28px] font-bold text-[#f7c995] ">訂單資訊</span>
          <div class="mb-[10px] mt-[20px]">
            <span class="font-bold text-gray-200 mr-[20px]">姓名:</span>
            <span class="font-bold text-gray-200">我是訂購人資訊</span>
          </div>
          <div class="mb-[10px]">
            <span class="font-bold text-gray-200 mr-[20px]">電話:</span>
            <span class="font-bold text-gray-200">我是訂購人資訊</span>
          </div>
          <div class="mb-[10px]">
            <span class="font-bold text-gray-200 mr-[20px]">地址:</span>
            <span class="font-bold text-gray-200">我是訂購人資訊</span>
          </div>
          <div class="mb-[30px]">
            <span class="font-bold text-gray-200 mr-[20px] ">信箱:</span>
            <span class="font-bold text-gray-200">我是訂購人資訊</span>
          </div>
          <div class="">
            <span class="font-bold text-gray-200 mr-[20px]">付款方式:</span>
            <span class="font-bold text-gray-200">我是訂購人資訊</span>
          </div>
          <div class="">
            <span class="font-bold text-gray-200 mr-[20px]">運送方式:</span>
            <span class="font-bold text-gray-200">我是訂購人資訊</span>
          </div>
        </div>
      </div>
    </div>


    <div class="flex justify-around">
      <router-link to="/" class="btn bg-slate-600 p-[10px] text-neutral-200 font-bold rounded-[5px]">回首頁</router-link>
    </div>
  </main>
</template>

<style scoped>
.btn {
  transition: .3s;
}

.btn:hover {
  background-color: #c98333;

}


</style>