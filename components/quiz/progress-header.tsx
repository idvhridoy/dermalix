import { memo } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft } from 'lucide-react';
import type { CategoryType } from '@/types/quiz';
import { CategoryIcon } from './category-icon';

interface ProgressHeaderProps {
  category: CategoryType;
  progress: number;
  canGoBack: boolean;
  onBack: () => void;
  title: string;
}

export const ProgressHeader = memo(function ProgressHeader({
  category,
  progress,
  canGoBack,
  onBack,
  title
}: ProgressHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <CategoryIcon category={category} />
          <h1 className="text-3xl font-bold">{title}</h1>
        </div>
        {canGoBack && (
          <Button
            variant="ghost"
            onClick={onBack}
            className="flex items-center gap-2"
            aria-label="Go back to previous question"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
        )}
      </div>
      <Progress 
        value={progress} 
        className="h-2" 
        aria-label="Quiz progress"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      />
      <p className="text-center mt-2 text-muted-foreground">
        {Math.round(progress)}% Complete
      </p>
    </div>
  );
});
