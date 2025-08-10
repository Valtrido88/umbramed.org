
export enum QuizMode {
  STUDY = 'study',
  EXAM = 'exam',
}

export enum Difficulty {
  EASY = 'Fácil',
  MEDIUM = 'Intermedia',
  HARD = 'Difícil',
}

export interface Option {
  text: string;
}

export interface Question {
  id: number;
  questionText: string;
  options: Option[];
  correctAnswerIndex: number;
  rationale: string;
  difficulty: Difficulty;
}

export interface UserAnswer {
  questionId: number;
  answerIndex: number;
  isCorrect: boolean;
}
