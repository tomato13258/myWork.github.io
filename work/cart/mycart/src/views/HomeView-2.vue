<script>
import itemCard from '@/components/itemCard.vue'
import switchNtns from '@/components/switch-ntns.vue'
export default {

  components: {
    switchNtns,
    itemCard,

  },
};

// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <switchNtns/>
  <main class="w-full bg-neutral-200 px-[8%] py-[5%] ">
    
    <div class="items-box  flex justify-around gap-[20px]  gap-y-[50px] flex-wrap ">
      <!-- 這裏面放商品卡 -->
      <div class="w-[80%] h-[250px] bg-slate-500  rounded-[5px] flex ">
        <img src="https://fakeimg.pl/250x250/000000,100/f7c995,200" class="">
        <div class="item-text-box  px-[10px] pt-[10px]">
          <div class=" text-[28px]  font-bold text-neutral-200 mb-[10px]">我是商品</div>
          <div class=" text-[14px] text-neutral-300 mb-[50px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  </div>
          <div class="text-[#f7c995] mb-[40px] font-bold">＄400 NT</div>
          <!--按鈕組 -->
          <div class="flex gap-[40px]">
            <div class="flex justify-start mb-[5px]">
              <button class="itemBtn w-[30px] h-[30px] bg-slate-800 flex items-center justify-center text-white">-</button>
              <div class="bg-gray-100 w-[70px]  h-[30px] text-[20px] text-center">1</div>
              <button class="itemBtn w-[30px] h-[30px] bg-slate-800 flex items-center justify-center text-white">+</button>
            </div>
            <div class="add-cart w-[160px] h-[30px] bg-slate-800 flex items-center justify-center text-white text-[16px] rounded-[5px]">加入購物車</div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.itemBtn,.add-cart{
  transition:  .3s;
}
.itemBtn:hover,.add-cart:hover{
  background-color: #c98333;
 
}
.change-btn:hover{
  background-color: #bcc4d3;
}
.change-btn:active{
  background-color: #555a66;
}
svg:hover {
  filter: red;
}
</style>
