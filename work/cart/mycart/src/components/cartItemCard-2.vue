<script>
</script>
<template>
     <div class="w-[80%] h-[150px] bg-slate-500  flex ">
        <div class="flex px-[60px]">
          <input type="checkbox" class="w-[20px]">
        </div>
        <img src="https://fakeimg.pl/150x150/000000,100/f7c995,200" class="">
        <div class="item-text-box   px-[10px] flex items-center">
          <div class="font-bold text-neutral-200 px-[50px]">我是商品</div>
          <div class="text-[#f7c995] px-[50px] font-bold">＄400 NT</div>
          <!--按鈕組 -->
          <div class="">
            <div class="flex justify-start px-[50px]">
              <button
                class="itemBtn w-[30px] h-[30px] bg-slate-800 flex items-center justify-center text-white">-</button>
              <div class="bg-gray-100 w-full  h-[30px] text-[20px] text-center px-[50px]">1</div>
              <button
                class="itemBtn w-[30px] h-[30px] bg-slate-800 flex items-center justify-center text-white">+</button>
            </div>
            
          </div>
        </div>
      </div>

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