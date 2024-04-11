<script>
export default{
    data(){
        return{


        }
    },
    props:{
        content:{
            type:[String, Number],
            required:true,
            // 父層是否一定要回傳值
            default:'',
            // 初始值

        },
        bgColor:{
            type:String,
            default:'',
        }
    },

};
</script>
<template>
    <router-link to="/" type="button" class="bg-cyan-600 p-[10px] text-neutral-200 font-bold rounded-[5px]" :class="bgColor">{{content}}</router-link>
</template>
<style></style>