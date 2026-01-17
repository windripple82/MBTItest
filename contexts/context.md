# 项目上下文 (Context)

## 项目基础信息
- **项目名称**: MBTItest
- **路径**: `D:\AICoding\MBTItest`
- **技术栈**: Vue 3 + TypeScript + Vite + Tailwind CSS
- **创建时间**: 2026-01-17

## 当前状态
- **进度**: V1.0 发布 (Stable)
- **功能**:
    - [x] 完整 60 题 MBTI 问卷
    - [x] 核心计分算法 (EI/SN/TF/JP)
    - [x] 全站中文化 (Localization)
    - [x] iOS 风格玻璃拟态 UI (Glassmorphism)
    - [x] 响应式交互与动效
- **待办**:
    - [x] 确保依赖安装完整 (`npm install`)
    - [x] 启动开发服务器 (`npm run dev`)
    - [x] 浏览器功能验收 (Welcome -> Quiz -> Result)
    - [x] 关联 GitHub 远程仓库

## 架构概览
- `src/components`: UI 组件
- `src/data`: 静态数据 (题目)
- `src/utils`: 业务逻辑 (算法)
- `src/App.vue`: 主控逻辑
