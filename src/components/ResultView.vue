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
    <div class="text-center mb-16 relative">
      <!-- Glow effect behind text -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/20 blur-[100px] rounded-full"></div>
      
      <h2 class="text-gray-400 text-sm font-semibold mb-4 tracking-[0.2em] uppercase relative z-10">您的性格类型 (Your Type)</h2>
      <h1 class="text-7xl md:text-9xl font-bold text-white mb-8 tracking-tighter drop-shadow-2xl relative z-10">
        {{ result.type }}
      </h1>
      <div class="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 max-w-3xl mx-auto relative z-10">
        <p class="text-xl md:text-2xl text-gray-200 leading-relaxed font-light">
          {{ result.description }}
        </p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
      <!-- Dimensions -->
      <div v-for="(val, key) in result.scores" :key="key" class="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/5 shadow-lg">
        <div class="flex justify-between items-center mb-5">
          <span class="text-lg font-bold" :class="val.char === key[0] ? 'text-white' : 'text-gray-500'">{{ key[0] }}</span>
          <span class="text-lg font-bold" :class="val.char === key[1] ? 'text-white' : 'text-gray-500'">{{ key[1] }}</span>
        </div>
        
        <div class="relative h-3 bg-gray-800/50 rounded-full overflow-hidden shadow-inner">
            <div class="absolute inset-0 flex">
                <div 
                  class="h-full bg-gradient-to-r from-pink-500 to-rose-500 transition-all duration-1000 ease-out"
                  :style="{ width: `${(val.char === key[0] ? val.score : val.otherScore) / val.total * 100}%` }"
                ></div>
                <!-- Middle separator/gap implicitly handled by remaining space -->
                <div 
                  class="h-full bg-gradient-to-l from-indigo-500 to-blue-500 transition-all duration-1000 ease-out ml-auto"
                  :style="{ width: `${(val.char === key[1] ? val.score : val.otherScore) / val.total * 100}%` }"
                ></div>
            </div>
        </div>
        
        <div class="flex justify-between mt-3 text-xs font-medium text-gray-400 font-mono">
           <span>{{ Math.round((val.char === key[0] ? val.score : val.otherScore) / val.total * 100) }}%</span>
           <span>{{ Math.round((val.char === key[1] ? val.score : val.otherScore) / val.total * 100) }}%</span>
        </div>
      </div>
    </div>

    <div class="text-center">
      <button 
        @click="$emit('restart')"
        class="px-10 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold transition-all duration-200 border border-white/10 backdrop-blur-md active:scale-95"
      >
        重新测试 (Retake)
      </button>
    </div>
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
