'use client';

import { useQuiz } from '@/contexts/quiz-context';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Share2, Download, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import ErrorBoundary from '@/components/error-boundary';
import { useCallback, useMemo } from 'react';

interface RecommendedProduct {
  name: string;
  description: string;
  type: string;
  priority: number;
  ingredients: string[];
  benefits: string[];
}

export default function ResultsPage() {
  const router = useRouter();
  const { state } = useQuiz();

  const analyzeAnswers = useCallback(() => {
    const concerns = new Set<string>();
    const sensitivities = new Set<string>();
    let skinType = '';
    let lifestyleImpact = 0;

    state.answers.forEach(answer => {
      if (answer.category === 'concerns') {
        if (answer.questionId === 'skin-type') {
          skinType = answer.selectedOption;
        } else if (answer.impact === 'High') {
          concerns.add(answer.questionId);
        }
      } else if (answer.category === 'ingredients') {
        if (answer.impact === 'High') {
          sensitivities.add(answer.selectedOption);
        }
      } else if (answer.category === 'lifestyle') {
        lifestyleImpact += answer.impact === 'High' ? 2 : answer.impact === 'Medium' ? 1 : 0;
      }
    });

    return { concerns, sensitivities, skinType, lifestyleImpact };
  }, [state.answers]);

  const recommendations = useMemo(() => {
    const { concerns, sensitivities, skinType, lifestyleImpact } = analyzeAnswers();
    const products: RecommendedProduct[] = [];

    // Core cleanser recommendation
    const cleanserType = skinType === 'oily' ? 'gel' : skinType === 'dry' ? 'cream' : 'gentle foam';
    products.push({
      name: `${cleanserType.charAt(0).toUpperCase() + cleanserType.slice(1)} Cleanser`,
      description: `A gentle ${cleanserType} cleanser suitable for ${skinType} skin`,
      type: 'Cleanser',
      priority: 1,
      ingredients: ['Glycerin', 'Panthenol'],
      benefits: ['Removes impurities', 'Maintains skin barrier']
    });

    // Treatment recommendations based on concerns
    if (concerns.has('acne')) {
      products.push({
        name: 'Clarifying Treatment',
        description: 'Targeted treatment for breakout-prone skin',
        type: 'Treatment',
        priority: 2,
        ingredients: ['Salicylic Acid', 'Niacinamide'],
        benefits: ['Unclogs pores', 'Reduces inflammation']
      });
    }

    if (concerns.has('aging')) {
      products.push({
        name: 'Anti-aging Serum',
        description: 'Advanced formula for fine lines and firmness',
        type: 'Serum',
        priority: 2,
        ingredients: ['Retinol', 'Peptides'],
        benefits: ['Promotes collagen', 'Improves elasticity']
      });
    }

    // Moisturizer recommendation
    const moisturizerType = skinType === 'oily' ? 'light' : 'rich';
    products.push({
      name: `${moisturizerType.charAt(0).toUpperCase() + moisturizerType.slice(1)} Moisturizer`,
      description: `${moisturizerType.charAt(0).toUpperCase() + moisturizerType.slice(1)} hydrating formula for ${skinType} skin`,
      type: 'Moisturizer',
      priority: 1,
      ingredients: ['Hyaluronic Acid', 'Ceramides'],
      benefits: ['Hydrates', 'Strengthens barrier']
    });

    // Additional treatments based on lifestyle
    if (lifestyleImpact > 3) {
      products.push({
        name: 'Antioxidant Defense Serum',
        description: 'Protection against environmental stressors',
        type: 'Serum',
        priority: 3,
        ingredients: ['Vitamin C', 'Vitamin E'],
        benefits: ['Protects from free radicals', 'Brightens complexion']
      });
    }

    return products.sort((a, b) => a.priority - b.priority);
  }, [analyzeAnswers]);

  const handleShare = useCallback(() => {
    // Implement sharing functionality
  }, []);

  const handleDownload = useCallback(() => {
    // Implement PDF download functionality
  }, []);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-b from-primary/10 to-primary/5 py-12">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <Button
              variant="outline"
              onClick={() => router.push('/quiz/ingredients')}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Quiz
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" onClick={handleShare} className="gap-2">
                <Share2 className="w-4 h-4" />
                Share
              </Button>
              <Button variant="outline" onClick={handleDownload} className="gap-2">
                <Download className="w-4 h-4" />
                Download PDF
              </Button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-center mb-8">Your Personalized Skincare Routine</h1>

            <div className="grid gap-6">
              {recommendations.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                        <p className="text-muted-foreground mb-4">{product.description}</p>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium mb-2">Key Ingredients:</h4>
                            <div className="flex flex-wrap gap-2">
                              {product.ingredients.map(ingredient => (
                                <span
                                  key={ingredient}
                                  className="px-3 py-1 bg-primary/10 rounded-full text-sm"
                                >
                                  {ingredient}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-medium mb-2">Benefits:</h4>
                            <ul className="list-disc list-inside space-y-1">
                              {product.benefits.map(benefit => (
                                <li key={benefit} className="text-muted-foreground">
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">
                        Step {index + 1}
                      </span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6">
                These recommendations are based on your quiz responses and are designed to address your specific skin concerns and lifestyle factors.
              </p>
              <Button
                onClick={() => router.push('/')}
                className="gap-2"
              >
                Return Home
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </ErrorBoundary>
  );
}
