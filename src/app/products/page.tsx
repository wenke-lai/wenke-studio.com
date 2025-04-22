import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/shadcn/breadcrumb";
import ProductList from "@/components/products/ProductList";

// Sample products data
const productsData = [
  {
    id: 1,
    title: "Project Management Tool",
    description: "A comprehensive tool for managing projects, tasks, and team collaboration.",
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
  },
  {
    id: 3,
    title: "Content Management System",
    description: "A flexible CMS for creating and managing digital content.",
    image: "/products/cms.jpg",
    slug: "content-management-system",
    features: [
      "Content creation and editing",
      "Media library management",
      "User roles and permissions",
      "SEO optimization tools",
    ],
    technologies: ["React", "GraphQL", "Prisma", "PostgreSQL"],
    demoUrl: "https://demo.example.com/cms",
    githubUrl: "https://github.com/example/cms",
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    description: "A powerful dashboard for visualizing and analyzing data.",
    image: "/products/analytics.jpg",
    slug: "analytics-dashboard",
    features: [
      "Real-time data visualization",
      "Customizable charts and graphs",
      "Data filtering and export",
      "User behavior tracking",
    ],
    technologies: ["React", "D3.js", "Express.js", "MongoDB"],
    demoUrl: "https://demo.example.com/analytics",
    githubUrl: "https://github.com/example/analytics",
  },
  {
    id: 5,
    title: "Chat Application",
    description: "A real-time chat application for team communication.",
    image: "/products/chat.jpg",
    slug: "chat-application",
    features: [
      "Real-time messaging",
      "File sharing",
      "User presence indicators",
      "Message search and history",
    ],
    technologies: ["React", "Socket.io", "Node.js", "Redis"],
    demoUrl: "https://demo.example.com/chat",
    githubUrl: "https://github.com/example/chat",
  },
  {
    id: 6,
    title: "Task Scheduler",
    description: "An automated task scheduler for recurring tasks and workflows.",
    image: "/products/scheduler.jpg",
    slug: "task-scheduler",
    features: [
      "Recurring task scheduling",
      "Workflow automation",
      "Notification system",
      "Task dependencies",
    ],
    technologies: ["Vue.js", "Express.js", "PostgreSQL", "Bull"],
    demoUrl: "https://demo.example.com/scheduler",
    githubUrl: "https://github.com/example/scheduler",
  },
];

export default function ProductsPage() {
  return (
    <div className="container py-12 space-y-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Products</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Products</h1>
        <p className="text-xl text-muted-foreground">
          Explore my portfolio of projects and applications.
        </p>
      </div>
      
      <ProductList products={productsData} />
    </div>
  );
}
