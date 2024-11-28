'use client';

import { useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heart, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import ErrorBoundary from '@/components/error-boundary';
import { useQuiz } from '@/contexts/quiz-context';

const impactScores = {
  'Excellent': 100,
  'Good': 75,
  'Fair': 50,
  'Poor': 25
} as const;

function getRecommendations(score: number) {
  if (score < 50) {
    return [
      'Consider establishing a consistent sleep schedule',
      'Increase water intake throughout the day',
      'Try meditation or yoga for stress management',
      'Reduce processed food consumption'
    ];
  } else if (score < 75) {
    return [
      'Fine-tune your bedtime routine',
      'Add more fruits and vegetables to your diet',
      'Schedule regular exercise sessions',
      'Practice mindfulness daily'
    ];
  } else {
    return [
      'Maintain your healthy sleep schedule',
      'Continue your balanced diet',
      'Keep up with your stress management routine',
      'Share your healthy habits with others'
    ];
  }
}

function QuizResults() {
  const router = useRouter();
  const { state, dispatch } = useQuiz();
  const { answers } = state;

  const score = useMemo(() => {
    if (!answers.length) return 0;
    const totalScore = answers.reduce((acc, answer) => 
      acc + (impactScores[answer.impact as keyof typeof impactScores] || 0), 0
    );
    return Math.round(totalScore / answers.length);
  }, [answers]);

  const recommendations = useMemo(() => getRecommendations(score), [score]);

  const handleRestart = () => {
    dispatch({ type: 'RESET_QUIZ' });
    router.push('/quiz/lifestyle');
  };

  useEffect(() => {
    if (!answers.length) {
      router.push('/quiz/lifestyle');
    }
  }, [answers.length, router]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto bg-black rounded-lg shadow-lg p-8 text-white"
    >
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Quiz Results
        </h1>
        <p className="text-2xl text-purple-300">
          Your Lifestyle Score: {score}
        </p>
      </div>

      <div className="grid gap-8">
        <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800">
          <h2 className="text-2xl font-bold mb-4 text-blue-400">Feedback</h2>
          <div className="flex items-start gap-3">
            <div className="bg-purple-500/10 p-2 rounded-lg mt-1">
              <Heart className="w-4 h-4 text-purple-400" />
            </div>
            <p className="text-lg text-zinc-300">
              {score >= 90 
                ? "Perfect! You have excellent lifestyle habits!" 
                : score >= 75 
                  ? "Great job! Your lifestyle choices support healthy habits." 
                  : score >= 50
                    ? "Good effort! Keep working on your lifestyle habits." 
                    : "There's room for improvement in your lifestyle routine."}
            </p>
          </div>
        </div>

        <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800">
          <h2 className="text-2xl font-bold mb-4 text-blue-400">Recommendations</h2>
          <ul className="space-y-4">
            {recommendations.map((recommendation, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="bg-purple-500/10 p-2 rounded-lg mt-1">
                  <ArrowRight className="w-4 h-4 text-purple-400" />
                </div>
                <p className="text-lg text-zinc-300">{recommendation}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <Button
            onClick={handleRestart}
            size="lg"
            variant="outline"
            className="gap-2 border-purple-500 text-purple-400 hover:bg-purple-500/10"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Retake Quiz
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
  );
}

export default function ResultsPage() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-b from-primary/10 to-primary/5 py-12 px-4">
        <QuizResults />
      </div>
    </ErrorBoundary>
  );
}
