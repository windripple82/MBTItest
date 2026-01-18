import { describe, it, expect } from 'vitest';
import { getQuestions } from '../data/questions';
import { calculateMBTI } from './mbtiLogic';

describe('MBTI Logic', () => {
    it('should generate correct number of questions for version 60', () => {
        const questions = getQuestions(60);
        expect(questions.length).toBe(60);
    });

    it('should generate correct number of questions for version 93', () => {
        const questions = getQuestions(93);
        expect(questions.length).toBe(93);
    });

    it('should generate correct number of questions for version 144', () => {
        const questions = getQuestions(144);
        expect(questions.length).toBe(144);
    });

    it('should maintain dimension balance in generated questions', () => {
        const questions = getQuestions(144);
        // Actually our dimensions are labeled EI, SN, TF, JP
        const dimCounts = { EI: 0, SN: 0, TF: 0, JP: 0 };

        questions.forEach(q => {
            dimCounts[q.dimension]++;
        });

        // 144 / 4 = 36 per dimension
        expect(dimCounts.EI).toBe(36);
        expect(dimCounts.SN).toBe(36);
        expect(dimCounts.TF).toBe(36);
        expect(dimCounts.JP).toBe(36);
    });

    it('should calculate score correctly', () => {
        // Mock answers: purely E, S, T, J
        // Suppose we answer 'E', 'S', 'T', 'J' for everything.
        // We'll simulate a small subset manually.

        // calculateMBTI expects an array of strings (the values)
        const answers: string[] = [];
        // Fill first 15 questions (EI) with E
        for (let i = 0; i < 15; i++) answers.push('E');
        // Fill next 15 (SN) with S
        for (let i = 0; i < 15; i++) answers.push('S');
        // Fill next 15 (TF) with T
        for (let i = 0; i < 15; i++) answers.push('T');
        // Fill next 15 (JP) with J
        for (let i = 0; i < 15; i++) answers.push('J');

        const result = calculateMBTI(answers);
        expect(result.type).toBe('ESTJ');
        expect(result.scores.EI.score).toBe(15);
        expect(result.scores.EI.char).toBe('E');
    });
});
