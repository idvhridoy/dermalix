'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  ActivitySquare as ActivityIcon,
  Brain as BrainIcon,
  Droplets as DropletIcon,
  Leaf as LeafIcon,
  Scan as SkinIcon,
  Menu,
  X
} from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';

type QuizType = {
  id: string;
  name: string;
  description: string;
  icon: React.FC<{ className?: string }>;
  path: string;
};

const quizTypes: QuizType[] = [
  {
    id: "skin-analysis",
    name: "Skin Analysis Quiz",
    description: "Get a detailed analysis of your skin type and concerns",
    icon: SkinIcon,
    path: "/quiz"
  },
  {
    id: "lifestyle",
    name: "Lifestyle Assessment",
    description: "Understand how your lifestyle affects your skin",
    icon: ActivityIcon,
    path: "/quiz/lifestyle"
  },
  {
    id: "ingredients",
    name: "Ingredient Knowledge",
    description: "Test your skincare ingredient knowledge",
    icon: LeafIcon,
    path: "/quiz/ingredients"
  },
  {
    id: "routine",
    name: "Routine Builder",
    description: "Build your perfect skincare routine",
    icon: DropletIcon,
    path: "/quiz/routine"
  },
  {
    id: "expert",
    name: "Expert Level Quiz",
    description: "Advanced skincare knowledge test",
    icon: BrainIcon,
    path: "/quiz/expert"
  }
];

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  return (
    <div className="flex min-h-screen relative">
      {/* Floating Mobile Menu Button */}
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={toggleMobileSidebar}
        className="fixed top-4 right-4 z-50 lg:hidden bg-background/80 backdrop-blur-md hover:bg-primary/10 w-12 h-12 rounded-full"
      >
        {isMobileSidebarOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </Button>

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex w-80 bg-background/80 backdrop-blur-md border-r border-primary/10 p-6 flex-col gap-6">
        <div className="space-y-6">
          {quizTypes.map((quiz) => (
            <Link 
              key={quiz.id}
              href={quiz.path}
              className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors"
            >
              <quiz.icon className="w-5 h-5 mt-1 text-primary" />
              <div>
                <h3 className="font-medium">{quiz.name}</h3>
                <p className="text-sm text-muted-foreground">{quiz.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileSidebarOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed inset-y-0 right-0 w-80 bg-background/95 backdrop-blur-md border-l border-primary/10 p-6 z-40 lg:hidden"
          >
            <div className="space-y-6 mt-16">
              {quizTypes.map((quiz) => (
                <Link 
                  key={quiz.id}
                  href={quiz.path}
                  onClick={() => setIsMobileSidebarOpen(false)}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors"
                >
                  <quiz.icon className="w-5 h-5 mt-1 text-primary" />
                  <div>
                    <h3 className="font-medium">{quiz.name}</h3>
                    <p className="text-sm text-muted-foreground">{quiz.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}
