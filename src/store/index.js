import { defineStore } from 'pinia'

// 第一个参数是应用程序中 store 的唯一 id
export const useStore = defineStore('main', {
   state: () => ({
      counter: 0,
    }),
    getters: {
      doubleCount: () => this.counter * 2,
    },
    actions: {
      increment() {
        this.counter++
      },
      randomizeCounter() {
        this.counter = Math.round(100 * Math.random())
      },
    },
})