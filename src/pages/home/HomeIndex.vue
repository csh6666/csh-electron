<template>
  <div class="home">
    <div class="left-part">
      <div class="search-box">
         <Icon type="ios-search" class="input-icon" />
         <input class="search-input" v-model="keyword" placeholder="搜索">
         <span class="add-btn">+</span>
      </div>
      <div class="user-list">
         <div class="user active">
            <img class="user-head" src="../../assets/user.jpg">
            <div class="user-info">
               <div class="name">小红</div>
               <span class="time">14：25</span>
               <div class="message">好的</div>
            </div>
         </div>
         <div class="user">
            <img class="user-head" src="../../assets/user1.jpg">
            <div class="user-info">
               <div class="name">小杰</div>
               <span class="time">14：25</span>
               <div class="message">好的</div>
            </div>
         </div>
         <div class="user">
            <img class="user-head" src="../../assets/user.jpg">
            <div class="user-info">
               <div class="name">小红</div>
               <span class="time">14：25</span>
               <div class="message">好的</div>
            </div>
         </div>
         <div class="user">
            <img class="user-head" src="../../assets/user1.jpg">
            <div class="user-info">
               <div class="name">小杰</div>
               <span class="time">14：25</span>
               <div class="message">好的</div>
            </div>
         </div>
         <div class="user">
            <img class="user-head" src="../../assets/user.jpg">
            <div class="user-info">
               <div class="name">小红</div>
               <span class="time">14：25</span>
               <div class="message">好的</div>
            </div>
         </div>
         <div class="user">
            <img class="user-head" src="../../assets/user1.jpg">
            <div class="user-info">
               <div class="name">小杰</div>
               <span class="time">14：25</span>
               <div class="message">好的</div>
            </div>
         </div>
         <div class="user">
            <img class="user-head" src="../../assets/user.jpg">
            <div class="user-info">
               <div class="name">小红</div>
               <span class="time">14：25</span>
               <div class="message">好的</div>
            </div>
         </div>
         <div class="user">
            <img class="user-head" src="../../assets/user1.jpg">
            <div class="user-info">
               <div class="name">小杰</div>
               <span class="time">14：25</span>
               <div class="message">好的</div>
            </div>
         </div>
         <div class="user">
            <img class="user-head" src="../../assets/user.jpg">
            <div class="user-info">
               <div class="name">小红</div>
               <span class="time">14：25</span>
               <div class="message">好的</div>
            </div>
         </div>
         <div class="user">
            <img class="user-head" src="../../assets/user.jpg">
            <div class="user-info">
               <div class="name">小红</div>
               <span class="time">14：25</span>
               <div class="message">好的</div>
            </div>
         </div>
         <div class="user">
            <img class="user-head" src="../../assets/user.jpg">
            <div class="user-info">
               <div class="name">小红</div>
               <span class="time">14：25</span>
               <div class="message">好的</div>
            </div>
         </div>
         <div class="user">
            <img class="user-head" src="../../assets/user.jpg">
            <div class="user-info">
               <div class="name">小红</div>
               <span class="time">14：25</span>
               <div class="message">好的</div>
            </div>
         </div>
      </div>
    </div>
    <div class="right-part">
      <ChatPage ></ChatPage>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import ChatPage from '@/components/ChatPage.vue'
const keyword=ref('')
</script>

<style lang="scss" scoped>
.home{
   position: relative;
   width: 100%;
   height: 100%;
   display: flex;
   align-items: center;
   background-color: #f5f5f5;
   font-size: 12px;
   .left-part{
      width: 15rem;
      height: 100%;
      border-right: 1px solid #c8c7c6;
      position: relative;
      .input-icon{
         position: absolute;
         left: 1.2rem;
      }
      .search-box{
         display: flex;
         align-items: center;
         padding: 1rem 0.5rem 0.5rem 1rem;
         
         .search-input{
            flex: 1;
            background-color: #e2e2e2;
            border: none;
            padding: 0.2rem 0.2rem 0.2rem 1.5rem;
            border-radius: 3px;
         }
         .add-btn{
            margin: 0 0.5rem;
            background-color: #e2e2e2;
            width: 1.5rem;
            height: 1.5rem;
            line-height: 1.5rem;
            text-align: center;
            border-radius: 3px;
         }
      }
      .user-list{
         background-color: #e7e5e5;
         width: 100%;
         height: calc(100% - 3rem);
         overflow: auto;
         .user{
            width: 100%;
            height: 4rem;
            padding: 0.5rem 1rem;
            display: flex;
            align-items: center;
            .user-head{
               width: 3rem;
               height: 3rem;
            }
            .user-info{
               flex: 1;
               position: relative;
               .name{
                  width: 100%;
                  height: 1.5rem;
                  line-height: 1.5rem;
                  padding-left: 0.5rem;
                  font-size: 14px;
               }
               .time{
                  position: absolute;
                  right: 0;
                  top: 0.2rem;
                  font-size: 12px;
                  color: #aaa;
               }
               .message{
                  width: 100%;
                  height: 1.5rem;
                  line-height: 2rem;
                  color: #aaa;
                  padding-left: 0.5rem;
               }
            }
         }
      }
      .active{
         background-color: #c7c6c6;
      }
   }
   .right-part{
      width: 100%;
      height: 100%;
   }
}
</style>
