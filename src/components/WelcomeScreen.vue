<script setup lang="ts">
import { ref } from 'vue'
import { useQuiz } from '@/composables/useQuiz'
import type { TestVersion } from '@/data/questions'

/**
 * 欢迎页面组件
 * 提供版本选择和开始测试功能
 */
const { startQuiz } = useQuiz()

const versions = [60, 93, 144] as const
const selectedVersion = ref<TestVersion>(60)

const getTimeEstimate = (v: number) => {
  if (v === 60) return '~10分钟'
  if (v === 93) return '~15分钟'
  return '~25分钟'
}

const handleStart = () => {
  startQuiz(selectedVersion.value)
}
</script>

<template>
  <div class="text-center space-y-16 animate-fade-in flex flex-col items-center max-w-5xl mx-auto">
    <!-- Hero Section -->
    <div class="relative group cursor-default">
      <div class="absolute -inset-4 bg-gradient-to-r from-brand-500 via-purple-500 to-pink-500 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000 animate-pulse-slow"></div>
      <div class="relative px-12 py-10 glass rounded-[2rem] flex flex-col items-center justify-center border-white/20">
        <div class="text-brand-300 font-medium tracking-[0.2em] mb-4 uppercase text-sm">Professional Assessment</div>
        <h1 class="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-100 to-white tracking-tight font-display drop-shadow-sm">
          MBTI
        </h1>
        <div class="h-px w-24 bg-gradient-to-r from-transparent via-white/50 to-transparent my-6"></div>
        <span class="text-xl md:text-2xl font-light text-gray-200 tracking-widest font-display">
          职业性格测试
        </span>
      </div>
    </div>

    <p class="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light tracking-wide bg-gradient-to-b from-white/10 to-transparent p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
      探索你的<span class="text-brand-300 font-medium">核心优势</span>。解锁你的<span class="text-purple-300 font-medium">无限潜能</span>。<br class="hidden md:block"/>
      基于荣格心理学理论的专业人格测评工具。
    </p>

    <div class="space-y-8 w-full max-w-xl">
      <div class="grid grid-cols-3 gap-4 p-2 glass rounded-2xl">
        <button
          v-for="v in versions"
          :key="v"
          @click="selectedVersion = v"
          :class="[
            'relative py-4 px-4 rounded-xl text-sm font-medium transition-all duration-300 overflow-hidden group',
            selectedVersion === v
              ? 'bg-brand-600/20 text-white shadow-inner border border-brand-500/50'
              : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
          ]"
        >
          <div v-if="selectedVersion === v" class="absolute inset-0 bg-brand-400/10 blur-sm"></div>
          <span class="relative z-10 text-lg font-display font-bold">{{ v }}</span>
          <span class="relative z-10 block text-[10px] opacity-60 font-sans mt-0.5 uppercase tracking-wide">{{ getTimeEstimate(v) }}</span>
        </button>
      </div>

      <button
        @click="handleStart"
        class="group relative w-full inline-flex items-center justify-center px-12 py-5 text-xl font-bold text-white transition-all duration-300 bg-gradient-to-r from-brand-600 to-blue-700 hover:from-brand-500 hover:to-blue-600 rounded-2xl shadow-xl hover:shadow-brand-500/25 ring-1 ring-white/10 overflow-hidden"
      >
        <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <span class="relative z-10 flex items-center gap-3">
          开始探索
          <svg class="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1s cubic-bezier(0.16, 1, 0.3, 1);
}
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
</style>
