import { createContext, useContext, useReducer, useCallback, ReactNode } from 'react';
import type { QuizResult, CategoryType } from '@/types/quiz';

interface QuizState {
  currentCategory: CategoryType;
  currentQuestion: number;
  answers: QuizResult['answers'];
  isLoading: boolean;
  error: string | null;
  progress: number;
}

type QuizAction =
  | { type: 'SET_CATEGORY'; payload: CategoryType }
  | { type: 'SET_QUESTION'; payload: number }
  | { type: 'ADD_ANSWER'; payload: QuizResult['answers'][0] }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'SET_PROGRESS'; payload: number }
  | { type: 'RESET_QUIZ' };

const initialState: QuizState = {
  currentCategory: 'sleep',
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
      return { ...state, answers: [...state.answers, action.payload] };
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
    try {
      localStorage.setItem('quizState', JSON.stringify(state));
    } catch (error) {
      console.error('Failed to save quiz progress:', error);
    }
  }, [state]);

  const loadProgress = useCallback(() => {
    try {
      const savedState = localStorage.getItem('quizState');
      if (savedState) {
        const parsedState = JSON.parse(savedState);
        Object.entries(parsedState).forEach(([key, value]) => {
          dispatch({ type: ('SET_' + key.toUpperCase()) as any, payload: value });
        });
      }
    } catch (error) {
      console.error('Failed to load quiz progress:', error);
      dispatch({ type: 'SET_ERROR', payload: 'Failed to load saved progress' });
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
