import { memo } from 'react';
import { 
  Activity as ActivityIcon, 
  Moon as MoonIcon, 
  Utensils as UtensilsIcon
} from 'lucide-react';
import type { CategoryType } from '@/types/quiz';

interface CategoryIconProps {
  category: CategoryType;
}

export const CategoryIcon = memo(function CategoryIcon({ category }: CategoryIconProps) {
  switch (category) {
    case 'sleep':
      return <MoonIcon className="w-6 h-6 text-primary" aria-label="Sleep category" />;
    case 'diet':
      return <UtensilsIcon className="w-6 h-6 text-primary" aria-label="Diet category" />;
    case 'stress':
      return <ActivityIcon className="w-6 h-6 text-primary" aria-label="Stress category" />;
    default:
      return <ActivityIcon className="w-6 h-6 text-primary" aria-label="Default category" />;
  }
});
