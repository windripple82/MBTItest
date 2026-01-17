<script setup lang="ts">
defineEmits(['start']);
</script>

<template>
  <div class="text-center space-y-8 animate-fade-in">
    <div class="relative">
      <div class="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 animate-pulse"></div>
      <div class="relative px-7 py-4 bg-gray-900 rounded-lg leading-none flex items-center justify-center space-x-4">
        <span class="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          MBTI Professional
        </span>
      </div>
    </div>
    
    <p class="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
      Discover your true personality type with our scientific 60-question assessment. 
      Explore your strengths, relationships, and career paths.
    </p>

    <button 
      @click="$emit('start')" 
      class="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-indigo-600 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500 transform hover:scale-105"
    >
      Start Assessment
      <svg class="w-5 h-5 ml-2 -mr-1 transition-transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>
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
