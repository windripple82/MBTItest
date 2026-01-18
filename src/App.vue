<script setup lang="ts">
import { ref, computed } from 'vue';
import WelcomeScreen from './components/WelcomeScreen.vue';
import QuizCard from './components/QuizCard.vue';
import ResultView from './components/ResultView.vue';
import { questions, getQuestions, type TestVersion, type Question } from './data/questions';
import { calculateMBTI, type MBTIResult } from './utils/mbtiLogic';

const step = ref<'welcome' | 'quiz' | 'result'>('welcome');
const currentQuestionIndex = ref(0);
const answers = ref<string[]>([]);
const result = ref<MBTIResult | null>(null);
const currentQuestions = ref<Question[]>(questions);

const currentQuestion = computed(() => currentQuestions.value[currentQuestionIndex.value]);

const startQuiz = (version: TestVersion = 60) => {
  currentQuestions.value = getQuestions(version);
  step.value = 'quiz';
  currentQuestionIndex.value = 0;
  answers.value = [];
  result.value = null;
};

const handleAnswer = (value: string) => {
  answers.value.push(value);
  if (currentQuestionIndex.value < currentQuestions.value.length - 1) {
    currentQuestionIndex.value++;
  } else {
    finishQuiz();
  }
};

const finishQuiz = () => {
  result.value = calculateMBTI(answers.value);
  step.value = 'result';
};
</script>

<template>
  <div class="min-h-screen bg-[#000000] text-white font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden relative">
    <!-- Ambient Background Mesh -->
    <div class="fixed inset-0 z-0 pointer-events-none">
        <div class="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/30 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>
        <div class="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/30 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow delay-1000"></div>
    </div>

    <div class="container mx-auto px-4 py-8 min-h-screen flex flex-col justify-center relative z-10">
      
      <transition name="fade" mode="out-in">
        <WelcomeScreen 
          v-if="step === 'welcome'" 
          @start="startQuiz" 
        />
        
        <QuizCard 
          v-else-if="step === 'quiz'" 
          :question="currentQuestion"
          :current-step="currentQuestionIndex + 1"
          :total-steps="questions.length"
          @answer="handleAnswer"
        />
        
        <ResultView 
          v-else-if="step === 'result' && result" 
          :result="result"
          @restart="step = 'welcome'"
        />
      </transition>

    </div>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
