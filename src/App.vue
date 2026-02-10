<script setup lang="ts">
import { onMounted } from 'vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { useQuiz } from '@/composables/useQuiz'

/**
 * 应用根组件
 * 初始化状态管理并使用路由系统
 */
const { initFromStorage } = useQuiz()

// 组件挂载时尝试恢复状态
onMounted(() => {
  initFromStorage()
})
</script>

<template>
  <DefaultLayout>
    <router-view />
  </DefaultLayout>
</template>

<style>
/* 路由过渡动画 */
.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity 0.3s ease;
}

.router-fade-enter-from,
.router-fade-leave-to {
  opacity: 0;
}
</style>
