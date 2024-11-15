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
  Medal
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
    title: 'Ingredients Knowledge',
    description: 'Test your understanding of skincare ingredients',
    icon: Beaker,
    href: '/quiz/ingredients',
    gradient: 'from-blue-500 to-purple-500',
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
    gradient: 'from-amber-500 to-orange-500'
  },
  {
    title: 'Expert Level',
    description: 'Advanced skincare science and techniques',
    icon: GraduationCap,
    href: '/quiz/expert',
    gradient: 'from-emerald-500 to-teal-500'
  }
];

export default function QuizPage() {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleQuizSelect = (quiz) => {
    setSelectedQuiz(quiz);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < selectedQuiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const progress = selectedQuiz 
    ? ((currentQuestion + 1) / selectedQuiz.questions.length) * 100 
    : 0;

  if (!selectedQuiz) {
    return (
      <div className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Skincare Quizzes
            </h1>
            <p className="text-xl text-zinc-400">
              Test your knowledge and get personalized recommendations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {quizzes.map((quiz, index) => (
              <motion.div
                key={quiz.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
                onClick={() => handleQuizSelect(quiz)}
              >
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 h-full transition-all duration-300 hover:bg-zinc-900/50 hover:border-zinc-700 cursor-pointer">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${quiz.gradient} bg-opacity-10`}>
                      <quiz.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-semibold">{quiz.title}</h2>
                  </div>
                  <p className="text-zinc-400 mb-6">
                    {quiz.description}
                  </p>
                  <div className="flex items-center text-zinc-300 group-hover:text-white transition-colors">
                    <span className="mr-2">Start Quiz</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        {!showResult ? (
          <div className="max-w-2xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <Button
                  variant="ghost"
                  className="text-zinc-400 hover:text-white"
                  onClick={() => setSelectedQuiz(null)}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Quizzes
                </Button>
                <div className="flex items-center gap-2">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${selectedQuiz.gradient} bg-opacity-10`}>
                    <selectedQuiz.icon className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl font-semibold">{selectedQuiz.title}</h2>
                </div>
              </div>
              <Progress value={progress} className="h-2 bg-zinc-800" />
              <p className="text-center mt-2 text-zinc-400">
                Question {currentQuestion + 1} of {selectedQuiz.questions.length}
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                {selectedQuiz.questions[currentQuestion].question}
              </h3>
              <div className="space-y-4">
                {selectedQuiz.questions[currentQuestion].options.map((option, index) => (
                  <motion.div
                    key={option.text}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Button
                      variant="outline"
                      className="w-full text-left justify-start h-auto py-4 px-6 bg-zinc-900 border-zinc-700 hover:bg-zinc-800"
                      onClick={() => handleAnswer(option.type)}
                    >
                      {option.text}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto bg-zinc-900 border border-zinc-800 rounded-xl p-8"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                Quiz Results
              </h2>
              <div className="flex justify-center gap-4">
                <Trophy className="w-8 h-8 text-white" />
                <Award className="w-8 h-8 text-white" />
                <Medal className="w-8 h-8 text-white" />
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {answers.map((answer, index) => (
                  <div key={index} className="bg-zinc-800/50 rounded-lg p-6">
                    <h3 className="font-semibold mb-2">Question {index + 1}</h3>
                    <p className="text-2xl text-white mb-2">{answer}</p>
                    <p className="text-sm text-zinc-400">
                      {selectedQuiz.questions[index].question}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t border-zinc-800 pt-6 mt-6">
                <div className="text-center">
                  <p className="text-sm text-zinc-400 mb-2">Your Score</p>
                  <p className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                    {answers.filter(a => a === 'Correct').length} / {answers.length}
                  </p>
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <Button
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                  onClick={() => setSelectedQuiz(null)}
                >
                  Try Another Quiz
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
