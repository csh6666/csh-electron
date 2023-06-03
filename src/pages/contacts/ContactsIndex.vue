<template>
   <div class="home">
     <div class="left-part">
       <div class="search-box">
          <Icon type="ios-search" class="input-icon" />
          <input class="search-input" v-model="keyword" placeholder="搜索">
          <span class="add-btn">+</span>
       </div>
       <div class="user-list">
          <div class="user" :class="activeId==item.id?'active':''" v-for="item in user" :key="item.id" @click="selectItem(item)">
             <img class="user-head" :src="item.head">
             <div class="user-info">
                <div class="name">{{item.username}}</div>
                <span class="time">{{item.time}}</span>
                <div class="message">{{item.content}}</div>
             </div>
          </div>
       </div>
     </div>
     <div class="right-part">
      
     </div>
   </div>
 </template>
 
 <script setup>
 import {ref,reactive} from 'vue'
 const keyword=ref('')
 const activeId=ref('1')
 const user=reactive([
    {id:'1',username:'小红',time:'14：25',content:'好的',head:require('../../assets/user.jpg')},
    {id:'2',username:'小杰',time:'14：25',content:'好的',head:require('../../assets/user1.jpg')},
    {id:'3',username:'小红',time:'14：25',content:'好的',head:require('../../assets/user.jpg')},
    {id:'4',username:'小杰',time:'14：25',content:'好的',head:require('../../assets/user1.jpg')},
    {id:'5',username:'小红',time:'14：25',content:'好的',head:require('../../assets/user.jpg')},
    {id:'6',username:'小杰',time:'14：25',content:'好的',head:require('../../assets/user1.jpg')},
    {id:'7',username:'小红',time:'14：25',content:'好的',head:require('../../assets/user.jpg')},
    {id:'8',username:'小杰',time:'14：25',content:'好的',head:require('../../assets/user1.jpg')},
    {id:'9',username:'小红',time:'14：25',content:'好的',head:require('../../assets/user.jpg')},
    {id:'10',username:'小杰',time:'14：25',content:'好的',head:require('../../assets/user1.jpg')},
    {id:'11',username:'小红',time:'14：25',content:'好的',head:require('../../assets/user.jpg')},
    {id:'12',username:'小杰',time:'14：25',content:'好的',head:require('../../assets/user1.jpg')},
    {id:'13',username:'小红',time:'14：25',content:'好的',head:require('../../assets/user.jpg')},
    {id:'14',username:'小杰',time:'14：25',content:'好的',head:require('../../assets/user1.jpg')},
    {id:'15',username:'小红',time:'14：25',content:'好的',head:require('../../assets/user.jpg')},
    {id:'16',username:'小杰',time:'14：25',content:'好的',head:require('../../assets/user1.jpg')},
    {id:'17',username:'小红',time:'14：25',content:'好的',head:require('../../assets/user.jpg')},
    {id:'18',username:'小杰',time:'14：25',content:'好的',head:require('../../assets/user1.jpg')},
 ]);
 const selectItem=(item)=>{
    activeId.value=item.id;
 }
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
                width: 2.5rem;
                height: 2.5rem;
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
 