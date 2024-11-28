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

const ingredientQuestions = [
  {
    id: 'sensitivity',
    question: 'How sensitive is your skin to new products?',
    options: [
      { id: 'very-sensitive', label: 'Very sensitive', impact: 'High' },
      { id: 'somewhat-sensitive', label: 'Somewhat sensitive', impact: 'Medium' },
      { id: 'rarely-sensitive', label: 'Rarely sensitive', impact: 'Low' },
      { id: 'not-sensitive', label: 'Not sensitive', impact: 'None' }
    ]
  },
  {
    id: 'allergies',
    question: 'Do you have any known allergies to skincare ingredients?',
    options: [
      { id: 'fragrance', label: 'Fragrance sensitivity', impact: 'High' },
      { id: 'preservatives', label: 'Preservative sensitivity', impact: 'High' },
      { id: 'specific', label: 'Specific ingredients', impact: 'Medium' },
      { id: 'none', label: 'No known allergies', impact: 'None' }
    ]
  },
  {
    id: 'retinol',
    question: 'Have you used retinol products before?',
    options: [
      { id: 'regular', label: 'Yes, regularly', impact: 'None' },
      { id: 'sometimes', label: 'Yes, occasionally', impact: 'Low' },
      { id: 'tried', label: 'Tried once', impact: 'Medium' },
      { id: 'never', label: 'Never used', impact: 'High' }
    ]
  },
  {
    id: 'acids',
    question: 'How does your skin react to exfoliating acids?',
    options: [
      { id: 'well', label: 'Tolerates well', impact: 'None' },
      { id: 'mild', label: 'Mild sensitivity', impact: 'Low' },
      { id: 'moderate', label: 'Moderate sensitivity', impact: 'Medium' },
      { id: 'severe', label: 'Severe sensitivity', impact: 'High' }
    ]
  },
  {
    id: 'natural',
    question: 'Do you prefer natural/organic ingredients?',
    options: [
      { id: 'always', label: 'Always prefer natural', impact: 'High' },
      { id: 'mostly', label: 'Mostly prefer natural', impact: 'Medium' },
      { id: 'sometimes', label: 'Sometimes prefer natural', impact: 'Low' },
      { id: 'no-preference', label: 'No preference', impact: 'None' }
    ]
  }
];

export default function IngredientsQuizPage() {
  const router = useRouter();
  const { state, dispatch } = useQuiz();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Load saved answers if they exist
  useEffect(() => {
    const savedAnswers = state.answers.reduce((acc, answer) => {
      if (answer.category === 'ingredients' && answer.questionId) {
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
        category: 'ingredients' as const,
        questionId,
        selectedOption: optionId,
        impact
      }
    });
  }, [dispatch]);

  const handleNext = useCallback(() => {
    if (currentQuestionIndex < ingredientQuestions.length - 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev + 1);
        setIsTransitioning(false);
      }, 300);
    } else {
      router.push('/quiz/results');
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
      router.push('/quiz/concerns');
    }
  }, [currentQuestionIndex, router]);

  const currentQuestion = ingredientQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / ingredientQuestions.length) * 100;

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-b from-primary/10 to-primary/5 py-12">
        <div className="container max-w-4xl mx-auto px-4">
          <ProgressHeader 
            title="Ingredient Preferences"
            category="ingredients"
            progress={progress}
            canGoBack={currentQuestionIndex > 0}
            onBack={handlePrevious}
            currentStep={currentQuestionIndex + 1}
            totalSteps={ingredientQuestions.length}
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
              {currentQuestionIndex === ingredientQuestions.length - 1 ? 'View Results' : 'Next'}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}
