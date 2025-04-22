import Education from "@/components/resume/Education";
import Experience from "@/components/resume/Experience";
import Skills from "@/components/resume/Skills";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/shadcn/breadcrumb";
import { Button } from "@/components/shadcn/button";
import { Card, CardContent } from "@/components/shadcn/card";
import { Separator } from "@/components/shadcn/separator";
import { Download } from "lucide-react";

// Sample education data
const educationData = [
  {
    institution: "Stanford University",
    degree: "Master of Science",
    field: "Computer Science",
    startDate: "2018",
    endDate: "2020",
    description:
      "Specialized in Artificial Intelligence and Machine Learning. Completed thesis on 'Deep Learning Applications in Natural Language Processing'.",
  },
  {
    institution: "University of California, Berkeley",
    degree: "Bachelor of Science",
    field: "Computer Science",
    startDate: "2014",
    endDate: "2018",
    description:
      "Graduated with honors. Participated in various hackathons and coding competitions. Member of the Computer Science Student Association.",
  },
];

// Sample experience data
const experienceData = [
  {
    company: "Tech Innovations Inc.",
    position: "Senior Software Engineer",
    startDate: "Jan 2022",
    endDate: "Present",
    description:
      "Leading the development of the company's flagship product, a cloud-based project management tool.",
    responsibilities: [
      "Architected and implemented new features using React and Node.js",
      "Led a team of 5 developers, providing mentorship and code reviews",
      "Improved application performance by 40% through code optimization",
      "Collaborated with product managers to define product roadmap",
    ],
    technologies: [
      "React",
      "Node.js",
      "TypeScript",
      "AWS",
      "MongoDB",
      "Docker",
    ],
  },
  {
    company: "DataSphere Solutions",
    position: "Full Stack Developer",
    startDate: "Jun 2020",
    endDate: "Dec 2021",
    description:
      "Worked on developing and maintaining data visualization dashboards for enterprise clients.",
    responsibilities: [
      "Built responsive web applications using React and D3.js",
      "Developed RESTful APIs using Express.js and PostgreSQL",
      "Implemented authentication and authorization using JWT",
      "Participated in agile development processes with bi-weekly sprints",
    ],
    technologies: ["React", "Express.js", "PostgreSQL", "D3.js", "JWT", "Git"],
  },
  {
    company: "StartUp Nexus",
    position: "Software Engineering Intern",
    startDate: "May 2019",
    endDate: "Aug 2019",
    description:
      "Summer internship focused on front-end development for a fintech startup.",
    responsibilities: [
      "Developed user interface components using React",
      "Implemented responsive designs from Figma mockups",
      "Fixed bugs and improved existing features",
      "Participated in daily stand-up meetings and code reviews",
    ],
    technologies: ["React", "JavaScript", "CSS", "HTML", "Git", "Jira"],
  },
];

// Sample skills data
const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "JavaScript/TypeScript", proficiency: "Expert" },
      { name: "Python", proficiency: "Advanced" },
      { name: "Java", proficiency: "Intermediate" },
      { name: "C/C++", proficiency: "Intermediate" },
      { name: "SQL", proficiency: "Advanced" },
      { name: "HTML/CSS", proficiency: "Expert" },
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Vue.js" },
      { name: "Tailwind CSS" },
      { name: "Redux" },
      { name: "Responsive Design" },
      { name: "UI/UX" },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "Django" },
      { name: "Spring Boot" },
      { name: "RESTful APIs" },
      { name: "GraphQL" },
      { name: "Microservices" },
    ],
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Git" },
      { name: "Docker" },
      { name: "AWS" },
      { name: "CI/CD" },
      { name: "Kubernetes" },
      { name: "Terraform" },
      { name: "Jira" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB" },
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "Redis" },
      { name: "Elasticsearch" },
    ],
  },
];

export default function ResumePage() {
  return (
    <div className="container py-12 space-y-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Resume</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Wenke Lai</h1>
          <p className="text-xl text-muted-foreground">
            Senior Software Engineer
          </p>
        </div>

        <Button className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Download Resume
        </Button>
      </div>

      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4">Professional Summary</h2>
          <p className="text-muted-foreground">
            Experienced software engineer with over 5 years of experience in
            full-stack development. Specialized in building scalable web
            applications using modern JavaScript frameworks. Strong
            problem-solving skills and a passion for creating clean, efficient,
            and maintainable code. Proven track record of leading development
            teams and delivering projects on time.
          </p>
        </CardContent>
      </Card>

      <Separator />

      <Experience experience={experienceData} />

      <Separator />

      <Education education={educationData} />

      <Separator />

      <Skills skillCategories={skillsData} />
    </div>
  );
}
