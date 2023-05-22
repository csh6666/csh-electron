<template>
  <div class="hello">
    {{ store.counter }}
  </div>
</template>

<script setup>
import { useStore } from '@/store/index'
 const store=useStore()
</script>

<style lang="scss" scoped>

</style>
