'use client';

import { useQuiz } from '@/contexts/quiz-context';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState, useCallback, useEffect } from 'react';
import ErrorBoundary from '@/components/error-boundary';
import { QuestionCard } from '@/components/quiz/question-card';
import { ProgressHeader } from '@/components/quiz/progress-header';

const concernQuestions = [
  {
    id: 'skin-type',
    question: 'How would you describe your skin type?',
    options: [
      { id: 'oily', label: 'Oily', impact: 'High' },
      { id: 'dry', label: 'Dry', impact: 'High' },
      { id: 'combination', label: 'Combination', impact: 'Medium' },
      { id: 'normal', label: 'Normal', impact: 'Low' }
    ]
  },
  {
    id: 'acne',
    question: 'Do you experience breakouts or acne?',
    options: [
      { id: 'frequent', label: 'Frequently', impact: 'High' },
      { id: 'occasional', label: 'Occasionally', impact: 'Medium' },
      { id: 'rare', label: 'Rarely', impact: 'Low' },
      { id: 'never', label: 'Never', impact: 'None' }
    ]
  },
  {
    id: 'aging',
    question: 'What are your aging concerns?',
    options: [
      { id: 'wrinkles', label: 'Fine lines & wrinkles', impact: 'High' },
      { id: 'firmness', label: 'Loss of firmness', impact: 'High' },
      { id: 'prevention', label: 'Prevention', impact: 'Medium' },
      { id: 'none', label: 'No concerns', impact: 'None' }
    ]
  },
  {
    id: 'pigmentation',
    question: 'Do you have any pigmentation concerns?',
    options: [
      { id: 'dark-spots', label: 'Dark spots', impact: 'High' },
      { id: 'uneven-tone', label: 'Uneven skin tone', impact: 'Medium' },
      { id: 'mild', label: 'Mild discoloration', impact: 'Low' },
      { id: 'none', label: 'No concerns', impact: 'None' }
    ]
  },
  {
    id: 'sensitivity',
    question: 'Does your skin experience any of these sensitivities?',
    options: [
      { id: 'redness', label: 'Redness & irritation', impact: 'High' },
      { id: 'dryness', label: 'Flaking & dryness', impact: 'High' },
      { id: 'occasional', label: 'Occasional sensitivity', impact: 'Medium' },
      { id: 'none', label: 'No sensitivity', impact: 'None' }
    ]
  },
  {
    id: 'texture',
    question: 'What texture concerns do you have?',
    options: [
      { id: 'rough', label: 'Rough texture', impact: 'High' },
      { id: 'enlarged-pores', label: 'Enlarged pores', impact: 'High' },
      { id: 'mild-texture', label: 'Mild texture issues', impact: 'Medium' },
      { id: 'none', label: 'No concerns', impact: 'None' }
    ]
  }
];

export default function ConcernsQuizPage() {
  const router = useRouter();
  const { state, dispatch } = useQuiz();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Load saved answers if they exist
  useEffect(() => {
    const savedAnswers = state.answers.reduce((acc, answer) => {
      if (answer.category === 'concerns') {
        acc[answer.questionId] = answer.selectedOption;
      }
      return acc;
    }, {} as Record<string, string>);
    setSelectedAnswers(savedAnswers);
  }, [state.answers]);

  const handleOptionSelect = useCallback((questionId: string, optionId: string, impact: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionId
    }));

    dispatch({
      type: 'ADD_ANSWER',
      payload: {
        category: 'concerns',
        questionId,
        selectedOption: optionId,
        impact
      }
    });
  }, [dispatch]);

  const handleNext = useCallback(() => {
    if (currentQuestionIndex < concernQuestions.length - 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev + 1);
        setIsTransitioning(false);
      }, 300);
    } else {
      router.push('/quiz/ingredients');
    }
  }, [currentQuestionIndex, router]);

  const handlePrevious = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev - 1);
        setIsTransitioning(false);
      }, 300);
    } else {
      router.push('/quiz/lifestyle');
    }
  }, [currentQuestionIndex, router]);

  const currentQuestion = concernQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / concernQuestions.length) * 100;

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-b from-primary/10 to-primary/5 py-12">
        <div className="container max-w-4xl mx-auto px-4">
          <ProgressHeader 
            title="Skin Concerns"
            currentStep={currentQuestionIndex + 1}
            totalSteps={concernQuestions.length}
            progress={progress}
          />

          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: isTransitioning ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isTransitioning ? -50 : 50 }}
            transition={{ duration: 0.3 }}
            className="mt-8"
          >
            <QuestionCard
              question={currentQuestion.question}
              options={currentQuestion.options}
              selectedOption={selectedAnswers[currentQuestion.id]}
              onOptionSelect={(optionId, impact) => 
                handleOptionSelect(currentQuestion.id, optionId, impact)
              }
            />
          </motion.div>

          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={handlePrevious}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              {currentQuestionIndex === 0 ? 'Previous Section' : 'Previous'}
            </Button>
            <Button
              onClick={handleNext}
              disabled={!selectedAnswers[currentQuestion.id]}
              className="gap-2"
            >
              {currentQuestionIndex === concernQuestions.length - 1 ? 'Next Section' : 'Next'}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}
