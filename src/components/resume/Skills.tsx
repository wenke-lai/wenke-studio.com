"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/shadcn/card";
import { Badge } from "@/components/shadcn/badge";
import { Progress } from "@/components/shadcn/progress";

interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: number; // 0-100
  }[];
}

interface SkillsProps {
  skillCategories: SkillCategory[];
}

export default function Skills({ skillCategories }: SkillsProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{category.category}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {category.skills.map((skill, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground text-sm">
                      {getSkillLevelLabel(skill.level)}
                    </span>
                  </div>
                  <Progress value={skill.level} />
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function getSkillLevelLabel(level: number): string {
  if (level >= 90) return "Expert";
  if (level >= 70) return "Advanced";
  if (level >= 40) return "Intermediate";
  return "Beginner";
}
