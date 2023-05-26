
<template>
   <div class="chat">
      <div class="chat-name">{{ name }}</div>
      <div class="chat-box">
         <div class="chat-item" v-for="item in chatData" :key="item.id">
            <div class="item" :class="item.userid == 1 ? 'left' : 'righr reserve'">
               <img class="user-head"
                  :src="item.userid == 1 ? require('@/assets/user.jpg') : require('@/assets/head.jpg')">
               <div :class="item.userid == 1 ? 'bg-1' : 'bg-2'">{{ item.content }}</div>
            </div>
         </div>
      </div>
   </div>
</template>
 
<script setup>
import { defineProps } from 'vue';
defineProps(
   {
      name: {
         type: String,
         default: '小红',
      },
      userid: {
         type: String,
         default: '1'
      }
   }
);
const chatData = [
   { id: 'das', userid: '1', content: '如何看待A股', time: '2023-5-26' },
   { id: 'adsdas', userid: '2', content: '散户收割机罢了', time: '2023-5-26' },
   { id: 'sadasd2', userid: '2', content: '虽说是赌场，但是开赌场的人看着你的牌来玩，你还怎么可能赢钱', time: '2023-5-26' },
   { id: 'dasd', userid: '1', content: '确实，绝望的一比，A股太难玩了，大庄看牌，小庄玩反逻辑，散户直呼遭不住', time: '2023-5-26' },
   { id: 'adsdas', userid: '2', content: '等我回本了我就不玩了，他妈的', time: '2023-5-26' },
   { id: 'adsdas', userid: '2', content: '可以', time: '2023-5-26' },
]
</script>
 
<style lang="scss" scoped>
.chat {
   width: 100%;
   height: 100%;

   .chat-name {
      width: 100%;
      height: 3rem;
      line-height: 3rem;
      padding-left: 1rem;
      font-size: 16px;
      font-family: bold;
      border-bottom: 1px solid #e7e5e5;
   }

   .chat-box {
      width: 100%;
      height: calc(100% - 3rem);

      .chat-item {
         font-size: 14px;
         margin: 0.5rem;

         .item {
            display: flex;
         }
         .reserve{
            flex-direction: row-reverse;
         }

         .user-head {
            width: 2rem;
            height: 2rem;
         }

         .bg-1 {
            position: relative;
            background-color: #fff;
            border-radius: 5px;
            padding: 0.3rem 0.5rem;
            margin-left: 1rem;
            max-width: 70%;
         }

         .bg-1::before {
            content: "";
            position: absolute;
            top: 0.6rem;
            left: -0.3rem;
            padding: 5px;
            background: inherit;
            border: inherit;
            border-right: 10px;
            border-top: 10px;
            border-bottom: 10px;
            transform: rotate(45deg);
         }

         .bg-2 {
            position: relative;
            background-color: #95ec69;
            border-radius: 5px;
            padding: 0.3rem 0.5rem;
            margin-right: 1rem;
            max-width: 70%;
         }

         .bg-2::before {
            content: "";
            position: absolute;
            top: 0.6rem;
            right: -0.3rem;
            padding: 5px;
            background: inherit;
            border: inherit;
            border-left: 10px;
            border-top: 10px;
            border-bottom: 10px;
            transform: rotate(45deg);
         }
      }


   }
}
</style>
 