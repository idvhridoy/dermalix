'use client';

import React, { useState } from 'react';

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
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (selectedAnswer: number) => {
    if (selectedAnswer === ingredientQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < ingredientQuestions.length) {
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
      <h1 className="text-3xl font-bold mb-6 text-center">Ingredients Knowledge Quiz</h1>
      
      {showScore ? (
        <div className="text-center bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            You scored {score} out of {ingredientQuestions.length}
          </h2>
          <p className="mb-6">
            {score === ingredientQuestions.length 
              ? "Perfect score! You're an ingredient expert!" 
              : score >= ingredientQuestions.length * 0.75 
                ? "Great job! You know a lot about skincare ingredients." 
                : score >= ingredientQuestions.length * 0.5
                  ? "Good effort! Keep learning about skincare ingredients." 
                  : "There's always more to learn about skincare ingredients."}
          </p>
          <button 
            onClick={restartQuiz}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">
            Question {currentQuestion + 1} of {ingredientQuestions.length}
          </h2>
          <p className="mb-4 text-lg">
            {ingredientQuestions[currentQuestion].question}
          </p>
          <div className="space-y-3">
            {ingredientQuestions[currentQuestion].options.map((option, index) => (
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
