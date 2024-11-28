import { memo } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft } from 'lucide-react';
import type { CategoryType } from '@/types/quiz';
import { CategoryIcon } from './category-icon';

interface ProgressHeaderProps {
  category?: CategoryType;
  progress: number;
  canGoBack?: boolean;
  onBack?: () => void;
  title: string;
  currentStep?: number;
  totalSteps?: number;
}

export const ProgressHeader = memo(function ProgressHeader({
  category,
  progress,
  canGoBack,
  onBack,
  title,
  currentStep,
  totalSteps
}: ProgressHeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {category && <CategoryIcon category={category} />}
          <h1 className="text-3xl font-bold">{title}</h1>
        </div>
        {canGoBack && onBack && (
          <Button
            variant="ghost"
            onClick={onBack}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
        )}
      </div>
      
      <div className="space-y-2">
        {currentStep && totalSteps && (
          <div className="text-sm text-muted-foreground">
            Step {currentStep} of {totalSteps}
          </div>
        )}
        <Progress value={progress} className="h-2" />
      </div>
    </div>
  );
});
