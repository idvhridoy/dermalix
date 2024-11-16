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

const quizTypes = [
  {
    id: "skin-analysis",
    name: "Skin Analysis Quiz",
    description: "Get a detailed analysis of your skin type and concerns",
    iconName: "skin",
    path: "/quiz"
  },
  {
    id: "lifestyle",
    name: "Lifestyle Assessment",
    description: "Understand how your lifestyle affects your skin",
    iconName: "activity",
    path: "/quiz/lifestyle"
  },
  {
    id: "ingredients",
    name: "Ingredient Knowledge",
    description: "Test your skincare ingredient knowledge",
    iconName: "leaf",
    path: "/quiz/ingredients"
  },
  {
    id: "routine",
    name: "Routine Builder",
    description: "Build your perfect skincare routine",
    iconName: "droplet",
    path: "/quiz/routine"
  },
  {
    id: "expert",
    name: "Expert Level Quiz",
    description: "Advanced skincare knowledge test",
    iconName: "brain",
    path: "/quiz/expert"
  }
];

type IconName = 'skin' | 'activity' | 'leaf' | 'droplet' | 'brain';

interface IconComponentProps {
  name: IconName;
}

const IconComponent: React.FC<IconComponentProps> = ({ name }) => {
  switch (name) {
    case 'skin':
      return <SkinIcon className="w-5 h-5" />;
    case 'activity':
      return <ActivityIcon className="w-5 h-5" />;
    case 'leaf':
      return <LeafIcon className="w-5 h-5" />;
    case 'droplet':
      return <DropletIcon className="w-5 h-5" />;
    case 'brain':
      return <BrainIcon className="w-5 h-5" />;
    default:
      return <SkinIcon className="w-5 h-5" />;
  }
};

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
        className={`
          fixed top-4 right-4 z-50 
          lg:hidden 
          bg-background/80 backdrop-blur-md 
          hover:bg-primary/10 
          w-12 h-12 rounded-full 
          shadow-lg 
          transition-all duration-300
          ${isMobileSidebarOpen ? 'rotate-90' : ''}
        `}
      >
        {isMobileSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-md z-40 lg:hidden overflow-y-auto"
          >
            <div className="container mx-auto px-4 py-8 mt-16">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold mb-6 text-center">Quiz Types</h2>
                {quizTypes.map((quiz) => (
                  <Link key={quiz.id} href={quiz.path} onClick={toggleMobileSidebar}>
                    <div 
                      className={`
                        bg-primary/5 rounded-xl p-4 
                        border border-transparent 
                        hover:border-primary/30 
                        transition-all duration-300 
                        cursor-pointer 
                        group
                        flex items-center
                        space-x-4
                      `}
                    >
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <IconComponent name={quiz.iconName} />
                      </div>
                      <div>
                        <div className="font-medium text-lg">{quiz.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {quiz.description}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-80 bg-background border-r border-border p-6">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold mb-4">Quiz Types</h2>
          {quizTypes.map((quiz) => (
            <Link key={quiz.id} href={quiz.path}>
              <Button
                variant="ghost"
                className="w-full justify-start gap-3 h-auto py-4"
              >
                <div className="bg-primary/10 p-2 rounded-lg">
                  <IconComponent name={quiz.iconName} />
                </div>
                <div className="text-left">
                  <div className="font-medium">{quiz.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {quiz.description}
                  </div>
                </div>
              </Button>
            </Link>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  );
}
