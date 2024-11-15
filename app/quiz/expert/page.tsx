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
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleAnswerClick = (selectedAnswer: number) => {
    if (selectedAnswer === expertQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < expertQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
    
    setProgress(((nextQuestion) / expertQuestions.length) * 100);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setProgress(0);
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setProgress(((currentQuestion - 1) / expertQuestions.length) * 100);
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
        {!showScore ? (
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
                  onClick={restartQuiz}
                  size="lg"
                  variant="outline"
                  className="gap-2"
                >
                  <ArrowRightIcon className="w-4 h-4 rotate-180" />
                  Restart Quiz
                </Button>
                <Button
                  size="lg"
                  className="gap-2"
                >
                  View All Quizzes
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
