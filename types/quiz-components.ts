import { LucideIcon } from 'lucide-react';

export type QuizCategory = 
  | 'lifestyle'   // Main category
  | 'sleep'       // Subcategories
  | 'diet'
  | 'stress'
  | 'concerns'
  | 'ingredients'
  | 'routine'
  | 'expert';

export interface QuizOption {
  text: string;
  type: string;
}

export interface QuizQuestion {
  question: string;
  options: QuizOption[];
}

export interface QuizType {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  gradient: string;
  questions: QuizQuestion[];
  category: QuizCategory;
}
