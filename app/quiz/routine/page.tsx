'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  ArrowRight as ArrowRightIcon, 
  ArrowLeft as ArrowLeftIcon, 
  Sparkles as SparklesIcon
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const routineQuestions = [
  {
    question: "What is your primary skin concern?",
    options: [
      "Acne and breakouts",
      "Aging and fine lines",
      "Dryness and dehydration",
      "Uneven skin tone"
    ]
  },
  {
    question: "How would you describe your skin type?",
    options: [
      "Oily",
      "Dry",
      "Combination",
      "Normal",
      "Sensitive"
    ]
  },
  {
    question: "What is your primary skincare goal?",
    options: [
      "Hydration",
      "Anti-aging",
      "Brightening",
      "Acne control",
      "Pore minimization"
    ]
  }
];

export default function RoutineQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [quizComplete, setQuizComplete] = useState(false);
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  const handleAnswerClick = (selectedOption: string) => {
    const newSelectedAnswers = [...selectedAnswers, selectedOption];
    setSelectedAnswers(newSelectedAnswers);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < routineQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setQuizComplete(true);
    }
    
    setProgress(((nextQuestion) / routineQuestions.length) * 100);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setQuizComplete(false);
    setProgress(0);
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setSelectedAnswers(prev => prev.slice(0, -1));
      setProgress(((currentQuestion - 1) / routineQuestions.length) * 100);
    }
  };

  const questionVariants = {
    initial: { x: 50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -50, opacity: 0 }
  };

  const generateRoutineRecommendation = () => {
    const skinConcern = selectedAnswers[0];
    const skinType = selectedAnswers[1];
    const skinGoal = selectedAnswers[2];

    let recommendation = "Based on your responses, here's a suggested skincare routine:\n\n";

    switch (skinType) {
      case "Oily":
        recommendation += "- Gentle Foaming Cleanser\n- Salicylic Acid Toner\n- Lightweight, Oil-Free Moisturizer\n";
        break;
      case "Dry":
        recommendation += "- Hydrating Cream Cleanser\n- Hyaluronic Acid Serum\n- Rich, Nourishing Moisturizer\n";
        break;
      case "Combination":
        recommendation += "- Balanced pH Cleanser\n- Niacinamide Serum\n- Gel-Cream Moisturizer\n";
        break;
      default:
        recommendation += "- Gentle, Balanced Cleanser\n- Hydrating Serum\n- Lightweight Moisturizer\n";
    }

    recommendation += "\nAdditional tips:\n";
    switch (skinConcern) {
      case "Acne and breakouts":
        recommendation += "- Use Benzoyl Peroxide or Salicylic Acid spot treatment\n- Consider Tea Tree Oil\n";
        break;
      case "Aging and fine lines":
        recommendation += "- Include Retinol or Peptide Serum\n- Use Vitamin C in the morning\n";
        break;
      case "Dryness and dehydration":
        recommendation += "- Add a Hyaluronic Acid Serum\n- Use Ceramide-rich products\n";
        break;
    }

    return recommendation;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {!quizComplete ? (
          <div className="max-w-2xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <SparklesIcon className="w-6 h-6 text-primary" />
                  <h1 className="text-3xl font-bold">
                    Skincare Routine Builder
                  </h1>
                </div>
                {currentQuestion > 0 && (
                  <Button
                    variant="ghost"
                    onClick={goBack}
                    className="flex items-center gap-2"
                  >
                    <ArrowLeftIcon className="w-4 h-4" />
                    Back
                  </Button>
                )}
              </div>
              <Progress value={progress} className="h-2" />
              <p className="text-center mt-2 text-muted-foreground">
                {Math.round(progress)}% Complete
              </p>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion}
                variants={questionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="bg-card rounded-xl p-8 shadow-lg"
              >
                <h2 className="text-2xl font-semibold mb-6">
                  {routineQuestions[currentQuestion].question}
                </h2>
                <div className="grid gap-4">
                  {routineQuestions[currentQuestion].options.map((option, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full py-6 text-lg justify-start px-6 hover:bg-primary/5"
                      onClick={() => handleAnswerClick(option)}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto bg-card rounded-lg shadow-lg p-8"
          >
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">Your Personalized Routine</h1>
              <p className="text-xl text-muted-foreground">
                Based on your skin type and concerns
              </p>
            </div>

            <div className="grid gap-8">
              <div className="bg-background/50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Recommended Products</h2>
                <div className="space-y-4">
                  {generateRoutineRecommendation().split('\n').map((line, index) => (
                    line.trim() && (
                      <div key={index} className="flex items-start gap-3">
                        {line.startsWith('-') && (
                          <div className="bg-primary/10 p-2 rounded-lg mt-1">
                            <SparklesIcon className="w-4 h-4 text-primary" />
                          </div>
                        )}
                        <p className="text-lg">{line.replace('-', '').trim()}</p>
                      </div>
                    )
                  ))}
                </div>
              </div>

              <div className="mt-8 flex justify-center gap-4">
                <Button 
                  variant="outline" 
                  className="bg-gray-800 hover:bg-gray-700 text-white"
                  onClick={() => router.push('/quiz')}
                >
                  <ArrowLeftIcon className="mr-2" /> Back to Quizzes
                </Button>
                <Button 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                  onClick={() => window.location.reload()}
                >
                  Retake Quiz
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
