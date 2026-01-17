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
  <div class="w-full max-w-3xl mx-auto px-4 animate-slide-up">
    <!-- Progress -->
    <div class="mb-8">
      <div class="flex justify-between text-sm text-gray-400 mb-2">
        <span>Question {{ currentStep }} / {{ totalSteps }}</span>
        <span>{{ Math.round(((currentStep || 0) / (totalSteps || 1)) * 100) }}%</span>
      </div>
      <div class="h-2 bg-gray-700 rounded-full overflow-hidden">
        <div 
          class="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500 ease-out"
          :style="{ width: `${((currentStep || 0) / (totalSteps || 1)) * 100}%` }"
        ></div>
      </div>
    </div>

    <!-- Question -->
    <div class="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 md:p-12 shadow-2xl">
      <h2 class="text-2xl md:text-3xl font-bold text-white mb-8 md:mb-12 text-center leading-relaxed">
        {{ question.text }}
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button 
          v-for="opt in question.options" 
          :key="opt.value"
          @click="$emit('answer', opt.value)"
          class="group flex flex-col items-center justify-center p-6 md:p-8 rounded-xl bg-gray-700/30 border border-gray-600 hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 transform hover:-translate-y-1 text-center"
        >
          <span class="text-lg md:text-xl font-medium text-gray-200 group-hover:text-white transition-colors">
            {{ opt.text }}
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-slide-up {
  animation: slideUp 0.5s ease-out;
}
@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
