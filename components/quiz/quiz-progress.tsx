'use client';

import { useQuiz } from '@/contexts/quiz-context';
import { motion } from 'framer-motion';
import { Check, ChevronRight } from 'lucide-react';
import { usePathname } from 'next/navigation';

const quizSteps = [
  { id: 'lifestyle', name: 'Lifestyle', path: '/quiz/lifestyle' },
  { id: 'concerns', name: 'Skin Concerns', path: '/quiz/concerns' },
  { id: 'ingredients', name: 'Ingredients', path: '/quiz/ingredients' },
  { id: 'results', name: 'Results', path: '/quiz/results' }
];

export function QuizProgress() {
  const pathname = usePathname();
  const { state } = useQuiz();

  // Calculate current step index
  const currentStepIndex = quizSteps.findIndex(step => pathname.includes(step.id));
  
  // Calculate completion status for each step
  const getStepStatus = (stepIndex: number) => {
    if (stepIndex < currentStepIndex) return 'completed';
    if (stepIndex === currentStepIndex) return 'current';
    return 'upcoming';
  };

  // Calculate progress percentage
  const progress = ((currentStepIndex + 1) / quizSteps.length) * 100;

  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      {/* Progress bar */}
      <div className="relative h-2 bg-primary/10 rounded-full overflow-hidden mb-6">
        <motion.div
          className="absolute top-0 left-0 h-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      </div>

      {/* Step indicators */}
      <div className="flex justify-between items-center">
        {quizSteps.map((step, index) => {
          const status = getStepStatus(index);
          
          return (
            <div key={step.id} className="flex items-center">
              {/* Step circle */}
              <motion.div
                className={`
                  flex items-center justify-center w-8 h-8 rounded-full
                  ${status === 'completed' ? 'bg-primary text-primary-foreground' :
                    status === 'current' ? 'bg-primary text-primary-foreground' :
                    'bg-primary/10 text-muted-foreground'}
                `}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {status === 'completed' ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <span className="text-sm font-medium">{index + 1}</span>
                )}
              </motion.div>

              {/* Step label */}
              <span
                className={`
                  ml-2 text-sm font-medium hidden sm:inline-block
                  ${status === 'completed' || status === 'current' 
                    ? 'text-foreground' 
                    : 'text-muted-foreground'}
                `}
              >
                {step.name}
              </span>

              {/* Connector line */}
              {index < quizSteps.length - 1 && (
                <div className="flex-1 mx-4">
                  <ChevronRight 
                    className={`w-4 h-4 ${
                      status === 'completed' ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
