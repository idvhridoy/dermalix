'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  ArrowRight as ArrowRightIcon, 
  ArrowLeft as ArrowLeftIcon, 
  Activity as ActivityIcon, 
  Sun as SunIcon, 
  Moon as MoonIcon, 
  Utensils as UtensilsIcon, 
  Coffee as CoffeeIcon 
} from 'lucide-react';

const lifestyleQuestions = {
  sleep: [
    {
      question: 'How many hours of sleep do you typically get?',
      options: [
        { text: 'Less than 6 hours', impact: 'Poor' },
        { text: '6-7 hours', impact: 'Fair' },
        { text: '7-8 hours', impact: 'Good' },
        { text: 'More than 8 hours', impact: 'Excellent' }
      ]
    },
    {
      question: 'What time do you usually go to bed?',
      options: [
        { text: 'Before 10 PM', impact: 'Excellent' },
        { text: '10 PM - 12 AM', impact: 'Good' },
        { text: '12 AM - 2 AM', impact: 'Fair' },
        { text: 'After 2 AM', impact: 'Poor' }
      ]
    }
  ],
  diet: [
    {
      question: 'How would you rate your water intake?',
      options: [
        { text: 'Less than 4 glasses', impact: 'Poor' },
        { text: '4-6 glasses', impact: 'Fair' },
        { text: '6-8 glasses', impact: 'Good' },
        { text: 'More than 8 glasses', impact: 'Excellent' }
      ]
    },
    {
      question: 'How often do you eat processed foods?',
      options: [
        { text: 'Daily', impact: 'Poor' },
        { text: '2-3 times a week', impact: 'Fair' },
        { text: 'Once a week', impact: 'Good' },
        { text: 'Rarely', impact: 'Excellent' }
      ]
    }
  ],
  stress: [
    {
      question: 'How would you rate your stress levels?',
      options: [
        { text: 'Very High', impact: 'Poor' },
        { text: 'High', impact: 'Fair' },
        { text: 'Moderate', impact: 'Good' },
        { text: 'Low', impact: 'Excellent' }
      ]
    },
    {
      question: 'How often do you practice stress management?',
      options: [
        { text: 'Never', impact: 'Poor' },
        { text: 'Occasionally', impact: 'Fair' },
        { text: 'Weekly', impact: 'Good' },
        { text: 'Daily', impact: 'Excellent' }
      ]
    }
  ]
};

const categories = ['sleep', 'diet', 'stress'];

type CategoryType = 'sleep' | 'diet' | 'stress';

interface CategoryIconProps {
  category: CategoryType;
}

const CategoryIcon: React.FC<CategoryIconProps> = ({ category }) => {
  switch (category) {
    case 'sleep':
      return <MoonIcon className="w-6 h-6 text-primary" />;
    case 'diet':
      return <UtensilsIcon className="w-6 h-6 text-primary" />;
    case 'stress':
      return <ActivityIcon className="w-6 h-6 text-primary" />;
    default:
      return <ActivityIcon className="w-6 h-6 text-primary" />;
  }
};

const categoryTitles = {
  sleep: 'Sleep Habits',
  diet: 'Diet & Nutrition',
  stress: 'Stress Management'
};

export default function LifestyleQuizPage() {
  const [currentCategory, setCurrentCategory] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const [showResult, setShowResult] = useState(false);
  const [progress, setProgress] = useState(0);

  const totalQuestions = Object.values(lifestyleQuestions).flat().length;

  const handleAnswer = (answer: string) => {
    const category = categories[currentCategory];
    setAnswers(prev => ({
      ...prev,
      [category]: [...(prev[category] || []), answer]
    }));

    if (currentQuestion < lifestyleQuestions[category as keyof typeof lifestyleQuestions].length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else if (currentCategory < categories.length - 1) {
      setCurrentCategory(prev => prev + 1);
      setCurrentQuestion(0);
    } else {
      setShowResult(true);
    }

    const questionsAnswered = Object.values(answers).flat().length + 1;
    setProgress((questionsAnswered / totalQuestions) * 100);
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    } else if (currentCategory > 0) {
      setCurrentCategory(prev => prev - 1);
      setCurrentQuestion(lifestyleQuestions[categories[currentCategory - 1] as keyof typeof lifestyleQuestions].length - 1);
    }
    
    const questionsAnswered = Object.values(answers).flat().length - 1;
    setProgress(Math.max((questionsAnswered / totalQuestions) * 100, 0));
  };

  const getLifestyleScore = () => {
    const impactScores = {
      'Excellent': 100,
      'Good': 75,
      'Fair': 50,
      'Poor': 25
    };

    const allAnswers = Object.values(answers).flat();
    const totalScore = allAnswers.reduce((acc, answer) => acc + impactScores[answer as keyof typeof impactScores], 0);
    return Math.round(totalScore / allAnswers.length);
  };

  const getRecommendations = () => {
    const score = getLifestyleScore();
    let recommendations = [];

    if (score < 50) {
      recommendations = [
        'Consider establishing a consistent sleep schedule',
        'Increase water intake throughout the day',
        'Try meditation or yoga for stress management',
        'Reduce processed food consumption'
      ];
    } else if (score < 75) {
      recommendations = [
        'Fine-tune your bedtime routine',
        'Add more fruits and vegetables to your diet',
        'Schedule regular exercise sessions',
        'Practice mindfulness daily'
      ];
    } else {
      recommendations = [
        'Maintain your healthy sleep schedule',
        'Continue your balanced diet',
        'Keep up with your stress management routine',
        'Share your healthy habits with others'
      ];
    }

    return recommendations;
  };

  const questionVariants = {
    initial: { x: 50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -50, opacity: 0 }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {!showResult ? (
          <div className="max-w-2xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <CategoryIcon category={categories[currentCategory]} />
                  <h1 className="text-3xl font-bold">
                    {categoryTitles[categories[currentCategory] as keyof typeof categoryTitles]}
                  </h1>
                </div>
                {(currentQuestion > 0 || currentCategory > 0) && (
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
                key={`${currentCategory}-${currentQuestion}`}
                variants={questionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="bg-card rounded-xl p-8 shadow-lg"
              >
                <h2 className="text-2xl font-semibold mb-6">
                  {lifestyleQuestions[categories[currentCategory] as keyof typeof lifestyleQuestions][currentQuestion].question}
                </h2>
                <div className="grid gap-4">
                  {lifestyleQuestions[categories[currentCategory] as keyof typeof lifestyleQuestions][currentQuestion].options.map((option) => (
                    <Button
                      key={option.text}
                      variant="outline"
                      className="w-full py-6 text-lg justify-start px-6 hover:bg-primary/5"
                      onClick={() => handleAnswer(option.impact)}
                    >
                      {option.text}
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
            className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8"
          >
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">Your Lifestyle Analysis</h1>
              <p className="text-xl text-muted-foreground">
                Your lifestyle score: {getLifestyleScore()}/100
              </p>
            </div>

            <div className="grid gap-8">
              <div className="bg-background/50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Recommendations</h2>
                <ul className="space-y-4">
                  {getRecommendations().map((recommendation, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-lg mt-1">
                        <ActivityIcon className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-lg">{recommendation}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex justify-center gap-4">
                <Button
                  onClick={() => {
                    setShowResult(false);
                    setCurrentCategory(0);
                    setCurrentQuestion(0);
                    setAnswers({});
                    setProgress(0);
                  }}
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
