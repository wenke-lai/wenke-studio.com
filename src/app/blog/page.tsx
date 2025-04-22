import BlogList from "@/components/blog/BlogList";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/shadcn/breadcrumb";

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    description: "Learn how to build modern web applications with Next.js, the React framework for production. This guide covers setup, routing, and deployment.",
    date: "2023-05-15",
    tags: ["Next.js", "React", "Web Development"],
    slug: "getting-started-with-nextjs",
    image: "/blog/nextjs.jpg",
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS",
    description: "Tips and tricks for using Tailwind CSS effectively in your projects. Learn about customization, optimization, and best practices.",
    date: "2023-06-22",
    tags: ["CSS", "Tailwind", "Design"],
    slug: "mastering-tailwind-css",
    image: "/blog/tailwind.jpg",
  },
  {
    id: 3,
    title: "Building with Shadcn UI",
    description: "How to use Shadcn UI components in your projects to create beautiful, accessible, and customizable user interfaces.",
    date: "2023-07-10",
    tags: ["UI", "Components", "React"],
    slug: "building-with-shadcn-ui",
    image: "/blog/shadcn.jpg",
  },
  {
    id: 4,
    title: "TypeScript Best Practices",
    description: "Learn the best practices for writing clean, maintainable TypeScript code. This guide covers types, interfaces, and advanced patterns.",
    date: "2023-08-05",
    tags: ["TypeScript", "JavaScript", "Programming"],
    slug: "typescript-best-practices",
    image: "/blog/typescript.jpg",
  },
  {
    id: 5,
    title: "Introduction to React Server Components",
    description: "An introduction to React Server Components and how they can improve performance and user experience in your applications.",
    date: "2023-09-18",
    tags: ["React", "Server Components", "Performance"],
    slug: "introduction-to-react-server-components",
    image: "/blog/server-components.jpg",
  },
  {
    id: 6,
    title: "State Management in React",
    description: "A comprehensive guide to state management in React applications, covering useState, useReducer, Context API, and external libraries.",
    date: "2023-10-30",
    tags: ["React", "State Management", "JavaScript"],
    slug: "state-management-in-react",
    image: "/blog/state-management.jpg",
  },
];

export default function BlogPage() {
  return (
    <div className="container py-12 space-y-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Blog</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
        <p className="text-xl text-muted-foreground">
          Thoughts, ideas, and insights on technology, development, and more.
        </p>
      </div>
      
      <BlogList posts={blogPosts} />
    </div>
  );
}
