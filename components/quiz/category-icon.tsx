'use client';

import { memo } from 'react';
import { 
  Activity as ActivityIcon,
  Moon as MoonIcon,
  Utensils as UtensilsIcon,
  Heart as HeartIcon,
  Beaker as BeakerIcon,
  GraduationCap as GraduationCapIcon,
  Sparkles as SparklesIcon
} from 'lucide-react';
import type { QuizCategory } from '@/types/quiz-components';

interface CategoryIconProps {
  category: QuizCategory;
}

export const CategoryIcon = memo(function CategoryIcon({ category }: CategoryIconProps) {
  switch (category) {
    case 'lifestyle':
      return <HeartIcon className="w-6 h-6 text-primary" aria-label="Lifestyle category" />;
    case 'sleep':
      return <MoonIcon className="w-6 h-6 text-primary" aria-label="Sleep category" />;
    case 'diet':
      return <UtensilsIcon className="w-6 h-6 text-primary" aria-label="Diet category" />;
    case 'stress':
      return <ActivityIcon className="w-6 h-6 text-primary" aria-label="Stress category" />;
    case 'concerns':
      return <HeartIcon className="w-6 h-6 text-primary" aria-label="Concerns category" />;
    case 'ingredients':
      return <BeakerIcon className="w-6 h-6 text-primary" aria-label="Ingredients category" />;
    case 'routine':
      return <SparklesIcon className="w-6 h-6 text-primary" aria-label="Routine category" />;
    case 'expert':
      return <GraduationCapIcon className="w-6 h-6 text-primary" aria-label="Expert category" />;
    default:
      return <ActivityIcon className="w-6 h-6 text-primary" aria-label="Default category" />;
  }
});
