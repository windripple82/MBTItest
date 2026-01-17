<script setup lang="ts">
import { PropType } from 'vue';
import type { Question } from '../data/questions';

defineProps({
  question: {
    type: Object as PropType<Question>,
    required: true
  },
  currentStep: Number,
  totalSteps: Number
});

defineEmits(['answer']);
</script>

<template>
  <div class="w-full max-w-2xl mx-auto px-4 animate-slide-up">
    <!-- Progress -->
    <div class="mb-10">
      <div class="flex justify-between text-sm font-medium text-gray-400 mb-3 px-1">
        <span>问题 {{ currentStep }} / {{ totalSteps }}</span>
        <span>{{ Math.round(((currentStep || 0) / (totalSteps || 1)) * 100) }}%</span>
      </div>
      <div class="h-2 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm">
        <div 
          class="h-full bg-[#007AFF] shadow-[0_0_10px_rgba(0,122,255,0.5)] transition-all duration-500 ease-out rounded-full"
          :style="{ width: `${((currentStep || 0) / (totalSteps || 1)) * 100}%` }"
        ></div>
      </div>
    </div>

    <!-- Question -->
    <div class="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl ring-1 ring-black/5">
      <h2 class="text-2xl md:text-3xl font-semibold text-white mb-10 text-center leading-snug tracking-tight">
        {{ question.text }}
      </h2>

      <div class="grid grid-cols-1 gap-4">
        <button 
          v-for="opt in question.options" 
          :key="opt.value"
          @click="$emit('answer', opt.value)"
          class="group relative w-full p-5 rounded-2xl bg-white/5 hover:bg-white/10 active:bg-white/20 border border-white/5 transition-all duration-200 text-left flex items-center shadow-sm hover:shadow-md active:scale-[0.98]"
        >
          <div class="w-6 h-6 rounded-full border-2 border-white/30 mr-4 group-hover:border-[#007AFF] group-hover:bg-[#007AFF]/20 transition-colors"></div>
          <span class="text-lg text-gray-100 font-medium group-hover:text-white">
            {{ opt.text }}
          </span>
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
