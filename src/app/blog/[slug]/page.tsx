import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/shadcn/breadcrumb";
import { Badge } from "@/components/shadcn/badge";
import { CalendarIcon } from "lucide-react";

// Sample blog posts data (same as in blog/page.tsx)
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    description: "Learn how to build modern web applications with Next.js, the React framework for production. This guide covers setup, routing, and deployment.",
    date: "2023-05-15",
    tags: ["Next.js", "React", "Web Development"],
    slug: "getting-started-with-nextjs",
    image: "/blog/nextjs.jpg",
    content: `
# Getting Started with Next.js

Next.js is a React framework that enables server-side rendering, static site generation, and more. It's designed to make building React applications easier and more efficient.

## Installation

To create a new Next.js app, run:

\`\`\`bash
npx create-next-app@latest my-app
\`\`\`

## Key Features

### 1. File-based Routing

Next.js uses a file-based routing system. Files in the \`pages\` directory automatically become routes.

### 2. Server-side Rendering (SSR)

Next.js can render pages on the server, which improves performance and SEO.

### 3. Static Site Generation (SSG)

You can pre-render pages at build time for even better performance.

### 4. API Routes

Create API endpoints easily by adding files to the \`pages/api\` directory.

## Conclusion

Next.js is a powerful framework that makes building React applications faster and more efficient. It provides many features out of the box that would otherwise require complex configuration.
    `,
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS",
    description: "Tips and tricks for using Tailwind CSS effectively in your projects. Learn about customization, optimization, and best practices.",
    date: "2023-06-22",
    tags: ["CSS", "Tailwind", "Design"],
    slug: "mastering-tailwind-css",
    image: "/blog/tailwind.jpg",
    content: `
# Mastering Tailwind CSS

Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without leaving your HTML. This guide will help you master Tailwind CSS and use it effectively in your projects.

## Getting Started

Install Tailwind CSS in your project:

\`\`\`bash
npm install -D tailwindcss
npx tailwindcss init
\`\`\`

## Customization

Tailwind is highly customizable. You can modify the default theme in your \`tailwind.config.js\` file:

\`\`\`javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1e40af',
      },
      spacing: {
        '128': '32rem',
      }
    }
  }
}
\`\`\`

## Best Practices

1. **Use components for repeated patterns**: Extract common patterns into components to reduce duplication.
2. **Leverage @apply for complex components**: Use @apply in your CSS to extract repeated utility patterns.
3. **Optimize for production**: Use PurgeCSS to remove unused styles in production.

## Conclusion

Tailwind CSS provides a different approach to styling that can significantly speed up your development process. By mastering its utility classes and customization options, you can create beautiful, consistent designs efficiently.
    `,
  },
  // Add more blog posts as needed
];

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  // Find the blog post with the matching slug
  const post = blogPosts.find(post => post.slug === params.slug);
  
  // If post not found, show a message
  if (!post) {
    return (
      <div className="container py-12">
        <h1 className="text-4xl font-bold">Blog Post Not Found</h1>
        <p className="mt-4">The blog post you're looking for doesn't exist.</p>
      </div>
    );
  }
  
  return (
    <div className="container py-12 space-y-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{post.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <article className="prose prose-lg dark:prose-invert max-w-none">
        <div className="space-y-4 not-prose">
          <h1 className="text-4xl font-bold tracking-tight">{post.title}</h1>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <CalendarIcon className="h-4 w-4" />
            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </div>
        
        {/* Blog post content */}
        <div className="mt-8">
          {post.content.split('\n').map((line, index) => {
            if (line.startsWith('# ')) {
              return <h1 key={index} className="text-3xl font-bold mt-8 mb-4">{line.substring(2)}</h1>;
            } else if (line.startsWith('## ')) {
              return <h2 key={index} className="text-2xl font-bold mt-6 mb-3">{line.substring(3)}</h2>;
            } else if (line.startsWith('### ')) {
              return <h3 key={index} className="text-xl font-bold mt-5 mb-2">{line.substring(4)}</h3>;
            } else if (line.startsWith('```')) {
              return (
                <pre key={index} className="bg-muted p-4 rounded-md overflow-x-auto my-4">
                  <code>{line.substring(3)}</code>
                </pre>
              );
            } else if (line.trim() === '') {
              return <div key={index} className="h-4"></div>;
            } else {
              return <p key={index} className="my-2">{line}</p>;
            }
          })}
        </div>
      </article>
    </div>
  );
}
