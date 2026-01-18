export type Dimension = 'EI' | 'SN' | 'TF' | 'JP';

export interface MBTIResult {
    type: string;
    scores: Record<Dimension, { char: string; score: number; total: number; otherScore: number }>;
    description: string;
}

export const calculateMBTI = (answers: string[]): MBTIResult => {
    // answers is an array of values like 'E', 'I', 'S', etc. corresponding to question ID order?
    // Actually, let's assume answers map to question IDs or just count occurrences if value is unique enough.
    // Values are 'E', 'I', 'S', 'N', 'T', 'F', 'J', 'P'.

    const counts: Record<string, number> = {
        E: 0, I: 0,
        S: 0, N: 0,
        T: 0, F: 0,
        J: 0, P: 0
    };

    answers.forEach(a => {
        if (counts[a] !== undefined) {
            counts[a]++;
        }
    });

    const getDimensionType = (_dim: Dimension, char1: string, char2: string) => {
        const c1 = counts[char1];
        const c2 = counts[char2];
        const total = c1 + c2;
        // Odd number 15 guarantees no tie usually.
        const chosen = c1 > c2 ? char1 : char2;
        return { char: chosen, score: Math.max(c1, c2), total, otherScore: Math.min(c1, c2) };
    };

    const ei = getDimensionType('EI', 'E', 'I');
    const sn = getDimensionType('SN', 'S', 'N');
    const tf = getDimensionType('TF', 'T', 'F');
    const jp = getDimensionType('JP', 'J', 'P');

    const type = `${ei.char}${sn.char}${tf.char}${jp.char}`;

    return {
        type,
        scores: {
            EI: ei,
            SN: sn,
            TF: tf,
            JP: jp
        },
        description: descriptions[type] || "Unique Personality"
    };
};

export const descriptions: Record<string, string> = {
    "ISTJ": "责任感强、严肃可靠。安静、通过集中注意力做好细节工作来获得成功。讲求实际、重事实、负责任。",
    "ISFJ": "安静、友好、负责任、这职责感强。工作投入、刻苦，任何时候都尽可能准确。关心他人的感受。",
    "INFJ": "坚持原则、富有洞察力。寻求思想、关系、物质等之间的意义和联系。希望了解什么能够激励人。",
    "INTJ": "富有想象力和战略性的思想家。对一切事物有大局观。能看到可能性并组织行动。",
    "ISTP": "宽容、灵活。安静的观察者直到问题出现，然后迅速行动寻找可行的解决方案。",
    "ISFP": "安静、友好、敏感、和善。享受当下。喜欢有自我的空间，按自己的时间表工作。",
    "INFP": "理想主义者，忠于自己的价值观和对自己重要的人。希望外在的生活与内在的价值观相符。",
    "INTP": "对已有的概念寻求逻辑解释和理论基础。喜欢理论和抽象的事情。安静、内向、灵活、适应力强。",
    "ESTP": "灵活、宽容，采取务实的态度解决当初的问题。喜欢此时此地，不喜欢理论和概念的解释。",
    "ESFP": "外向、友好、接受力强。热爱生活、人类和物质享受。喜欢与人共事。",
    "ENFP": "热情洋溢、富有想象力。认为生活充满可能性。能很快地将事情和信息联系起来。",
    "ENTP": "反应快、不仅是、机智灵敏。善于分析，能在各种情况下看到可能性。",
    "ESTJ": "讲求实际，现实主义。果断，一旦做出决定就会马上行动。善于组织项目和人员。",
    "ESFJ": "热心肠、有责任心、合作。希望周边的环境温馨而和谐，并为此果断地行动。",
    "ENFJ": "热情、为他人着想、反应敏捷、负责任。非常关注他人的潜能。能为团队提供鼓舞人心的领导。",
    "ENTJ": "坦诚、果断，是天生的领导者。能很快看到公司/组织程序中的不合理和低效率，并制定策略。",
};
