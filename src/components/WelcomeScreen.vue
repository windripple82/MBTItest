<script setup lang="ts">
import { ref } from 'vue';
defineEmits(['start']);

const versions = [60, 93, 144] as const;
const selectedVersion = ref<60 | 93 | 144>(60);

const getTimeEstimate = (v: number) => {
  if (v === 60) return '~10分钟';
  if (v === 93) return '~15分钟';
  return '~25分钟';
};
</script>

<template>
  <div class="text-center space-y-12 animate-fade-in flex flex-col items-center">
    <!-- Hero Section -->
    <div class="relative group">
      <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-40 group-hover:opacity-60 transition duration-1000"></div>
      <div class="relative px-8 py-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl leading-none flex items-center justify-center">
        <span class="text-5xl md:text-7xl font-bold text-white tracking-tight drop-shadow-lg">
          MBTI 职业性格测试
        </span>
      </div>
    </div>
    
    <p class="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
      通过我们严谨的 60 道心理测试题，深入探索你真实的性格类型。<br class="hidden md:block"/>
      发掘你的<span class="text-white font-medium">核心优势</span>、<span class="text-white font-medium">情感模式</span>与<span class="text-white font-medium">职业潜能</span>。
    </p>

    <div class="space-y-6 w-full max-w-md">
      <div class="grid grid-cols-3 gap-3 p-1 bg-white/10 rounded-xl backdrop-blur-sm border border-white/5">
        <button 
          v-for="v in versions" 
          :key="v"
          @click="selectedVersion = v"
          :class="[
            'py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200',
            selectedVersion === v 
              ? 'bg-[#007AFF] text-white shadow-lg shadow-blue-500/30' 
              : 'text-gray-400 hover:text-white hover:bg-white/5'
          ]"
        >
          {{ v }}道题
          <span class="block text-[10px] opacity-60 font-normal mt-0.5">{{ getTimeEstimate(v) }}</span>
        </button>
      </div>

      <button 
        @click="$emit('start', selectedVersion)" 
        class="group relative w-full inline-flex items-center justify-center px-10 py-4 text-xl font-semibold text-white transition-all duration-300 bg-[#007AFF] hover:bg-[#0062cc] active:scale-95 rounded-full shadow-lg hover:shadow-blue-500/30 ring-1 ring-white/20"
      >
        开始测试
        <svg class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
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
