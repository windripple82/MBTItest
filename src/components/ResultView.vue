<script setup lang="ts">
import { PropType } from 'vue';
import type { MBTIResult } from '../utils/mbtiLogic';

defineProps({
  result: {
    type: Object as PropType<MBTIResult>,
    required: true
  }
});
defineEmits(['restart']);
</script>

<template>
  <div class="w-full max-w-4xl mx-auto px-4 animate-fade-in pb-12">
    <div class="text-center mb-12">
      <h2 class="text-gray-400 text-lg mb-4 tracking-wider uppercase">Your Personality Type</h2>
      <h1 class="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-6">
        {{ result.type }}
      </h1>
      <p class="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
        {{ result.description }}
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      <!-- Dimensions -->
      <div v-for="(val, key) in result.scores" :key="key" class="bg-gray-800/40 rounded-xl p-6 border border-gray-700">
        <div class="flex justify-between items-center mb-4 text-lg font-bold">
          <span :class="val.char === key[0] ? 'text-pink-500' : 'text-gray-500'">{{ key[0] }}</span>
          <span :class="val.char === key[1] ? 'text-purple-500' : 'text-gray-500'">{{ key[1] }}</span>
        </div>
        <div class="relative h-4 bg-gray-700 rounded-full overflow-hidden">
            <div class="absolute inset-0 flex">
                <div 
                  class="h-full bg-pink-500 transition-all duration-1000"
                  :style="{ width: `${(val.char === key[0] ? val.score : val.otherScore) / val.total * 100}%` }"
                ></div>
                <div 
                  class="h-full bg-purple-500 transition-all duration-1000 flex-1"
                ></div>
            </div>
        </div>
        <div class="flex justify-between mt-2 text-xs text-gray-400">
           <span>{{ Math.round((val.char === key[0] ? val.score : val.otherScore) / val.total * 100) }}%</span>
           <span>{{ Math.round((val.char === key[1] ? val.score : val.otherScore) / val.total * 100) }}%</span>
        </div>
      </div>
    </div>

    <div class="text-center">
      <button 
        @click="$emit('restart')"
        class="px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-full font-bold transition-colors"
      >
        Retake Test
      </button>
    </div>
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
