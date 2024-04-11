// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
// 這裡是公共jsㄉ放置處
export const useCounterStore = defineStore('counter', {
  state:() =>{
    return{
      count:3,
    };
  },
});
