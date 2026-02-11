<script setup lang="ts">
import { useQuiz } from '../composables/useQuiz'
import html2canvas from 'html2canvas'

/**
 * 结果展示组件
 * 显示 MBTI 测试结果并支持保存图片
 */
const { result, restartQuiz } = useQuiz()

const downloadImage = async () => {
  const element = document.getElementById('result-capture-area')
  if (!element) return

  try {
    const canvas = await html2canvas(element, {
      backgroundColor: '#000000',
      scale: 2,
      useCORS: true
    })

    const link = document.createElement('a')
    link.download = `MBTI-Result-${result.value?.type || 'unknown'}-${new Date().getTime()}.png`
    link.href = canvas.toDataURL('image/png')
    link.click()
  } catch (error) {
    console.error('生成图片失败:', error)
    alert('图片生成失败，请重试')
  }
}
</script>

<template>
  <div v-if="result" class="w-full max-w-4xl mx-auto px-4 animate-fade-in pb-12">
    <div id="result-capture-area" class="p-8 md:p-16 rounded-[3rem] bg-gradient-to-b from-slate-900 to-black border border-white/10 relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div class="absolute inset-0 bg-noise opacity-30 mix-blend-overlay"></div>

      <div class="text-center mb-20 relative z-10">
        <h2 class="text-brand-400 text-sm font-bold mb-6 tracking-[0.3em] uppercase font-display">Your Personality Archetype</h2>

        <div class="relative inline-block">
          <h1 class="text-8xl md:text-[10rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-100 to-white tracking-tighter drop-shadow-2xl font-display mb-2 leading-none">
            {{ result.type }}
          </h1>
          <div class="absolute -inset-10 bg-brand-500/20 blur-[60px] rounded-full -z-10 animate-glow"></div>
        </div>

        <div class="glass rounded-2xl p-10 border-white/10 max-w-3xl mx-auto mt-12 relative overflow-hidden">
          <div class="absolute top-0 left-0 w-1 h-full bg-brand-500"></div>
          <p class="text-xl md:text-2xl text-gray-200 leading-relaxed font-light text-left pl-4">
            {{ result.description }}
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 relative z-10">
        <!-- Dimensions -->
        <div v-for="(val, key) in result.scores" :key="key" class="glass rounded-2xl p-8 border border-white/5 hover:bg-white/5 transition-colors duration-300">
          <div class="flex justify-between items-center mb-6">
            <span class="text-2xl font-bold font-display" :class="val.char === key[0] ? 'text-white drop-shadow-md' : 'text-gray-600'">{{ key[0] }}</span>
            <span class="text-2xl font-bold font-display" :class="val.char === key[1] ? 'text-white drop-shadow-md' : 'text-gray-600'">{{ key[1] }}</span>
          </div>

          <div class="relative h-2 bg-gray-800 rounded-full overflow-hidden">
            <div class="absolute inset-0 flex items-center">
              <!-- Left Bar -->
              <div
                class="h-full bg-gradient-to-r from-brand-400 to-brand-600 shadow-[0_0_10px_rgba(56,189,248,0.4)] transition-all duration-1000 ease-out rounded-r-full"
                :style="{ width: `${(val.char === key[0] ? val.score : val.otherScore) / val.total * 100}%` }"
              ></div>
              <!-- Right Bar -->
              <div
                class="h-full bg-gradient-to-l from-purple-400 to-purple-600 shadow-[0_0_10px_rgba(168,85,247,0.4)] transition-all duration-1000 ease-out ml-auto rounded-l-full"
                :style="{ width: `${(val.char === key[1] ? val.score : val.otherScore) / val.total * 100}%` }"
              ></div>
            </div>
          </div>

          <div class="flex justify-between mt-4 text-xs font-bold text-gray-400 font-mono tracking-wider">
            <span :class="{'text-brand-400': val.char === key[0]}">{{ Math.round((val.char === key[0] ? val.score : val.otherScore) / val.total * 100) }}%</span>
            <span :class="{'text-purple-400': val.char === key[1]}">{{ Math.round((val.char === key[1] ? val.score : val.otherScore) / val.total * 100) }}%</span>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center flex flex-col md:flex-row gap-6 justify-center mt-12">
      <button
        @click="downloadImage"
        class="px-10 py-4 bg-white text-black hover:bg-gray-100 rounded-full font-bold transition-all duration-300 shadow-xl hover:shadow-white/20 active:scale-95 flex items-center justify-center gap-2 group"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
        保存结果图片
      </button>
      <button
        @click="restartQuiz"
        class="px-10 py-4 bg-white/5 hover:bg-white/10 text-white rounded-full font-semibold transition-all duration-300 border border-white/10 backdrop-blur-md active:scale-95 flex items-center justify-center gap-2"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
        重新测试
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
