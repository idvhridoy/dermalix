'use client';

import { createContext, useContext, useReducer, useCallback, ReactNode } from 'react';
import type { QuizState, CategoryType, QuizAnswer } from '@/types/quiz';

type QuizAction =
  | { type: 'SET_CATEGORY'; payload: CategoryType }
  | { type: 'SET_QUESTION'; payload: number }
  | { type: 'ADD_ANSWER'; payload: QuizAnswer }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'SET_PROGRESS'; payload: number }
  | { type: 'RESET_QUIZ' };

const initialState: QuizState = {
  currentCategory: 'lifestyle',
  currentQuestion: 0,
  answers: [],
  isLoading: false,
  error: null,
  progress: 0,
};

const QuizContext = createContext<{
  state: QuizState;
  dispatch: React.Dispatch<QuizAction>;
  saveProgress: () => void;
  loadProgress: () => void;
} | null>(null);

function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case 'SET_CATEGORY':
      return { ...state, currentCategory: action.payload };
    case 'SET_QUESTION':
      return { ...state, currentQuestion: action.payload };
    case 'ADD_ANSWER':
      const existingAnswerIndex = state.answers.findIndex(
        answer => answer.category === action.payload.category && answer.questionId === action.payload.questionId
      );
      const newAnswers = [...state.answers];
      if (existingAnswerIndex !== -1) {
        newAnswers[existingAnswerIndex] = action.payload;
      } else {
        newAnswers.push(action.payload);
      }
      return { ...state, answers: newAnswers };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'SET_PROGRESS':
      return { ...state, progress: action.payload };
    case 'RESET_QUIZ':
      return initialState;
    default:
      return state;
  }
}

export function QuizProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  const saveProgress = useCallback(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('quizState', JSON.stringify(state));
    }
  }, [state]);

  const loadProgress = useCallback(() => {
    if (typeof window !== 'undefined') {
      const savedState = localStorage.getItem('quizState');
      if (savedState) {
        const parsedState = JSON.parse(savedState);
        Object.keys(parsedState).forEach(key => {
          dispatch({ type: `SET_${key.toUpperCase()}` as any, payload: parsedState[key] });
        });
      }
    }
  }, []);

  return (
    <QuizContext.Provider value={{ state, dispatch, saveProgress, loadProgress }}>
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
}
