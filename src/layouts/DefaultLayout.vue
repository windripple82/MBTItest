<script setup lang="ts">
/**
 * 默认布局组件
 * 处理全局背景、动画效果和内容容器
 */
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-white font-sans selection:bg-brand-500 selection:text-white overflow-x-hidden relative bg-noise">
    <!-- Ambient Background Mesh - 极光背景 -->
    <div class="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div class="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-brand-900/40 rounded-full blur-[120px] mix-blend-screen animate-float"></div>
      <div class="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-purple-900/40 rounded-full blur-[100px] mix-blend-screen animate-float-delayed"></div>
      <div class="absolute bottom-[-10%] left-[20%] w-[60%] h-[60%] bg-blue-900/30 rounded-full blur-[130px] mix-blend-screen animate-pulse-slow"></div>
    </div>

    <!-- 内容容器 -->
    <div class="container mx-auto px-4 py-8 min-h-screen flex flex-col justify-center relative z-10">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
/* 动画定义 */
@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(30px, -30px) scale(1.1);
  }
}

@keyframes float-delayed {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(-20px, 20px) scale(1.05);
  }
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.1);
  }
}

.animate-float {
  animation: float 20s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 25s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 15s ease-in-out infinite;
}
</style>
