'use client';

import React, { useState } from 'react';

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

export default function RoutineBuilderQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [quizComplete, setQuizComplete] = useState(false);

  const handleAnswerClick = (selectedOption: string) => {
    const newSelectedAnswers = [...selectedAnswers, selectedOption];
    setSelectedAnswers(newSelectedAnswers);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < routineQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setQuizComplete(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setQuizComplete(false);
  };

  const generateRoutineRecommendation = () => {
    // Basic recommendation logic based on selected answers
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
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Skincare Routine Builder</h1>
      
      {quizComplete ? (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Your Personalized Skincare Routine</h2>
          <pre className="bg-gray-100 p-4 rounded-lg whitespace-pre-wrap">
            {generateRoutineRecommendation()}
          </pre>
          <button 
            onClick={restartQuiz}
            className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Restart Routine Builder
          </button>
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">
            Question {currentQuestion + 1} of {routineQuestions.length}
          </h2>
          <p className="mb-4 text-lg">
            {routineQuestions[currentQuestion].question}
          </p>
          <div className="space-y-3">
            {routineQuestions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option)}
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
