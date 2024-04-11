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
  <switchNtns class="" />
  <main class="w-full bg-neutral-200 px-[8%] py-[5%] ">
    
    <div class="items-box  flex justify-around gap-[20px]  gap-y-[50px] flex-wrap ">
      <!-- 這裏面放商品卡 -->
      <itemCard />
    </div>
  </main>


</template>

<style scoped>
.itemBtn,
.add-cart {
  transition: .3s;
}

.itemBtn:hover,
.add-cart:hover {
  background-color: #c98333;

}
</style>
