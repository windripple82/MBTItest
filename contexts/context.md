# 项目上下文 (Context)

## 项目基础信息
- **项目名称**: MBTItest
- **路径**: `\\huanghe\home\Drive\Private\AICoding\MBTItest`
- **技术栈**: Vue 3 + TypeScript + Vite + Tailwind CSS
- **创建时间**: 2026-01-17

## 当前状态
- **进度**: 初始化完成，核心代码已编写。
- **功能**:
    - 完整 60 题 MBTI 问卷 (`src/data/questions.ts`)
    - 欢迎页、答题卡、结果分析页组件
    - MBTI 维度计分逻辑 (`src/utils/mbtiLogic.ts`)
- **待办**:
    - 等待依赖安装完成 (`npm install`)
    - 验证构建与运行 (`npm run dev`)
    - 关联 GitHub 远程仓库

## 架构概览
- `src/components`: UI 组件
- `src/data`: 静态数据 (题目)
- `src/utils`: 业务逻辑 (算法)
- `src/App.vue`: 主控逻辑
