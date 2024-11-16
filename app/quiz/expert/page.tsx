'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  ArrowRight as ArrowRightIcon, 
  ArrowLeft as ArrowLeftIcon, 
  GraduationCap as GraduationCapIcon
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const expertQuestions = [
  {
    question: "Which ingredient can help with both hyperpigmentation and collagen production?",
    options: [
      "Hyaluronic Acid",
      "Vitamin C",
      "Niacinamide",
      "Glycerin"
    ],
    correctAnswer: 1
  },
  {
    question: "What is the primary mechanism of action for Retinoids in skincare?",
    options: [
      "Hydration",
      "Exfoliation",
      "Cellular turnover and collagen stimulation",
      "Sebum control"
    ],
    correctAnswer: 2
  },
  {
    question: "Which of the following is NOT a chemical exfoliant?",
    options: [
      "Glycolic Acid",
      "Salicylic Acid",
      "Lactic Acid",
      "Jojoba Beads"
    ],
    correctAnswer: 3
  },
  {
    question: "What is the role of ceramides in skincare?",
    options: [
      "Moisture retention",
      "Skin barrier repair",
      "Anti-aging",
      "Both A and B"
    ],
    correctAnswer: 3
  }
];

export default function ExpertQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const router = useRouter();

  const handleAnswerClick = (selectedAnswer: number) => {
    if (selectedAnswer === expertQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < expertQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setQuizComplete(true);
    }
    
    const progress = ((nextQuestion) / expertQuestions.length) * 100;
    setSelectedAnswers([...selectedAnswers, expertQuestions[currentQuestion].options[selectedAnswer]]);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizComplete(false);
    setSelectedAnswers([]);
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      const progress = ((currentQuestion - 1) / expertQuestions.length) * 100;
    }
  };

  const questionVariants = {
    initial: { x: 50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -50, opacity: 0 }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {!quizComplete ? (
          <div className="max-w-2xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <GraduationCapIcon className="w-6 h-6 text-primary" />
                  <h1 className="text-3xl font-bold">
                    Expert Level Quiz
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
              <Progress value={((currentQuestion + 1) / expertQuestions.length) * 100} className="h-2" />
              <p className="text-center mt-2 text-muted-foreground">
                {Math.round(((currentQuestion + 1) / expertQuestions.length) * 100)}% Complete
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
                  {expertQuestions[currentQuestion].question}
                </h2>
                <div className="grid gap-4">
                  {expertQuestions[currentQuestion].options.map((option, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full py-6 text-lg justify-start px-6 hover:bg-primary/5"
                      onClick={() => handleAnswerClick(index)}
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
              <h1 className="text-4xl font-bold mb-4">Quiz Results</h1>
              <p className="text-xl text-muted-foreground">
                You scored {score} out of {expertQuestions.length}
              </p>
            </div>

            <div className="grid gap-8">
              <div className="bg-background/50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Feedback</h2>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg mt-1">
                    <GraduationCapIcon className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-lg">
                    {score === expertQuestions.length 
                      ? "Wow! You're a true skincare expert!" 
                      : score >= expertQuestions.length * 0.75 
                        ? "Impressive knowledge! You're well-versed in advanced skincare." 
                        : score >= expertQuestions.length * 0.5
                          ? "Good effort! Keep learning about skincare science." 
                          : "There's always more to learn about skincare. Keep exploring!"}
                  </p>
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
