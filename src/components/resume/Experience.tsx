"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/shadcn/card";
import { Badge } from "@/components/shadcn/badge";

interface ExperienceItem {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

interface ExperienceProps {
  experience: ExperienceItem[];
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Work Experience</h2>
      
      <div className="space-y-6">
        {experience.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <CardTitle>{item.position}</CardTitle>
                  <CardDescription className="text-base">
                    {item.company}
                  </CardDescription>
                </div>
                <CardDescription className="text-sm">
                  {item.startDate} - {item.endDate}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{item.description}</p>
              
              <div>
                <h4 className="font-medium mb-2">Key Responsibilities:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {item.responsibilities.map((responsibility, i) => (
                    <li key={i} className="text-muted-foreground">{responsibility}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">{tech}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
