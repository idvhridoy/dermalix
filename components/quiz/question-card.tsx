import { memo } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Option {
  id: string;
  label: string;
  impact: string;
}

interface QuestionCardProps {
  question: string;
  options: Option[];
  selectedOption: string | undefined;
  onOptionSelect: (optionId: string, impact: string) => void;
}

const questionVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export const QuestionCard = memo(function QuestionCard({ question, options, selectedOption, onOptionSelect }: QuestionCardProps) {
  return (
    <motion.div
      variants={questionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-card rounded-xl p-8 shadow-lg"
      role="group"
      aria-labelledby="question-title"
    >
      <h2 id="question-title" className="text-2xl font-semibold mb-6">
        {question}
      </h2>
      <div 
        className="grid gap-4"
        role="radiogroup"
        aria-labelledby="question-title"
      >
        {options.map((option) => (
          <Button
            key={option.id}
            variant="outline"
            className={cn(
              "w-full py-6 text-lg justify-start px-6 hover:bg-primary/5",
              selectedOption === option.id
                ? "bg-primary/10 text-primary"
                : ""
            )}
            onClick={() => onOptionSelect(option.id, option.impact)}
            role="radio"
            aria-checked={selectedOption === option.id}
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                onOptionSelect(option.id, option.impact);
              }
            }}
          >
            {option.label}
          </Button>
        ))}
      </div>
    </motion.div>
  );
});
