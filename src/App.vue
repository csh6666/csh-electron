<template>
   <div class="main-container">
      <div class="left-menu">
         <img class="user-head"  src="@/assets/head.jpg">
         <img class="menu-item" v-for="(item) in menu" :key="item.id" :src="item.id==id?item.active:item.img" @click="routerPage(item)">
      </div>
      <div class="content-view">
         <router-view></router-view>
      </div>
      <div class="set-btn">
         <Icon type="ios-close" @click="sendMessage('close')" />
         <Icon type="ios-square-outline" size="12" @click="sendMessage('resize')" />
         <Icon type="md-remove"  size="12" @click="sendMessage('miniSize')"/>
      </div>
   </div>
</template>

<script setup>
import { ref} from 'vue'
import {useRouter} from 'vue-router'
const router = useRouter()
const menu=[
   {id:'1',img:require('@/assets/chat.png'),active:require('@/assets/chat_active.png'),path:'/'},
   {id:'2',img:require('@/assets/user.png'),active:require('@/assets/user_active.png'),path:'/contacts'},
   {id:'3',img:require('@/assets/collection.png'),active:require('@/assets/collection_active.png'),path:'/collection'},
   {id:'4',img:require('@/assets/folder.png'),active:require('@/assets/folder_active.png'),path:'/folder'},
   {id:'5',img:require('@/assets/moment.png'),active:require('@/assets/moment_active.png'),path:'/moments'},
]
const id = ref('1')
const routerPage=(item)=>{
   id.value=item.id;
   router.push({path: item.path})
}
const sendMessage=async (key)=>{
   const callback={
      close:()=>{window.EventHandle.close()},
      resize:()=>{window.EventHandle.resize()},
      miniSize:()=>{window.EventHandle.miniSize()},
   }
   callback[key]()
}


</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: 100%;
  height: 100%;
  margin: 0;
}
.main-container{
   position: relative;
   width: 100%;
   height: 100%;
   overflow: hidden;
   display: flex;
   .left-menu{
      width: 50px;
      background-color: #2e2e2e;
      flex-shrink: 1;
      padding-top: 25px;
      .user-head{
         width: 45px;
         height: 45px;
         display: block;
         margin: auto;
         margin-top: 20px;
         cursor: pointer;
      }
      .menu-item{
         width: 24px;
         height: 24px;
         display: block;
         margin: auto;
         margin-top: 20px;
         cursor: pointer;
      }
   }
   .content-view{
      flex:1;
      // padding-top: 25px;
   }
   .set-btn{
      position: absolute;
      top: 0;
      width: 100%;
      height: 25px;
      text-align: right;
      line-height: 25px;
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
      i{
         margin: 0 10px;
         font-size: 16px;
         font-weight: bold;
         cursor: pointer;
      }
   }
}

</style>
