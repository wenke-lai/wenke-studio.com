import { Badge } from "@/components/shadcn/badge";
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
import { ExternalLink, Github } from "lucide-react";

// Sample products data (same as in products/page.tsx)
const productsData = [
  {
    id: 1,
    title: "Project Management Tool",
    description:
      "A comprehensive tool for managing projects, tasks, and team collaboration.",
    image: "/products/project-tool.jpg",
    slug: "project-management-tool",
    features: [
      "Task management with drag-and-drop interface",
      "Team collaboration and communication",
      "Time tracking and reporting",
      "Integration with popular tools",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    demoUrl: "https://demo.example.com/project-tool",
    githubUrl: "https://github.com/example/project-tool",
    longDescription: `
      This project management tool was built to address the needs of modern teams working on complex projects.
      It provides a comprehensive set of features for managing tasks, tracking progress, and facilitating team collaboration.

      The application uses React for the frontend, providing a responsive and interactive user interface.
      The backend is built with Node.js and Express, with MongoDB as the database for storing project data.
      Real-time updates are implemented using Socket.io, allowing team members to see changes instantly.

      Key features include a drag-and-drop interface for task management, real-time collaboration tools,
      time tracking and reporting capabilities, and integrations with popular tools like Slack and GitHub.

      The project was developed over a period of 6 months and has been used by several teams with positive feedback.
    `,
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "A scalable e-commerce solution for businesses of all sizes.",
    image: "/products/ecommerce.jpg",
    slug: "ecommerce-platform",
    features: [
      "Product catalog management",
      "Shopping cart and checkout",
      "Payment processing",
      "Order management and tracking",
    ],
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
    demoUrl: "https://demo.example.com/ecommerce",
    githubUrl: "https://github.com/example/ecommerce",
    longDescription: `
      This e-commerce platform was designed to provide a complete solution for businesses looking to sell products online.
      It offers a range of features from product management to order processing and customer management.

      The platform is built with Next.js, providing server-side rendering for improved performance and SEO.
      It uses PostgreSQL for data storage, ensuring reliability and scalability.
      Payment processing is handled through Stripe, offering a secure and seamless checkout experience.

      The user interface is designed with Tailwind CSS, making it responsive and customizable to match different brand identities.

      Key features include product catalog management, shopping cart and checkout functionality,
      secure payment processing, and comprehensive order management and tracking.

      This platform has been used by several small to medium-sized businesses, helping them establish an online presence and grow their sales.
    `,
  },
  // Add more products as needed
];

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  // Await the params Promise to get the actual values
  const { slug } = await params;

  // Find the product with the matching slug
  const product = productsData.find((product) => product.slug === slug);

  // If product not found, show a message
  if (!product) {
    return (
      <div className="py-12">
        <h1 className="text-4xl font-bold">Product Not Found</h1>
        <p className="mt-4">The product you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div className="py-12 space-y-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/products">Products</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{product.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="aspect-video bg-muted relative rounded-lg overflow-hidden">
          {/* Placeholder for product image */}
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-xl">
            Product Image
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">
              {product.title}
            </h1>
            <p className="text-xl text-muted-foreground mt-2">
              {product.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {product.technologies?.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            {product.demoUrl && (
              <Button asChild className="flex items-center gap-2">
                <a
                  href={product.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}

            {product.githubUrl && (
              <Button
                variant="outline"
                asChild
                className="flex items-center gap-2"
              >
                <a
                  href={product.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  View Source
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">About This Project</h2>
            <div className="text-muted-foreground space-y-4">
              {product.longDescription?.split("\n").map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="space-y-2">
              {product.features?.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
