import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import { questions, getQuestions, type TestVersion, type Question } from '@/data/questions'
import { calculateMBTI, type MBTIResult } from '@/utils/mbtiLogic'

// 本地存储键名
const STORAGE_KEY = 'mbti-quiz-state'

export function useQuiz() {
  const router = useRouter()

  // 状态定义
  const currentQuestionIndex = ref(0)
  const answers = ref<string[]>([])
  const result = ref<MBTIResult | null>(null)
  const currentQuestions = ref<Question[]>(questions)

  // 计算属性
  const currentQuestion = computed(() => currentQuestions.value[currentQuestionIndex.value])
  const progress = computed(() => ({
    current: currentQuestionIndex.value + 1,
    total: currentQuestions.value.length,
    percentage: ((currentQuestionIndex.value + 1) / currentQuestions.value.length) * 100
  }))

  // 初始化：从本地存储恢复状态
  const initFromStorage = () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const state = JSON.parse(saved)
        currentQuestionIndex.value = state.currentQuestionIndex || 0
        answers.value = state.answers || []
        currentQuestions.value = state.currentQuestions || questions
      }
    } catch (error) {
      console.error('从本地存储恢复状态失败:', error)
    }
  }

  // 持久化状态到本地存储
  watch(
    [currentQuestionIndex, answers, currentQuestions],
    ([index, ans, qs]) => {
      try {
        const stateToSave = {
          currentQuestionIndex: index,
          answers: ans,
          currentQuestions: qs
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave))
      } catch (error) {
        console.error('保存状态到本地存储失败:', error)
      }
    },
    { deep: true }
  )

  // 开始测试
  const startQuiz = (version: TestVersion = 60) => {
    currentQuestions.value = getQuestions(version)
    currentQuestionIndex.value = 0
    answers.value = []
    result.value = null
    clearStorage()
    router.push('/quiz')
  }

  // 处理答案
  const handleAnswer = (value: string) => {
    answers.value.push(value)

    if (currentQuestionIndex.value < currentQuestions.value.length - 1) {
      currentQuestionIndex.value++
    } else {
      finishQuiz()
    }
  }

  // 完成测试
  const finishQuiz = () => {
    result.value = calculateMBTI(answers.value)
    clearStorage()
    router.push('/result')
  }

  // 重新测试
  const restartQuiz = () => {
    clearStorage()
    currentQuestionIndex.value = 0
    answers.value = []
    result.value = null
    router.push('/')
  }

  // 清除本地存储
  const clearStorage = () => {
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch (error) {
      console.error('清除本地存储失败:', error)
    }
  }

  // 上一个问题
  const previousQuestion = () => {
    if (currentQuestionIndex.value > 0) {
      currentQuestionIndex.value--
      answers.value.pop()
    }
  }

  // 跳转到指定问题
  const goToQuestion = (index: number) => {
    if (index >= 0 && index < currentQuestions.value.length) {
      currentQuestionIndex.value = index
      // 移除多余的答案
      answers.value = answers.value.slice(0, index)
    }
  }

  return {
    // 状态
    currentQuestionIndex,
    answers,
    result,
    currentQuestions,
    currentQuestion,
    progress,

    // 方法
    initFromStorage,
    startQuiz,
    handleAnswer,
    finishQuiz,
    restartQuiz,
    clearStorage,
    previousQuestion,
    goToQuestion
  }
}
