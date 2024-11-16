'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, ArrowLeft, Beaker } from 'lucide-react';
import { useRouter } from 'next/navigation';

const ingredientQuestions = [
  {
    question: "What is the primary function of Hyaluronic Acid in skincare?",
    options: [
      "Exfoliation",
      "Hydration",
      "Sun protection",
      "Skin brightening"
    ],
    correctAnswer: 1
  },
  {
    question: "Which ingredient is best known for treating acne?",
    options: [
      "Vitamin C",
      "Salicylic Acid",
      "Hyaluronic Acid",
      "Retinol"
    ],
    correctAnswer: 1
  },
  {
    question: "What does Niacinamide help with in skincare?",
    options: [
      "Moisture retention",
      "Reducing inflammation",
      "Pore minimization",
      "All of the above"
    ],
    correctAnswer: 3
  }
];

export default function IngredientsQuiz() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleAnswerClick = (selectedAnswer: number) => {
    if (selectedAnswer === ingredientQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < ingredientQuestions.length) {
      setCurrentQuestion(nextQuestion);
      setProgress(((nextQuestion) / ingredientQuestions.length) * 100);
    } else {
      setShowScore(true);
      setProgress(100);
    }
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
      setProgress(((currentQuestion - 1) / ingredientQuestions.length) * 100);
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
                  <Beaker className="w-6 h-6 text-primary" />
                  <h1 className="text-3xl font-bold">Ingredients Knowledge</h1>
                </div>
                {currentQuestion > 0 && (
                  <Button
                    variant="ghost"
                    onClick={goBack}
                    className="flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
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
                  {ingredientQuestions[currentQuestion].question}
                </h2>
                <div className="grid gap-4">
                  {ingredientQuestions[currentQuestion].options.map((option, index) => (
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
            className="max-w-4xl mx-auto bg-black rounded-lg shadow-lg p-8 text-white"
          >
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Quiz Results</h1>
              <p className="text-2xl text-purple-300">
                You scored {score} out of {ingredientQuestions.length}
              </p>
            </div>

            <div className="grid gap-8">
              <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800">
                <h2 className="text-2xl font-bold mb-4 text-blue-400">Feedback</h2>
                <div className="flex items-start gap-3">
                  <div className="bg-purple-500/10 p-2 rounded-lg mt-1">
                    <Beaker className="w-4 h-4 text-purple-400" />
                  </div>
                  <p className="text-lg text-zinc-300">
                    {score === ingredientQuestions.length 
                      ? "Perfect score! You're an ingredient expert!" 
                      : score >= ingredientQuestions.length * 0.75 
                        ? "Great job! You know a lot about skincare ingredients." 
                        : score >= ingredientQuestions.length * 0.5
                          ? "Good effort! Keep learning about skincare ingredients." 
                          : "There's always more to learn about skincare ingredients."}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex justify-center gap-4">
                <Button
                  onClick={restartQuiz}
                  size="lg"
                  variant="outline"
                  className="gap-2 border-purple-500 text-purple-400 hover:bg-purple-500/10"
                >
                  <ArrowRight className="w-4 h-4 rotate-180" />
                  Restart Quiz
                </Button>
                <Button
                  size="lg"
                  className="gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                  onClick={() => router.push('/quiz')}
                >
                  View All Quizzes
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
