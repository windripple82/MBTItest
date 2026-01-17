<script setup lang="ts">
import { ref, computed } from 'vue';
import WelcomeScreen from './components/WelcomeScreen.vue';
import QuizCard from './components/QuizCard.vue';
import ResultView from './components/ResultView.vue';
import { questions } from './data/questions';
import { calculateMBTI, type MBTIResult } from './utils/mbtiLogic';

const step = ref<'welcome' | 'quiz' | 'result'>('welcome');
const currentQuestionIndex = ref(0);
const answers = ref<string[]>([]);
const result = ref<MBTIResult | null>(null);

const currentQuestion = computed(() => questions[currentQuestionIndex.value]);

const startQuiz = () => {
  step.value = 'quiz';
  currentQuestionIndex.value = 0;
  answers.value = [];
  result.value = null;
};

const handleAnswer = (value: string) => {
  answers.value.push(value);
  if (currentQuestionIndex.value < questions.length - 1) {
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
  <div class="min-h-screen bg-gray-900 text-white font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden">
    <div class="container mx-auto px-4 py-8 min-h-screen flex flex-col justify-center">
      
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
