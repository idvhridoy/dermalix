'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Beaker, ArrowRight, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

const skinAnalysisQuestions = [
  {
    question: 'How does your skin feel after cleansing?',
    options: [
      { text: 'Tight and dry', type: 'Dry' },
      { text: 'Normal and balanced', type: 'Normal' },
      { text: 'Oily, especially in T-zone', type: 'Combination' },
      { text: 'Very oily all over', type: 'Oily' }
    ]
  },
  {
    question: 'How often does your skin get shiny throughout the day?',
    options: [
      { text: 'Never', type: 'Dry' },
      { text: 'Rarely', type: 'Normal' },
      { text: 'Only in T-zone', type: 'Combination' },
      { text: 'Very often', type: 'Oily' }
    ]
  },
  {
    question: 'How does your skin react to new skincare products?',
    options: [
      { text: 'Very sensitive, often gets irritated', type: 'Sensitive' },
      { text: 'Mostly fine, occasional mild reaction', type: 'Normal' },
      { text: 'No reactions at all', type: 'Resilient' },
      { text: 'Breaks out or gets red easily', type: 'Reactive' }
    ]
  }
];

export default function SkinAnalysisQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const router = useRouter();

  const handleAnswer = (answerType: string) => {
    const newAnswers = [...answers, answerType];
    setAnswers(newAnswers);

    // Ensure we don't go out of bounds
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < skinAnalysisQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const determineResult = () => {
    // Ensure we have answers before processing
    if (answers.length === 0) {
      return {
        description: 'Unable to determine skin type',
        recommendations: ['Please complete the quiz']
      };
    }

    const typeCounts = answers.reduce((acc, type) => {
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // Fallback if no dominant type found
    const dominantType = Object.entries(typeCounts).length > 0 
      ? Object.entries(typeCounts).reduce((a, b) => 
          b[1] > a[1] ? b : a
        )[0] 
      : 'Normal';

    const skinTypeDetails = {
      'Dry': {
        description: 'Your skin lacks natural oils and needs extra hydration.',
        recommendations: [
          'Use gentle, hydrating cleansers',
          'Apply rich, creamy moisturizers',
          'Use hyaluronic acid serums',
          'Avoid harsh, alcohol-based products'
        ]
      },
      'Oily': {
        description: 'Your skin produces excess sebum, leading to shine and potential breakouts.',
        recommendations: [
          'Use oil-free, non-comedogenic products',
          'Incorporate salicylic acid cleansers',
          'Use lightweight, gel-based moisturizers',
          'Use clay masks weekly'
        ]
      },
      'Combination': {
        description: 'Your skin is oily in some areas (T-zone) and dry in others.',
        recommendations: [
          'Use balanced, multi-purpose products',
          'Apply different products to different areas',
          'Use gentle, pH-balanced cleansers',
          'Consider zone-specific treatments'
        ]
      },
      'Normal': {
        description: 'Your skin is well-balanced and not prone to significant issues.',
        recommendations: [
          'Maintain consistent skincare routine',
          'Use gentle, hydrating products',
          'Focus on prevention and protection',
          'Use sunscreen daily'
        ]
      },
      'Sensitive': {
        description: 'Your skin is easily irritated and requires gentle care.',
        recommendations: [
          'Use fragrance-free, hypoallergenic products',
          'Avoid harsh exfoliants and astringents',
          'Apply soothing, calming products',
          'Patch test new products carefully'
        ]
      },
      'Resilient': {
        description: 'Your skin is strong and can handle various products and treatments.',
        recommendations: [
          'Use a variety of products to address different concerns',
          'Incorporate active ingredients like retinol and peptides',
          'Exfoliate regularly to maintain skin texture',
          'Consider professional treatments like chemical peels'
        ]
      },
      'Reactive': {
        description: 'Your skin is prone to breakouts and redness, requiring careful product selection.',
        recommendations: [
          'Use non-comedogenic, oil-free products',
          'Avoid products with artificial fragrances and dyes',
          'Apply soothing, calming products to reduce redness',
          'Consider spot treatments for breakouts'
        ]
      }
    };

    // Safely access skin type details
    return skinTypeDetails[dominantType as keyof typeof skinTypeDetails] || {
      description: 'Unable to determine skin type',
      recommendations: ['Please complete the quiz']
    };
  };

  // Prevent rendering if questions are not defined
  if (!skinAnalysisQuestions || skinAnalysisQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p>Quiz questions could not be loaded.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-900 rounded-lg shadow-lg p-6">
        {!showResult ? (
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-4">
                <Beaker className="w-12 h-12 text-blue-400 mr-2" />
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Skin Analysis Quiz
                </h2>
              </div>
              
              <Progress 
                value={((currentQuestion + 1) / skinAnalysisQuestions.length) * 100} 
                className="mb-4"
              />
              
              <p className="text-xl mb-6 text-gray-200">
                {skinAnalysisQuestions[currentQuestion]?.question || 'Loading question...'}
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {(skinAnalysisQuestions[currentQuestion]?.options || []).map((option, index) => (
                  <Button 
                    key={index} 
                    variant="outline" 
                    className="w-full bg-gray-800 hover:bg-gray-700 text-white"
                    onClick={() => handleAnswer(option.type)}
                  >
                    {option.text}
                  </Button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Your Skin Type
            </h2>
            
            {(() => {
              const result = determineResult();
              return (
                <div>
                  <p className="text-xl mb-4 text-gray-200">{result.description}</p>
                  
                  <h3 className="text-2xl font-semibold mb-2 text-blue-300">
                    Recommendations
                  </h3>
                  <ul className="list-disc list-inside text-left text-gray-300 mb-6">
                    {result.recommendations.map((rec, index) => (
                      <li key={index}>{rec}</li>
                    ))}
                  </ul>
                  
                  <div className="flex justify-center space-x-4">
                    <Button 
                      variant="outline" 
                      className="bg-gray-800 hover:bg-gray-700 text-white"
                      onClick={() => router.push('/quiz')}
                    >
                      <ArrowLeft className="mr-2" /> Back to Quizzes
                    </Button>
                    <Button 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                      onClick={() => window.location.reload()}
                    >
                      Retake Quiz
                    </Button>
                  </div>
                </div>
              );
            })()}
          </motion.div>
        )}
      </div>
    </div>
  );
}
