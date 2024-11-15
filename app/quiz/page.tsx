'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  ArrowRight as ArrowRightIcon, 
  ArrowLeft as ArrowLeftIcon, 
  Heart as HeartIcon, 
  Sun as SunIcon, 
  Droplets as DropletIcon,
  Trophy as TrophyIcon,
  Award as AwardIcon,
  Medal as MedalIcon,
  Activity as ActivityIcon
} from 'lucide-react';
import confetti from 'canvas-confetti';

// Quiz questions organized by categories
const quizQuestions = {
  skinType: [
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
  ],
  concerns: [
    {
      question: 'What are your main skin concerns?',
      options: [
        { text: 'Fine lines and wrinkles', type: 'Aging' },
        { text: 'Acne and breakouts', type: 'Acne' },
        { text: 'Dark spots and uneven tone', type: 'Pigmentation' },
        { text: 'Redness and sensitivity', type: 'Sensitive' }
      ]
    },
    {
      question: 'How would you describe your skin\'s texture?',
      options: [
        { text: 'Smooth and even', type: 'Normal' },
        { text: 'Rough and uneven', type: 'Texture' },
        { text: 'Bumpy with breakouts', type: 'Acne' },
        { text: 'Flaky and rough', type: 'Dry' }
      ]
    }
  ],
  lifestyle: [
    {
      question: 'How much time do you spend in the sun daily?',
      options: [
        { text: 'Minimal (indoor mostly)', type: 'Low UV' },
        { text: '1-2 hours', type: 'Moderate UV' },
        { text: '3-4 hours', type: 'High UV' },
        { text: '5+ hours', type: 'Very High UV' }
      ]
    },
    {
      question: 'How would you describe your daily skincare routine?',
      options: [
        { text: 'Minimal (cleanse only)', type: 'Basic' },
        { text: 'Moderate (cleanse + moisturize)', type: 'Intermediate' },
        { text: 'Advanced (multiple steps)', type: 'Advanced' },
        { text: 'Extensive (full routine)', type: 'Professional' }
      ]
    }
  ]
};

const categories = ['skinType', 'concerns', 'lifestyle'];

type CategoryType = 'skinType' | 'concerns' | 'lifestyle';

interface CategoryIconProps {
  category: CategoryType;
}

const CategoryIcon: React.FC<CategoryIconProps> = ({ category }) => {
  switch (category) {
    case 'skinType':
      return <DropletIcon className="w-6 h-6 text-primary" />;
    case 'concerns':
      return <HeartIcon className="w-6 h-6 text-primary" />;
    case 'lifestyle':
      return <SunIcon className="w-6 h-6 text-primary" />;
    default:
      return <DropletIcon className="w-6 h-6 text-primary" />;
  }
};

const categoryTitles = {
  skinType: 'Skin Type Analysis',
  concerns: 'Skin Concerns',
  lifestyle: 'Lifestyle Factors'
};

const getSkinTypeDescription = (type: string) => {
  const descriptions: Record<string, string> = {
    'Oily': 'Your skin produces excess sebum, which can lead to shine and occasional breakouts.',
    'Dry': 'Your skin tends to feel tight and may show visible dry patches or flakiness.',
    'Combination': 'You have areas of both oily and dry skin, typically with an oily T-zone.',
    'Normal': 'Your skin is well-balanced, neither too oily nor too dry.',
    'Sensitive': 'Your skin reacts easily to products and environmental factors.'
  };
  return descriptions[type] || 'Your skin type requires personalized attention.';
};

const getSkinTypeTips = (type: string) => {
  const tips: Record<string, string[]> = {
    'Oily': [
      'Use oil-free products',
      'Don\'t skip moisturizer',
      'Try products with salicylic acid',
      'Use a gentle cleanser twice daily'
    ],
    'Dry': [
      'Use a creamy, hydrating cleanser',
      'Apply moisturizer to damp skin',
      'Consider using facial oils',
      'Avoid hot water when washing'
    ],
    'Combination': [
      'Use different products for different areas',
      'Focus on balance',
      'Consider multi-masking',
      'Use gentle, non-stripping products'
    ],
    'Normal': [
      'Maintain your skin\'s balance',
      'Focus on prevention',
      'Use sunscreen daily',
      'Stay consistent with your routine'
    ],
    'Sensitive': [
      'Patch test new products',
      'Use fragrance-free products',
      'Avoid harsh ingredients',
      'Keep your routine simple'
    ]
  };
  return tips[type] || ['Consult with a dermatologist for personalized advice'];
};

const getConcernSolutions = (concern: string) => {
  const solutions: Record<string, string[]> = {
    'Acne': [
      'Use products with benzoyl peroxide or salicylic acid',
      'Keep skin clean and avoid touching your face',
      'Consider non-comedogenic products'
    ],
    'Aging': [
      'Use retinol products',
      'Apply antioxidant serums',
      'Never skip sunscreen'
    ],
    'Pigmentation': [
      'Use vitamin C serums',
      'Apply sunscreen diligently',
      'Consider products with niacinamide'
    ],
    'Texture': [
      'Try chemical exfoliants',
      'Use hydrating products',
      'Consider products with AHAs'
    ]
  };
  return solutions[concern] || ['Seek professional advice for your specific concern'];
};

const getRoutineRecommendations = (skinType: string, concerns: string[], lifestyle: string) => {
  return {
    morning: [
      'Gentle cleanser',
      'Hydrating toner',
      ...concerns.includes('Aging') ? ['Vitamin C serum'] : [],
      'Moisturizer',
      'Sunscreen SPF 30+'
    ],
    evening: [
      'Double cleanse',
      'Treatment product',
      ...concerns.includes('Acne') ? ['Spot treatment'] : [],
      'Night cream'
    ]
  };
};

export default function QuizPage() {
  const [currentCategory, setCurrentCategory] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const [showResult, setShowResult] = useState(false);
  const [progress, setProgress] = useState(0);

  const totalQuestions = Object.values(quizQuestions).flat().length;
  const currentCategoryQuestions = quizQuestions[categories[currentCategory] as keyof typeof quizQuestions];

  const handleAnswer = (answer: string) => {
    const category = categories[currentCategory];
    setAnswers(prev => ({
      ...prev,
      [category]: [...(prev[category] || []), answer]
    }));

    if (currentQuestion + 1 < currentCategoryQuestions.length) {
      setCurrentQuestion(prev => prev + 1);
    } else if (currentCategory + 1 < categories.length) {
      setCurrentCategory(prev => prev + 1);
      setCurrentQuestion(0);
    } else {
      // Trigger confetti effect
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      setShowResult(true);
    }

    // Update progress
    const questionsAnswered = Object.values(answers).flat().length + 1;
    setProgress((questionsAnswered / totalQuestions) * 100);
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    } else if (currentCategory > 0) {
      setCurrentCategory(prev => prev - 1);
      setCurrentQuestion(quizQuestions[categories[currentCategory - 1] as keyof typeof quizQuestions].length - 1);
    }
    
    // Update progress
    const questionsAnswered = Object.values(answers).flat().length - 1;
    setProgress(Math.max((questionsAnswered / totalQuestions) * 100, 0));
  };

  const getRecommendations = () => {
    const skinType = answers.skinType?.[0] || 'Normal';
    const concerns = answers.concerns || [];
    const lifestyle = answers.lifestyle?.[0] || 'Moderate';

    return {
      skinType: {
        type: skinType,
        description: getSkinTypeDescription(skinType),
        tips: getSkinTypeTips(skinType)
      },
      concerns: concerns.map(concern => ({
        concern,
        solutions: getConcernSolutions(concern)
      })),
      routine: getRoutineRecommendations(skinType, concerns, lifestyle)
    };
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
                  <CategoryIcon category={categories[currentCategory] as CategoryType} />
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
                <h2 className="text-xl font-semibold mb-6">
                  {currentCategoryQuestions[currentQuestion].question}
                </h2>
                <div className="space-y-4">
                  {currentCategoryQuestions[currentQuestion].options.map((option, index) => (
                    <motion.div
                      key={option.text}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Button
                        variant="outline"
                        className="w-full text-left justify-start h-auto py-4 px-6 hover:bg-primary/5"
                        onClick={() => handleAnswer(option.type)}
                      >
                        {option.text}
                      </Button>
                    </motion.div>
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
              <h1 className="text-4xl font-bold mb-4">Your Personalized Skin Analysis</h1>
              <div className="flex justify-center gap-4 mb-6">
                <TrophyIcon className="w-8 h-8 text-primary" />
                <AwardIcon className="w-8 h-8 text-primary" />
                <MedalIcon className="w-8 h-8 text-primary" />
              </div>
            </div>

            {(() => {
              const results = getRecommendations();
              return (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-background/50 p-6 rounded-lg">
                      <h3 className="font-semibold mb-2">Skin Type</h3>
                      <p className="text-2xl text-primary">{results.skinType.type}</p>
                      <p className="text-sm text-muted-foreground">{results.skinType.description}</p>
                      <ul className="list-disc pl-4 mt-2 text-sm text-muted-foreground">
                        {results.skinType.tips.map(tip => (
                          <li key={tip}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-background/50 p-6 rounded-lg">
                      <h3 className="font-semibold mb-2">Main Concern</h3>
                      <p className="text-2xl text-primary">{results.concerns[0].concern}</p>
                      <ul className="list-disc pl-4 mt-2 text-sm text-muted-foreground">
                        {results.concerns[0].solutions.map(solution => (
                          <li key={solution}>{solution}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-background/50 p-6 rounded-lg">
                      <h3 className="font-semibold mb-2">Lifestyle Impact</h3>
                      <p className="text-2xl text-primary">{results.routine.morning[0]}</p>
                    </div>
                    <div className="bg-background/50 p-6 rounded-lg">
                      <h3 className="font-semibold mb-2">Skin Health Score</h3>
                      <p className="text-2xl text-primary">80/100</p>
                    </div>
                  </div>

                  <div className="border-t border-border pt-6 mt-6">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-2">Your Global Ranking</p>
                      <p className="text-3xl font-bold text-primary">#1000</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Out of 10,000+ quiz takers
                      </p>
                    </div>
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
                      View Recommended Products
                      <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  <div className="bg-background/50 p-6 rounded-lg">
                    <h3 className="font-semibold mb-2">Recommended Routine</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Morning</h4>
                        <ul className="list-disc pl-4 text-sm text-muted-foreground">
                          {results.routine.morning.map(product => (
                            <li key={product}>{product}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Evening</h4>
                        <ul className="list-disc pl-4 text-sm text-muted-foreground">
                          {results.routine.evening.map(product => (
                            <li key={product}>{product}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
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
