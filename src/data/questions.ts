export interface Question {
    id: number;
    text: string;
    dimension: 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P'; // Mapped to the value it contributes to
    // Actually usually questions oppose two.
    // Let's stick to the previous structure: dimension 'EI', options E or I.
    dimension: 'EI' | 'SN' | 'TF' | 'JP';
    options: [
        { text: string; value: 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P' },
        { text: string; value: 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P' }
    ];
}

export const questions: Question[] = [
    // EI Dimension (15 questions)
    { id: 1, text: "在社交聚会上，你倾向于：", dimension: "EI", options: [{ text: "与很多人交流，包括陌生人", value: "E" }, { text: "只与少数熟人交流", value: "I" }] },
    { id: 2, text: "你认为自己更喜欢：", dimension: "EI", options: [{ text: "成为关注的焦点", value: "E" }, { text: "待在后台观察", value: "I" }] },
    { id: 3, text: "你是如何充电的？", dimension: "EI", options: [{ text: "通过与他人互动", value: "E" }, { text: "通过独处", value: "I" }] },
    { id: 4, text: "在团队合作中，你通常：", dimension: "EI", options: [{ text: "积极发言，引导讨论", value: "E" }, { text: "倾听为主，深思熟虑", value: "I" }] },
    { id: 5, text: "你更习惯于：", dimension: "EI", options: [{ text: "边想边说", value: "E" }, { text: "想好再说", value: "I" }] },
    { id: 6, text: "即使没有特别的事，你也喜欢：", dimension: "EI", options: [{ text: "给朋友打电话或发消息", value: "E" }, { text: "一个人静静地待着", value: "I" }] },
    { id: 7, text: "你更喜欢哪种工作环境？", dimension: "EI", options: [{ text: "热闹、开放、互动多", value: "E" }, { text: "安静、私密、干扰少", value: "I" }] },
    { id: 8, text: "遇到新朋友时，通过：", dimension: "EI", options: [{ text: "你主动介绍自己", value: "E" }, { text: "等别人介绍", value: "I" }] },
    { id: 9, text: "你更喜欢参与：", dimension: "EI", options: [{ text: "大型集体活动", value: "E" }, { text: "小型亲密聚会", value: "I" }] },
    { id: 10, text: "让别人了解你：", dimension: "EI", options: [{ text: "很容易", value: "E" }, { text: "需要很长时间", value: "I" }] },
    { id: 11, text: "你做事的速度通常：", dimension: "EI", options: [{ text: "比较快，雷厉风行", value: "E" }, { text: "比较慢，深思熟虑", value: "I" }] },
    { id: 12, text: "在排队等候时，你通常会：", dimension: "EI", options: [{ text: "和周围人闲聊", value: "E" }, { text: "看手机或发呆", value: "I" }] },
    { id: 13, text: "你更擅长：", dimension: "EI", options: [{ text: "应对突发状况", value: "E" }, { text: "专注深入研究", value: "I" }] },
    { id: 14, text: "你认为自己是：", dimension: "EI", options: [{ text: "行动派", value: "E" }, { text: "思考派", value: "I" }] },
    { id: 15, text: "当你在专注做事被打断时：", dimension: "EI", options: [{ text: "不介意，甚至欢迎", value: "E" }, { text: "感到烦躁", value: "I" }] },

    // SN Dimension (15 questions)
    { id: 16, text: "如果你是个老师，你更喜欢教：", dimension: "SN", options: [{ text: "包含事实的课程", value: "S" }, { text: "涉及理论的课程", value: "N" }] },
    { id: 17, text: "你通常更关注：", dimension: "SN", options: [{ text: "实际的现实", value: "S" }, { text: "未来的可能", value: "N" }] },
    { id: 18, text: "你更信赖：", dimension: "SN", options: [{ text: "经验", value: "S" }, { text: "直觉", value: "N" }] },
    { id: 19, text: "你更喜欢被别人称为：", dimension: "SN", options: [{ text: "务实的人", value: "S" }, { text: "有想象力的人", value: "N" }] },
    { id: 20, text: "阅读时，你更喜欢：", dimension: "SN", options: [{ text: "具体描写和真实故事", value: "S" }, { text: "奇幻概念和隐喻", value: "N" }] },
    { id: 21, text: "你做事更注重：", dimension: "SN", options: [{ text: "细节", value: "S" }, { text: "大局", value: "N" }] },
    { id: 22, text: "你更欣赏哪种人？", dimension: "SN", options: [{ text: "脚踏实地的人", value: "S" }, { text: "思维跳跃的人", value: "N" }] },
    { id: 23, text: "你更倾向于接受：", dimension: "SN", options: [{ text: "字面意思", value: "S" }, { text: "弦外之音", value: "N" }] },
    { id: 24, text: "你更擅长记住：", dimension: "SN", options: [{ text: "具体的事件和数据", value: "S" }, { text: "事件背后的意义", value: "N" }] },
    { id: 25, text: "计划旅行时，你更关心：", dimension: "SN", options: [{ text: "具体的行程安排", value: "S" }, { text: "整体的体验感觉", value: "N" }] },
    { id: 26, text: "你更喜欢哪类工作？", dimension: "SN", options: [{ text: "有明确标准和规范的", value: "S" }, { text: "需要创造性解决问题的", value: "N" }] },
    { id: 27, text: "看电影时，你更在意：", dimension: "SN", options: [{ text: "画面、道具等细节真实性", value: "S" }, { text: "主题、象征意义", value: "N" }] },
    { id: 28, text: "你更喜欢学习：", dimension: "SN", options: [{ text: "技能类知识（如烹饪、修理）", value: "S" }, { text: "理论类知识（如哲学、社会学）", value: "N" }] },
    { id: 29, text: "描述一件事情时，你倾向于：", dimension: "SN", options: [{ text: "按时间顺序描述细节", value: "S" }, { text: "跳跃式地描述重点", value: "N" }] },
    { id: 30, text: "你认为更重要的是：", dimension: "SN", options: [{ text: "活在当下", value: "S" }, { text: "展望未来", value: "N" }] },

    // TF Dimension (15 questions)
    { id: 31, text: "做决定时，你更看重：", dimension: "TF", options: [{ text: "逻辑和原则", value: "T" }, { text: "人情和感受", value: "F" }] },
    { id: 32, text: "你通常被认为是：", dimension: "TF", options: [{ text: "冷静理智的", value: "T" }, { text: "热情感性的", value: "F" }] },
    { id: 33, text: "当朋友遇到困难，你首先会：", dimension: "TF", options: [{ text: "分析问题，提供解决方案", value: "T" }, { text: "给予安慰和情感支持", value: "F" }] },
    { id: 34, text: "你认为哪种批评更难接受？", dimension: "TF", options: [{ text: "说你能力不足", value: "T" }, { text: "说你冷漠无情", value: "F" }] },
    { id: 35, text: "在处理冲突时，你倾向于：", dimension: "TF", options: [{ text: "据理力争，辨明是非", value: "T" }, { text: "寻求妥协，维护和谐", value: "F" }] },
    { id: 36, text: "你更看重什么品质？", dimension: "TF", options: [{ text: "公正", value: "T" }, { text: "仁慈", value: "F" }] },
    { id: 37, text: "在评价他人时，你更看重：", dimension: "TF", options: [{ text: "他的成就和能力", value: "T" }, { text: "他的人品和善意", value: "F" }] },
    { id: 38, text: "你更喜欢哪种沟通方式？", dimension: "TF", options: [{ text: "直截了当", value: "T" }, { text: "委婉含蓄", value: "F" }] },
    { id: 39, text: "通过一部电影，你更容易被什么打动？", dimension: "TF", options: [{ text: "精彩的剧情结构", value: "T" }, { text: "人物的情感纠葛", value: "F" }] },
    { id: 40, text: "如果你是管理者，你会：", dimension: "TF", options: [{ text: "严格执行规章制度", value: "T" }, { text: "根据个人情况灵活处理", value: "F" }] },
    { id: 41, text: "你认为真理比人际关系更重要吗？", dimension: "TF", options: [{ text: "是的，真理至上", value: "T" }, { text: "不，不应伤害他人感情", value: "F" }] },
    { id: 42, text: "在辩论中，你更在乎：", dimension: "TF", options: [{ text: "证明自己是对的", value: "T" }, { text: "即使是对的也不想伤和气", value: "F" }] },
    { id: 43, text: "你做决定通常是：", dimension: "TF", options: [{ text: "客观的", value: "T" }, { text: "主观的", value: "F" }] },
    { id: 44, text: "你更难忍受哪种人？", dimension: "TF", options: [{ text: "逻辑混乱的人", value: "T" }, { text: "情绪化的人", value: "F" }] },
    { id: 45, text: "你倾向于用什么说服别人？", dimension: "TF", options: [{ text: "数据和证据", value: "T" }, { text: "情感和价值观", value: "F" }] },

    // JP Dimension (15 questions)
    { id: 46, text: "你做事的方式通常是：", dimension: "JP", options: [{ text: "按计划进行", value: "J" }, { text: "随遇而安", value: "P" }] },
    { id: 47, text: "你喜欢怎样的生活？", dimension: "JP", options: [{ text: "有条理、有组织", value: "J" }, { text: "充满变化和惊喜", value: "P" }] },
    { id: 48, text: "面对最后期限（Deadline），你会：", dimension: "JP", options: [{ text: "提前完成", value: "J" }, { text: "最后一刻突击", value: "P" }] },
    { id: 49, text: "你的房间/桌面通常是：", dimension: "JP", options: [{ text: "整洁有序", value: "J" }, { text: "比较凌乱", value: "P" }] },
    { id: 50, text: "旅行前，你会：", dimension: "JP", options: [{ text: "制定详细攻略", value: "J" }, { text: "到了再说", value: "P" }] },
    { id: 51, text: "你更喜欢已知的还是未知的？", dimension: "JP", options: [{ text: "确定的事情", value: "J" }, { text: "开放的可能性", value: "P" }] },
    { id: 52, text: "做完一件工作后，你会：", dimension: "JP", options: [{ text: "立刻归档清理", value: "J" }, { text: "先放着", value: "P" }] },
    { id: 53, text: "你认为遵守时间：", dimension: "JP", options: [{ text: "非常重要", value: "J" }, { text: "差不多就行", value: "P" }] },
    { id: 54, text: "你更喜欢哪种工作节奏？", dimension: "JP", options: [{ text: "先紧后松，早点做完", value: "J" }, { text: "先松后紧，压力下出活", value: "P" }] },
    { id: 55, text: "在做决定后，你会：", dimension: "JP", options: [{ text: "感到轻松，终于定下来了", value: "J" }, { text: "感到焦虑，是不是还有更好的选择", value: "P" }] },
    { id: 56, text: "日常生活中的突发事件会让你：", dimension: "JP", options: [{ text: "感到压力", value: "J" }, { text: "感到兴奋", value: "P" }] },
    { id: 57, text: "你购买贵重物品时：", dimension: "JP", options: [{ text: "做足功课，早已决定", value: "J" }, { text: "逛街时由于冲动购买", value: "P" }] },
    { id: 58, text: "你更喜欢：", dimension: "JP", options: [{ text: "把事情了结", value: "J" }, { text: "保持选择开放", value: "P" }] },
    { id: 59, text: "对于规则和流程，你认为：", dimension: "JP", options: [{ text: "应该严格遵守", value: "J" }, { text: "是用来打破的", value: "P" }] },
    { id: 60, text: "工作时，你倾向于：", dimension: "JP", options: [{ text: "专注于一个任务直到完成", value: "J" }, { text: "同时处理多个任务", value: "P" }] }
];
