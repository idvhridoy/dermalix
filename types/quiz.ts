export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
}

export interface QuizOption {
  id: string;
  label: string;
  impact: 'High' | 'Medium' | 'Low' | 'None';
}

export interface QuizResult {
  score?: number;
  answers: QuizAnswer[];
  recommendations?: string[];
}

export interface QuizAnswer {
  category: CategoryType;
  questionId: string;
  selectedOption: string;
  impact: string;
}

export type CategoryType = 'lifestyle' | 'concerns' | 'ingredients' | 'routine' | 'expert';

export interface QuizState {
  currentCategory: CategoryType;
  currentQuestion: number;
  answers: QuizAnswer[];
  isLoading: boolean;
  error: string | null;
  progress: number;
}
