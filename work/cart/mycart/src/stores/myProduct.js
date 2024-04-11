// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
// 這裡是公共jsㄉ放置處，可放置變數與公式等等
// import {useCounterStore} from'@/'
export const useCounterStore = defineStore('counter', {
  state:() =>{
    return{
      cartData:[
        {
          id:1,
          productName:'噴墨印表機',
          price:3020,
        },
        {
          id:2,
          productName:'雷射表機',
          price:5300,
        },
        {
          id:3,
          productName:'微波爐',
          price:2110,
        },
        {
          id:4,
          productName:'洗碗機',
          price:3360,
        },

      ],
    };
  },
  actions:{

  },
});
