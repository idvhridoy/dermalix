'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Heart, 
  Beaker,
  GraduationCap,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Trophy,
  Award,
  Medal,
  Star
} from 'lucide-react';

const quizzes = [
  {
    title: 'Lifestyle Quiz',
    description: 'Discover how your daily habits affect your skin health',
    icon: Heart,
    href: '/quiz/lifestyle',
    gradient: 'from-pink-500 to-rose-500',
    questions: [
      {
        question: 'How much water do you drink daily?',
        options: [
          { text: 'Less than 4 cups', type: 'Low' },
          { text: '4-6 cups', type: 'Moderate' },
          { text: '6-8 cups', type: 'Good' },
          { text: 'More than 8 cups', type: 'Excellent' }
        ]
      },
      {
        question: 'How many hours do you sleep on average?',
        options: [
          { text: 'Less than 6 hours', type: 'Poor' },
          { text: '6-7 hours', type: 'Fair' },
          { text: '7-8 hours', type: 'Good' },
          { text: 'More than 8 hours', type: 'Excellent' }
        ]
      }
    ]
  },
  {
    title: 'Skin Analysis Quiz',
    description: 'Discover your unique skin type and characteristics',
    icon: Beaker,
    href: '/quiz/skin-analysis',
    gradient: 'from-blue-500 to-purple-500',
    questions: [
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
      }
    ]
  },
  {
    title: 'Ingredients Knowledge',
    description: 'Test your understanding of skincare ingredients',
    icon: Beaker,
    href: '/quiz/ingredients',
    gradient: 'from-teal-500 to-green-500',
    questions: [
      {
        question: 'What does Hyaluronic Acid do?',
        options: [
          { text: 'Hydrates skin', type: 'Correct' },
          { text: 'Exfoliates', type: 'Wrong' },
          { text: 'Treats acne', type: 'Wrong' },
          { text: 'Reduces wrinkles', type: 'Wrong' }
        ]
      }
    ]
  },
  {
    title: 'Routine Builder',
    description: 'Create your perfect skincare routine',
    icon: Sparkles,
    href: '/quiz/routine',
    gradient: 'from-amber-500 to-orange-500',
    questions: [
      {
        question: 'What is your skin type?',
        options: [
          { text: 'Dry', type: 'Dry' },
          { text: 'Normal', type: 'Normal' },
          { text: 'Combination', type: 'Combination' },
          { text: 'Oily', type: 'Oily' }
        ]
      }
    ]
  },
  {
    title: 'Expert Level',
    description: 'Advanced skincare science and techniques',
    icon: GraduationCap,
    href: '/quiz/expert',
    gradient: 'from-emerald-500 to-teal-500',
    questions: [
      {
        question: 'What is the primary function of the skin\'s barrier function?',
        options: [
          { text: 'To regulate body temperature', type: 'Wrong' },
          { text: 'To protect against external factors', type: 'Correct' },
          { text: 'To aid in the production of vitamin D', type: 'Wrong' },
          { text: 'To facilitate the removal of waste products', type: 'Wrong' }
        ]
      }
    ]
  }
];

export default function QuizPage() {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleQuizSelect = (quiz) => {
    window.location.href = quiz.href;
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Dermalix Quizzes
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quizzes.map((quiz, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.3
              }}
              className={`
                bg-gray-900 rounded-xl p-6 
                border border-transparent 
                hover:border-purple-500 
                transition-all duration-300 
                cursor-pointer 
                group
                relative
                overflow-hidden
              `}
              onClick={() => handleQuizSelect(quiz)}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Gradient Background */}
              <div 
                className={`
                  absolute inset-0 
                  opacity-20 
                  group-hover:opacity-30 
                  transition-opacity 
                  duration-300 
                  ${quiz.gradient}
                `}
              />
              
              {/* Quiz Card Content */}
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <quiz.icon className="w-10 h-10 mr-4 text-purple-400 group-hover:text-purple-300 transition-colors" />
                  <h2 className="text-2xl font-bold text-white group-hover:text-purple-200 transition-colors">
                    {quiz.title}
                  </h2>
                </div>
                
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors mb-4">
                  {quiz.description}
                </p>
                
                <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                  <span className="mr-2">Start Quiz</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
