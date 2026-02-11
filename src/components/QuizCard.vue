<script setup lang="ts">
import { computed } from 'vue'
import { useQuiz } from '../composables/useQuiz'

/**
 * 答题卡片组件
 * 显示当前问题并处理用户选择
 */
const {
  currentQuestion,
  progress,
  handleAnswer,
  previousQuestion,
  restartQuiz
} = useQuiz()

const progressPercentage = computed(() => Math.round(progress.value.percentage))
const canGoBack = computed(() => progress.value.current > 1)

const handleOptionClick = (value: string) => {
  handleAnswer(value)
}
</script>

<template>
  <div class="w-full max-w-2xl mx-auto px-4 animate-slide-up">
    <!-- Progress -->
    <div class="mb-12 relative">
      <div class="flex justify-between text-sm font-medium text-gray-400 mb-4 px-1 tracking-wide font-display">
        <span>QUESTION {{ progress.current }} / {{ progress.total }}</span>
        <span>{{ progressPercentage }}%</span>
      </div>
      <div class="h-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
        <div
          class="h-full bg-gradient-to-r from-brand-400 to-purple-500 shadow-[0_0_15px_rgba(56,189,248,0.5)] transition-all duration-700 ease-out rounded-full relative"
          :style="{ width: `${progressPercentage}%` }"
        >
          <div class="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)] blur-[1px]"></div>
        </div>
      </div>
    </div>

    <!-- Question -->
    <div v-if="currentQuestion" class="glass rounded-[2rem] p-10 md:p-14 relative overflow-hidden group">
      <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

      <h2 class="text-3xl md:text-4xl font-bold text-white mb-12 text-center leading-tight tracking-tight font-display drop-shadow-sm">
        {{ currentQuestion.text }}
      </h2>

      <div class="grid grid-cols-1 gap-5">
        <button
          v-for="opt in currentQuestion.options"
          :key="opt.value"
          @click="handleOptionClick(opt.value)"
          class="group/btn relative w-full p-6 rounded-2xl bg-white/5 hover:bg-white/10 active:bg-white/20 border border-white/5 transition-all duration-300 text-left flex items-center shadow-lg hover:shadow-brand-500/10 active:scale-[0.99] overflow-hidden"
        >
          <!-- Hover Gradient Background -->
          <div class="absolute inset-0 bg-gradient-to-r from-brand-500/0 via-brand-500/0 to-purple-500/0 group-hover/btn:from-brand-500/10 group-hover/btn:via-transparent group-hover/btn:to-transparent transition-all duration-500"></div>

          <div class="relative w-8 h-8 rounded-full border border-white/30 mr-6 group-hover/btn:border-brand-400 group-hover/btn:scale-110 transition-all duration-300 flex items-center justify-center">
            <div class="w-4 h-4 rounded-full bg-brand-400 opacity-0 group-hover/btn:opacity-100 transition-all duration-300 scale-0 group-hover/btn:scale-100"></div>
          </div>

          <span class="relative text-xl text-gray-200 font-light group-hover/btn:text-white transition-colors">
            {{ opt.text }}
          </span>
        </button>
      </div>

      <!-- Navigation Buttons -->
      <div v-if="canGoBack" class="flex justify-center gap-4 mt-8">
        <button
          @click="previousQuestion"
          class="px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl font-medium transition-all duration-300 border border-white/10 backdrop-blur-md active:scale-95"
        >
          上一题
        </button>
        <button
          @click="restartQuiz"
          class="px-6 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-300 rounded-xl font-medium transition-all duration-300 border border-red-500/20 backdrop-blur-md active:scale-95"
        >
          重新开始
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-slide-up {
  animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
@keyframes slideUp {
  from { opacity: 0; transform: translateY(40px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
</style>
