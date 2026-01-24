export interface QuestionOption {
    text: string;
    value: 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';
}

export interface Question {
    id: number;
    text: string;
    dimension: 'EI' | 'SN' | 'TF' | 'JP';
    options: [QuestionOption, QuestionOption];
}

const baseQuestions: Question[] = [
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

// Extended questions to reach 144 (needed 84 more, 21 per dimension)
// The structure is grouped by dimension for easier logic handling
const extendedQuestions: Question[] = [
    // EI Supplement (21 questions)
    { id: 61, text: "周末你通常更愿意：", dimension: "EI", options: [{ text: "和朋友出去玩", value: "E" }, { text: "在家看书或看电影", value: "I" }] },
    { id: 62, text: "你觉得哪种活动更累人？", dimension: "EI", options: [{ text: "长时间的独自研究", value: "E" }, { text: "长时间的社交应酬", value: "I" }] },
    { id: 63, text: "在想问题时，你倾向于：", dimension: "EI", options: [{ text: "找个人讨论", value: "E" }, { text: "自己默默思考", value: "I" }] },
    { id: 64, text: "你的朋友圈动态：", dimension: "EI", options: [{ text: "更新频繁，分享生活", value: "E" }, { text: "很少更新，注重隐私", value: "I" }] },
    { id: 65, text: "你更喜欢哪种沟通工具？", dimension: "EI", options: [{ text: "电话或语音", value: "E" }, { text: "文字消息或邮件", value: "I" }] },
    { id: 66, text: "对于认识新朋友，你：", dimension: "EI", options: [{ text: "以此为乐", value: "E" }, { text: "感到有些负担", value: "I" }] },
    { id: 67, text: "在公共场合，你通常：", dimension: "EI", options: [{ text: "坐在这个房间的中心位置", value: "E" }, { text: "坐在角落或边缘", value: "I" }] },
    { id: 68, text: "你的兴趣爱好通常是：", dimension: "EI", options: [{ text: "需要团队配合的（如篮球）", value: "E" }, { text: "可以独自完成的（如绘画）", value: "I" }] },
    { id: 69, text: "你更容易被哪种人吸引？", dimension: "EI", options: [{ text: "活泼开朗的人", value: "E" }, { text: "深沉内敛的人", value: "I" }] },
    { id: 70, text: "你认为自己：", dimension: "EI", options: [{ text: "朋友满天下", value: "E" }, { text: "知己两三人", value: "I" }] },
    { id: 71, text: "在会议上，如果没有被点名，你：", dimension: "EI", options: [{ text: "依然会主动发言", value: "E" }, { text: "通常保持沉默", value: "I" }] },
    { id: 72, text: "你更喜欢：", dimension: "EI", options: [{ text: "广博的知识面", value: "E" }, { text: "精深的专业度", value: "I" }] },
    { id: 73, text: "当心情不好的时候，你会：", dimension: "EI", options: [{ text: "找朋友倾诉", value: "E" }, { text: "想要一个人静静", value: "I" }] },
    { id: 74, text: "你觉得长时间不和人说话：", dimension: "EI", options: [{ text: "很难受，会憋坏", value: "E" }, { text: "很享受，很自在", value: "I" }] },
    { id: 75, text: "你更像是一个：", dimension: "EI", options: [{ text: "倾诉者", value: "E" }, { text: "倾听者", value: "I" }] },
    { id: 76, text: "在团队中，你更倾向于：", dimension: "EI", options: [{ text: "协调人际关系", value: "E" }, { text: "独立完成任务", value: "I" }] },
    { id: 77, text: "你希望自己的办公室门：", dimension: "EI", options: [{ text: "敞开，欢迎随时交流", value: "E" }, { text: "关上，避免被打扰", value: "I" }] },
    { id: 78, text: "你认为好的对话应该是：", dimension: "EI", options: [{ text: "快速、活跃的", value: "E" }, { text: "缓慢、深入的", value: "I" }] },
    { id: 79, text: "面对冷场，你会：", dimension: "EI", options: [{ text: "主动找话题打破沉默", value: "E" }, { text: "觉得沉默也没什么尴尬", value: "I" }] },
    { id: 80, text: "你更习惯：", dimension: "EI", options: [{ text: "先行动，再反思", value: "E" }, { text: "先反思，再行动", value: "I" }] },
    { id: 81, text: "对于惊喜派对，你的态度是：", dimension: "EI", options: [{ text: "非常喜欢", value: "E" }, { text: "有点抗拒", value: "I" }] },

    // SN Supplement (21 questions) (ID 82-102)
    { id: 82, text: "你更关心：", dimension: "SN", options: [{ text: "有什么用（实用性）", value: "S" }, { text: "意味着什么（含义）", value: "N" }] },
    { id: 83, text: "你更喜欢哪种类型的文章？", dimension: "SN", options: [{ text: "写实报道", value: "S" }, { text: "科幻小说", value: "N" }] },
    { id: 84, text: "你认为更重要的是：", dimension: "SN", options: [{ text: "保持传统", value: "S" }, { text: "推陈出新", value: "N" }] },
    { id: 85, text: "在解决问题时，你倾向于：", dimension: "SN", options: [{ text: "使用成熟的方法", value: "S" }, { text: "尝试全新的途径", value: "N" }] },
    { id: 86, text: "你更擅长：", dimension: "SN", options: [{ text: "动手操作", value: "S" }, { text: "构思设计", value: "N" }] },
    { id: 87, text: "你更信任：", dimension: "SN", options: [{ text: "摆在眼前的事实", value: "S" }, { text: "自己的第六感", value: "N" }] },
    { id: 88, text: "你认为“梦想家”这个词：", dimension: "SN", options: [{ text: "有点不切实际", value: "S" }, { text: "非常有魅力", value: "N" }] },
    { id: 89, text: "你更喜欢哪种比喻？", dimension: "SN", options: [{ text: "建筑师（建造基石）", value: "S" }, { text: "魔法师（创造奇迹）", value: "N" }] },
    { id: 90, text: "你觉得抽象画：", dimension: "SN", options: [{ text: "难以理解", value: "S" }, { text: "引人入胜", value: "N" }] },
    { id: 91, text: "在听讲座时，你更喜欢：", dimension: "SN", options: [{ text: "干货满满的实操课", value: "S" }, { text: "启发思维的理论课", value: "N" }] },
    { id: 92, text: "你做事更喜欢：", dimension: "SN", options: [{ text: "按部就班", value: "S" }, { text: "随性发挥", value: "N" }] },
    { id: 93, text: "描述一个人时，你更关注：", dimension: "SN", options: [{ text: "他的长相穿着", value: "S" }, { text: "他的气质性格", value: "N" }] },
    { id: 94, text: "你更喜欢：", dimension: "SN", options: [{ text: "确定的结论", value: "S" }, { text: "开放的假设", value: "N" }] },
    { id: 95, text: "你会觉得哪种人更无趣？", dimension: "SN", options: [{ text: "整天做白日梦的人", value: "S" }, { text: "毫无想象力的人", value: "N" }] },
    { id: 96, text: "烹饪时，你倾向于：", dimension: "SN", options: [{ text: "严格按菜谱来", value: "S" }, { text: "凭感觉调整", value: "N" }] },
    { id: 97, text: "你更看重事物的：", dimension: "SN", options: [{ text: "现在的样子", value: "S" }, { text: "将来的潜力", value: "N" }] },
    { id: 98, text: "你更擅长：", dimension: "SN", options: [{ text: "观察", value: "S" }, { text: "推理", value: "N" }] },
    { id: 99, text: "你认为生活应该：", dimension: "SN", options: [{ text: "脚踏实地", value: "S" }, { text: "充满诗意", value: "N" }] },
    { id: 100, text: "面对复杂系统，你倾向于：", dimension: "SN", options: [{ text: "搞懂每个零件", value: "S" }, { text: "搞懂运作原理", value: "N" }] },
    { id: 101, text: "你更喜欢和谁聊天？", dimension: "SN", options: [{ text: "讲求实际的人", value: "S" }, { text: "脑洞大开的人", value: "N" }] },
    { id: 102, text: "你更倾向于：", dimension: "SN", options: [{ text: "从细节推导整体", value: "S" }, { text: "从整体把握细节", value: "N" }] },

    // TF Supplement (21 questions) (ID 103-123)
    { id: 103, text: "你认为什么是更好的赞美？", dimension: "TF", options: [{ text: "你很聪明", value: "T" }, { text: "你很善良", value: "F" }] },
    { id: 104, text: "你更看重：", dimension: "TF", options: [{ text: "事实的准确性", value: "T" }, { text: "人际的和谐度", value: "F" }] },
    { id: 105, text: "假如你是法官，你倾向于：", dimension: "TF", options: [{ text: "依法判决", value: "T" }, { text: "情有可原", value: "F" }] },
    { id: 106, text: "你觉得哪种特质更宝贵？", dimension: "TF", options: [{ text: "理智冷静", value: "T" }, { text: "热情投入", value: "F" }] },
    { id: 107, text: "在给别人建议时，你更直接还是更委婉？", dimension: "TF", options: [{ text: "更直接，实话实说", value: "T" }, { text: "更委婉，照顾面子", value: "F" }] },
    { id: 108, text: "你做决定时，主要依据：", dimension: "TF", options: [{ text: "因果逻辑分析", value: "T" }, { text: "个人价值观喜好", value: "F" }] },
    { id: 109, text: "你更希望被视为：", dimension: "TF", options: [{ text: "有能力的", value: "T" }, { text: "有好人缘的", value: "F" }] },
    { id: 110, text: "面对无理取闹的人，你会：", dimension: "TF", options: [{ text: "跟他讲道理", value: "T" }, { text: "试图安抚情绪", value: "F" }] },
    { id: 111, text: "你认为情感：", dimension: "TF", options: [{ text: "有时会干扰判断", value: "T" }, { text: "是人类最宝贵的", value: "F" }] },
    { id: 112, text: "你的座右铭更偏向：", dimension: "TF", options: [{ text: "知识就是力量", value: "T" }, { text: "爱能战胜一切", value: "F" }] },
    { id: 113, text: "当朋友做错了事，你会：", dimension: "TF", options: [{ text: "指出他的错误", value: "T" }, { text: "先表示理解", value: "F" }] },
    { id: 114, text: "你更擅长：", dimension: "TF", options: [{ text: "批评与指正", value: "T" }, { text: "鼓励与赞赏", value: "F" }] },
    { id: 115, text: "在团队中，你更关注：", dimension: "TF", options: [{ text: "任务是否高效完成", value: "T" }, { text: "大家是否合作愉快", value: "F" }] },
    { id: 116, text: "你认为原则问题：", dimension: "TF", options: [{ text: "绝不能妥协", value: "T" }, { text: "视具体人情而定", value: "F" }] },
    { id: 117, text: "你更倾向于：", dimension: "TF", options: [{ text: "用头脑思考", value: "T" }, { text: "听从内心的声音", value: "F" }] },
    { id: 118, text: "你觉得哪种人更难相处？", dimension: "TF", options: [{ text: "过于情绪化的人", value: "T" }, { text: "冷酷无情的人", value: "F" }] },
    { id: 119, text: "争论时，如果你发现对方哭了：", dimension: "TF", options: [{ text: "觉得这与对错无关", value: "T" }, { text: "会心软，不想争了", value: "F" }] },
    { id: 120, text: "你更信任：", dimension: "TF", options: [{ text: "客观数据", value: "T" }, { text: "直观感受", value: "F" }] },
    { id: 121, text: "你认为公平意味着：", dimension: "TF", options: [{ text: "一视同仁", value: "T" }, { text: "因人而异", value: "F" }] },
    { id: 122, text: "面对困境，你倾向于：", dimension: "TF", options: [{ text: "坚强面对", value: "T" }, { text: "寻求依靠", value: "F" }] },
    { id: 123, text: "在一段关系中，你更看重：", dimension: "TF", options: [{ text: "思想的共鸣", value: "T" }, { text: "情感的陪伴", value: "F" }] },

    // JP Supplement (21 questions) (ID 124-144)
    { id: 124, text: "你更喜欢哪种周末？", dimension: "JP", options: [{ text: "提前安排好行程", value: "J" }, { text: "睡醒了再说", value: "P" }] },
    { id: 125, text: "你的电脑桌面文件：", dimension: "JP", options: [{ text: "分类清晰，文件夹整齐", value: "J" }, { text: "铺满屏幕，比较随意", value: "P" }] },
    { id: 126, text: "你更喜欢：", dimension: "JP", options: [{ text: "尽早开始工作", value: "J" }, { text: "在压力下冲刺", value: "P" }] },
    { id: 127, text: "对于突如其来的变故，你会：", dimension: "JP", options: [{ text: "感到被打乱节奏", value: "J" }, { text: "甚至觉得有点刺激", value: "P" }] },
    { id: 128, text: "做完一件事，你会：", dimension: "JP", options: [{ text: "非常有成就感", value: "J" }, { text: "觉得也就那样", value: "P" }] },
    { id: 129, text: "你也喜欢：", dimension: "JP", options: [{ text: "列清单（To-do list）", value: "J" }, { text: "记在脑子里", value: "P" }] },
    { id: 130, text: "你觉得制定计划：", dimension: "JP", options: [{ text: "很有必要", value: "J" }, { text: "束缚手脚", value: "P" }] },
    { id: 131, text: "去超市买东西，由于：", dimension: "JP", options: [{ text: "通常直奔目标", value: "J" }, { text: "喜欢随意逛逛", value: "P" }] },
    { id: 132, text: "在这个测试中，你：", dimension: "JP", options: [{ text: "希望能尽快得到结果", value: "J" }, { text: "享受做题的过程", value: "P" }] },
    { id: 133, text: "你更习惯：", dimension: "JP", options: [{ text: "按照日程表生活", value: "J" }, { text: "随性而为", value: "P" }] },
    { id: 134, text: "面对多项任务，你会：", dimension: "JP", options: [{ text: "排定优先级，依次处理", value: "J" }, { text: "同时开工，交替进行", value: "P" }] },
    { id: 135, text: "你认为生活中的大多数事情：", dimension: "JP", options: [{ text: "是可以控制的", value: "J" }, { text: "是不可预测的", value: "P" }] },
    { id: 136, text: "你更喜欢哪句话？", dimension: "JP", options: [{ text: "早起的鸟儿有虫吃", value: "J" }, { text: "船到桥头自然直", value: "P" }] },
    { id: 137, text: "你觉得“截止日期”是：", dimension: "JP", options: [{ text: "必须要遵守的红线", value: "J" }, { text: "大概的时间参考", value: "P" }] },
    { id: 138, text: "出门前，你：", dimension: "JP", options: [{ text: "一定要确定所有门窗关好", value: "J" }, { text: "大概看一眼就行", value: "P" }] },
    { id: 139, text: "在工作中，你更看重：", dimension: "JP", options: [{ text: "结果", value: "J" }, { text: "过程", value: "P" }] },
    { id: 140, text: "你更喜欢：", dimension: "JP", options: [{ text: "这就决定下来", value: "J" }, { text: "再看看有没有别的", value: "P" }] },
    { id: 141, text: "你的购物习惯是：", dimension: "JP", options: [{ text: "只买需要的", value: "J" }, { text: "经常买些没用的", value: "P" }] },
    { id: 142, text: "你认为秩序：", dimension: "JP", options: [{ text: "带来自由", value: "J" }, { text: "限制创造", value: "P" }] },
    { id: 143, text: "面对未完成的任务，你会：", dimension: "JP", options: [{ text: "很难放松下来", value: "J" }, { text: "照玩不误", value: "P" }] },
    { id: 144, text: "你更倾向于：", dimension: "JP", options: [{ text: "做一个结论者", value: "J" }, { text: "做一个观察者", value: "P" }] }
];

export type TestVersion = 60 | 93 | 144;

export const getQuestions = (version: TestVersion): Question[] => {
    if (version === 60) {
        return [...baseQuestions];
    }

    if (version === 93) {
        // Base 60 (15 each)
        // Need 33 more.
        // EI: +9 (Total 24)
        // SN: +8 (Total 23)
        // TF: +8 (Total 23)
        // JP: +8 (Total 23)
        // Balanced-ish distribution logic
        const ei = extendedQuestions.filter(q => q.dimension === 'EI').slice(0, 9);
        const sn = extendedQuestions.filter(q => q.dimension === 'SN').slice(0, 8);
        const tf = extendedQuestions.filter(q => q.dimension === 'TF').slice(0, 8);
        const jp = extendedQuestions.filter(q => q.dimension === 'JP').slice(0, 8);

        // Re-map IDs to be sequential after baseQuestions
        const combined = [...baseQuestions, ...ei, ...sn, ...tf, ...jp];
        return combined.map((q, index) => ({
            ...q,
            id: index + 1
        }));
    }

    if (version === 144) {
        // Base 60 + All 84 Extended
        const combined = [...baseQuestions, ...extendedQuestions];
        return combined.map((q, index) => ({
            ...q,
            id: index + 1
        }));
    }

    return [...baseQuestions];
};

export const questions = baseQuestions;
