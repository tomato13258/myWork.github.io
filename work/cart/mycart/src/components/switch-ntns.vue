<script>
export default{
  data(){
    return{
      switchOn:1,

    }

  },
  methods:{
    switchBtn(e){
      this.switchOn=e;
      console.log(e);
    },

  },

}
</script>
<template>
     <div class="change-btn-all w-full bg-neutral-200 px-[9%]  flex  justify-end" >
      <router-link to="/" class="change-btn rounded-[5px] bg-slate-300 py-[10px] px-[15px] mr-[10px]" :class="{ 'active': switchOn === 1 }" @click="switchBtn(1)">
      <img src="../components/icons/square-2.svg" alt="">
    </router-link>
    <router-link to="/home2" class="change-btn rounded-[5px] bg-slate-300 py-[5px] px-[10px]" :class="{ 'active': switchOn === 2 }" @click="switchBtn(2)">
      <img src="../components/icons/ractan.svg" alt="">
    </router-link>
    </div>
</template>

<style scoped>
.change-btn:hover::before {
  opacity: 0.2;
  transform: scale(1.02);
}
.change-btn {
  position: relative;
  
}
.change-btn:hover{
  transform: scale(1.02);
  transition:  .3s;
  
}
.change-btn::before {
  content: '';
  display: block;
  width: 50px;
  height: 40px;
  background-color: #000000;
  border-radius: 5px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  transition:  .3s;
}
.active {
  background-color: #6c7079;
}
</style>