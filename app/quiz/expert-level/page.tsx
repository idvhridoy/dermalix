'use client';

import React, { useState } from 'react';

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

export default function ExpertLevelQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

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
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Expert Level Skincare Quiz</h1>
      
      {showScore ? (
        <div className="text-center bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            You scored {score} out of {expertQuestions.length}
          </h2>
          <p className="mb-6">
            {score === expertQuestions.length 
              ? "Wow! You're a true skincare expert!" 
              : score >= expertQuestions.length * 0.75 
                ? "Impressive knowledge! You're well-versed in advanced skincare." 
                : score >= expertQuestions.length * 0.5
                  ? "Good effort! Keep learning about skincare science." 
                  : "There's always more to learn about skincare. Keep exploring!"}
          </p>
          <button 
            onClick={restartQuiz}
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded"
          >
            Restart Expert Quiz
          </button>
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">
            Question {currentQuestion + 1} of {expertQuestions.length}
          </h2>
          <p className="mb-4 text-lg">
            {expertQuestions[currentQuestion].question}
          </p>
          <div className="space-y-3">
            {expertQuestions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(index)}
                className="w-full text-left bg-gray-100 hover:bg-gray-200 p-3 rounded-lg transition-colors"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
