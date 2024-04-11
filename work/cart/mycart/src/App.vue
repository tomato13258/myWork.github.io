<script>
// import switchBtns from '@/components/switch-ntns.vue'


// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'

// 可以試做返回紐在主頁面?
export default{
  data(){
    return{
      showValue:true,

    }
  },
  methods:{
    hiddenBtns(){
      this.showValue=false;
    },
    returnShow(e){
      
      this.showValue=e;

    },
    

  },
  components:{
    // switchBtns,

  },
};
</script>

<template>
  <div class="bg-gray-200">
    <nav class="w-full h-[50px] bg-slate-700  flex items-center justify-between py-[30px] px-[80px] mb-[50px]">
      <div class="text-gray-100">LOGO-SHOPPING</div>
      <div class="nav-right-box">
        <router-link to="/cartPage" class="" @click="hiddenBtns()"><img src="./components/icons/cart-fill.svg" alt=""></router-link>
        <div class="cart-circle w-[18px] h-[18px] bg-red-500">
          <span class=" text-gray-100 text-[14px]">0</span>
        </div>
      </div>
    </nav>
   <!-- <switchBtns v-show="showValue" @returnClick="returnShow" /> -->
    <RouterView />
    <footer class="w-full h-[100px] bg-slate-700"></footer>
  </div>

  
  
</template>

<style scoped>
.nav-right-box{
  position: relative;
}
.cart-circle{
  position: absolute;
  right:-10px;
  top: -10px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
