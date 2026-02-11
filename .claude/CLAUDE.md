# MBTItest 项目约定

## 项目简介
现代化、高颜值的MBTI职业性格测试应用。采用iOS风格的极光玻璃拟态设计(Glassmorphism)，提供流畅的交互体验和科学的性格分析。

## 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| Vue | 3.x | 核心框架 |
| TypeScript | 5.x | 类型系统 |
| Tailwind CSS | 3.x | 样式系统 |
| Vite | 6.x | 构建工具 |

## 项目结构

```
src/
├── components/      # UI组件 (Welcome, Quiz, Result)
├── data/           # 题目数据 (questions.ts)
├── utils/          # 核心算法 (mbtiLogic.ts)
└── App.vue         # 根组件与主布局
```

## 编码规范

### Vue + TypeScript规范
- 使用 `<script setup>` 语法糖
- 所有组件必须使用 TypeScript
- Props必须定义类型
- 事件使用 `emit` 定义类型

### 样式规范
- 优先使用 Tailwind CSS
- 自定义样式使用 `<style scoped>`
- 颜色使用CSS变量定义主题
- 动画使用 Tailwind 的 animate-* 或 transition-*

### 状态管理
- 优先使用 Vue Reactivity API
- 复杂状态考虑 Pinia
- 避免直接修改 props

## 设计原则

### Glassmorphism 设计语言
- **Aurora Deep**: 深色极光设计语言
- **动态网格背景**: Floating Mesh 动画
- **噪点纹理**: Noise Texture 叠加
- **高级玻璃拟态**: 细腻的光影反射与边缘高光

### 响应式设计
- 移动优先
- 断点: `sm:` (640px), `md:` (768px), `lg:` (1024px)
- 测试多种设备尺寸

## 开发工作流

### 标准工作流命令
```
/plan          # 规划任务 → 调用 planner agent
/tdd           # 测试驱动开发 → RED→GREEN→REFACTOR
/verify        # 验证实现 → 对比需求
/code-review   # 代码审查 → reviewer + security agent
/checkpoint    # 记录快照 → 保存思路
```

### Git 工作流
1. 使用 `/plan` 规划新功能
2. 创建功能分支: `feature/功能名`
3. 使用 TDD 循环开发
4. 使用 `/code-review` 审查代码
5. 提交 PR 并合并

### 全局配置引用
- **全局规范**: `D:\AICoding\ai-coding-standards\global_rules.md`
- **全局Agents**: `~\.claude\agents\`
- **全局Commands**: `~\.claude\commands\`
- **全局Rules**: `~\.claude\rules\` (特别是 typescript/)

## 开发命令

```bash
# 安装依赖
npm install

# 开发服务器
npm run dev

# 构建生产版本
npm run build

# 类型检查
npm run type-check
```

## 禁区
- 禁止使用 `any` 类型
- 禁止直接修改 props
- 禁止在模板中写复杂逻辑
- 禁止使用已废弃的 Vue 2 API

## 内容规范
- 全站内容必须针对中文用户优化
- 性格描述要科学准确
- 支持多版本测评 (60题/93题/144题)

## 参考资源
- [Vue 3 文档](https://cn.vuejs.org)
- [TypeScript 文档](https://www.typescriptlang.org)
- [Tailwind CSS 文档](https://tailwindcss.com)
- [上游编码规范](../ai-coding-standards/)
