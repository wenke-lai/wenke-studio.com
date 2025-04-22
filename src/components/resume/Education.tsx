"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/shadcn/card";

interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface EducationProps {
  education: EducationItem[];
}

export default function Education({ education }: EducationProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Education</h2>
      
      <div className="space-y-4">
        {education.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <CardTitle>{item.institution}</CardTitle>
                  <CardDescription className="text-base">
                    {item.degree} in {item.field}
                  </CardDescription>
                </div>
                <CardDescription className="text-sm">
                  {item.startDate} - {item.endDate}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
