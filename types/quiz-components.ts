import { LucideIcon } from 'lucide-react';

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
}
