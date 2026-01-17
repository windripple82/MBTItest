# MBTI 职业性格测试 (MBTI Professional)

![Vue](https://img.shields.io/badge/Vue-3.x-4FC08D?style=flat-square&logo=vue.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC?style=flat-square&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square&logo=vite)

这就是一款现代化、高颜值的 MBTI 职业性格测试应用。采用 iOS 风格的极光玻璃拟态设计（Glassmorphism），提供流畅的交互体验和科学的性格分析。

## ✨ 特性 (Features)

*   **沉浸式 UI 设计**：
    *   采用 iOS 风格的深色极光背景 (Aurora Mesh Gradients)。
    *   全站玻璃拟态卡片与精致的 `backdrop-blur` 效果。
    *   丝般顺滑的非线性过渡动画 (Custom Easings)。
*   **完整测评体系**：
    *   内置 60 道标准 MBTI 测试题。
    *   实时算法解析四大维度：E/I (外向/内向), S/N (实感/直觉), T/F (理智/情感), J/P (判断/感知)。
*   **完全本地化**：全站内容已针对中文用户优化，提供准确的性格描述。
*   **响应式布局**：完美适配桌面与移动端设备。

## 🛠️ 技术栈 (Tech Stack)

*   **Core**: Vue 3 (`<script setup>`) + TypeScript
*   **Build**: Vite
*   **Styling**: Tailwind CSS (with custom animations)
*   **State**: Vue Reactivity API

## 🚀 快速开始 (Quick Start)

1.  **安装依赖**
    ```bash
    npm install
    ```

2.  **启动开发服务器**
    ```bash
    npm run dev
    ```
    访问 `http://localhost:5173` 即可开始体验。

3.  **构建生产版本**
    ```bash
    npm run build
    ```

## 📂 项目结构

```
src/
├── components/      # UI 组件 (Welcome, Quiz, Result)
├── data/           # 题目数据 (questions.ts)
├── utils/          # 核心算法 (mbtiLogic.ts)
└── App.vue         # 根组件与主布局
```

## 📝 License

MIT
