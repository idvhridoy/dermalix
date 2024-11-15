'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  ActivitySquare as ActivityIcon,
  Brain as BrainIcon,
  Droplets as DropletIcon,
  Leaf as LeafIcon,
  Scan as SkinIcon
} from "lucide-react";

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
  return (
    <div className="flex min-h-screen">
      {/* Left Sidebar */}
      <div className="w-80 bg-background border-r border-border p-6">
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
