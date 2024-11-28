import { memo } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import type { QuizQuestion } from '@/types/quiz';

interface QuestionCardProps {
  question: QuizQuestion;
  onAnswerSelect: (answer: string, impact: string) => void;
}

const questionVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export const QuestionCard = memo(function QuestionCard({ question, onAnswerSelect }: QuestionCardProps) {
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
        {question.question}
      </h2>
      <div 
        className="grid gap-4"
        role="radiogroup"
        aria-labelledby="question-title"
      >
        {('options' in question ? question.options : []).map((option, index) => {
          const { text, impact } = typeof option === 'string' ? { text: option, impact: '' } : option;
          return (
            <Button
              key={text}
              variant="outline"
              className="w-full py-6 text-lg justify-start px-6 hover:bg-primary/5"
              onClick={() => onAnswerSelect(text, impact)}
              role="radio"
              aria-checked="false"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onAnswerSelect(text, impact);
                }
              }}
            >
              {text}
            </Button>
          );
        })}
      </div>
    </motion.div>
  );
});
