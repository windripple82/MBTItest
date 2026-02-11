import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

// 懒加载组件以提升性能
const WelcomeScreen = () => import('../components/WelcomeScreen.vue')
const QuizCard = () => import('../components/QuizCard.vue')
const ResultView = () => import('../components/ResultView.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'welcome',
    component: WelcomeScreen,
    meta: {
      title: 'MBTI 职业性格测试'
    }
  },
  {
    path: '/quiz',
    name: 'quiz',
    component: QuizCard,
    meta: {
      title: '答题中'
    }
  },
  {
    path: '/result',
    name: 'result',
    component: ResultView,
    meta: {
      title: '测试结果'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// 路由守卫：设置页面标题
router.beforeEach((to, _from, next) => {
  document.title = `${to.meta.title || 'MBTI Test'} - MBTItest`
  next()
})

export default router
