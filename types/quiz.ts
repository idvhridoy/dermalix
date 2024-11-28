export interface QuizQuestion {
  question: string;
  options: string[] | QuizOption[];
  correctAnswer?: number;
}

export interface QuizOption {
  text: string;
  impact: 'Poor' | 'Fair' | 'Good' | 'Excellent';
}

export interface LifestyleQuestions {
  sleep: QuizQuestion[];
  diet: QuizQuestion[];
  stress: QuizQuestion[];
  [key: string]: QuizQuestion[];
}

export interface QuizResult {
  score?: number;
  answers: QuizAnswer[];
}

export interface QuizAnswer {
  category: CategoryType;
  questionId: string;
  selectedOption: string;
  impact: string;
}

export type CategoryType = 'sleep' | 'diet' | 'stress' | 'concerns' | 'ingredients';
