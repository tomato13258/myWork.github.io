<script>
import returnBtn from '@/components/returnBtn.vue';
import cartItemCard from '@/components/cartItemCard.vue'


export default {
  components: {
    returnBtn,
    cartItemCard,

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
  <main class="w-full bg-neutral-200 px-[8%] py-[5%] ">
    

    <div class="items-box  flex justify-around flex-wrap mb-[80px]">
      <div class="w-[80%]  flex justify-start mb-[50px] items-center">
      <span class="text-[28px] font-bold text-slate-600 mr-[20px]">Step 1.確認商品資訊</span>
      <span class="text-[24px]  text-slate-400">>>Step 2.填寫收件資訊</span>
      
    </div>
      <!-- 這裏面放商品卡 -->
      <cartItemCard />
      <cartItemCard />
      <cartItemCard />
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



    <div class="flex justify-around">
      <returnBtn content="返回上一頁" bgColor="bg-slate-600" @click="returnClick" class="btn" />
      <router-link to="/cartPageInput" class="btn bg-slate-600 p-[10px] text-neutral-200 font-bold rounded-[5px]">下一步</router-link>
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