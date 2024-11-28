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

const lifestyleQuestions = [
  {
    id: 'sleep',
    question: 'How would you describe your sleep pattern?',
    options: [
      { id: 'excellent', label: '8+ hours consistently', impact: 'Excellent' },
      { id: 'good', label: '6-8 hours most nights', impact: 'Good' },
      { id: 'fair', label: '4-6 hours irregular', impact: 'Fair' },
      { id: 'poor', label: 'Less than 4 hours', impact: 'Poor' }
    ]
  },
  {
    id: 'stress',
    question: 'How do you manage stress in your daily life?',
    options: [
      { id: 'excellent', label: 'Regular meditation/yoga', impact: 'Excellent' },
      { id: 'good', label: 'Occasional relaxation', impact: 'Good' },
      { id: 'fair', label: 'Rare stress management', impact: 'Fair' },
      { id: 'poor', label: 'No stress management', impact: 'Poor' }
    ]
  },
  {
    id: 'diet',
    question: 'How would you rate your daily water intake?',
    options: [
      { id: 'excellent', label: '8+ glasses daily', impact: 'Excellent' },
      { id: 'good', label: '6-8 glasses daily', impact: 'Good' },
      { id: 'fair', label: '4-6 glasses daily', impact: 'Fair' },
      { id: 'poor', label: 'Less than 4 glasses', impact: 'Poor' }
    ]
  },
  {
    id: 'exercise',
    question: 'How often do you exercise?',
    options: [
      { id: 'excellent', label: '4-5 times per week', impact: 'Excellent' },
      { id: 'good', label: '2-3 times per week', impact: 'Good' },
      { id: 'fair', label: 'Once per week', impact: 'Fair' },
      { id: 'poor', label: 'Rarely or never', impact: 'Poor' }
    ]
  },
  {
    id: 'screen',
    question: 'How many hours do you spend in front of screens daily?',
    options: [
      { id: 'excellent', label: 'Less than 4 hours', impact: 'Excellent' },
      { id: 'good', label: '4-6 hours', impact: 'Good' },
      { id: 'fair', label: '6-8 hours', impact: 'Fair' },
      { id: 'poor', label: '8+ hours', impact: 'Poor' }
    ]
  }
];

export default function LifestyleQuizPage() {
  const router = useRouter();
  const { state, dispatch } = useQuiz();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Load saved answers if they exist
  useEffect(() => {
    const savedAnswers = state.answers.reduce((acc, answer) => {
      if (answer.category === 'lifestyle') {
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
        category: 'lifestyle',
        questionId,
        selectedOption: optionId,
        impact
      }
    });
  }, [dispatch]);

  const handleNext = useCallback(() => {
    if (currentQuestionIndex < lifestyleQuestions.length - 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev + 1);
        setIsTransitioning(false);
      }, 300);
    } else {
      router.push('/quiz/concerns');
    }
  }, [currentQuestionIndex, router]);

  const handlePrevious = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev - 1);
        setIsTransitioning(false);
      }, 300);
    }
  }, [currentQuestionIndex]);

  const currentQuestion = lifestyleQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / lifestyleQuestions.length) * 100;

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-b from-primary/10 to-primary/5 py-12">
        <div className="container max-w-4xl mx-auto px-4">
          <ProgressHeader 
            title="Lifestyle Assessment"
            currentStep={currentQuestionIndex + 1}
            totalSteps={lifestyleQuestions.length}
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
              disabled={currentQuestionIndex === 0}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </Button>
            <Button
              onClick={handleNext}
              disabled={!selectedAnswers[currentQuestion.id]}
              className="gap-2"
            >
              {currentQuestionIndex === lifestyleQuestions.length - 1 ? 'Next Section' : 'Next'}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}
