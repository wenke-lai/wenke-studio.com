"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/shadcn/card";
import { Badge } from "@/components/shadcn/badge";
import Link from "next/link";
import { Button } from "@/components/shadcn/button";
import { ArrowRight } from "lucide-react";

// Sample featured blog posts
const featuredPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    description: "Learn how to build modern web applications with Next.js",
    date: "2023-05-15",
    tags: ["Next.js", "React", "Web Development"],
    slug: "getting-started-with-nextjs",
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS",
    description: "Tips and tricks for using Tailwind CSS effectively",
    date: "2023-06-22",
    tags: ["CSS", "Tailwind", "Design"],
    slug: "mastering-tailwind-css",
  },
  {
    id: 3,
    title: "Building with Shadcn UI",
    description: "How to use Shadcn UI components in your projects",
    date: "2023-07-10",
    tags: ["UI", "Components", "React"],
    slug: "building-with-shadcn-ui",
  },
];

// Sample featured products
const featuredProducts = [
  {
    id: 1,
    title: "Project Management Tool",
    description: "A comprehensive tool for managing projects and tasks",
    image: "/products/project-tool.jpg",
    slug: "project-management-tool",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "A scalable e-commerce solution for businesses",
    image: "/products/ecommerce.jpg",
    slug: "ecommerce-platform",
  },
];

export default function FeaturedContent() {
  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold tracking-tight">Featured Blog Posts</h2>
          <Button variant="ghost" asChild>
            <Link href="/blog" className="flex items-center gap-1">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <CardHeader>
                <CardTitle className="line-clamp-1">{post.title}</CardTitle>
                <CardDescription>{new Date(post.date).toLocaleDateString()}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-2">{post.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/blog/${post.slug}`}>Read Post</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      
      <section className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold tracking-tight">Featured Products</h2>
          <Button variant="ghost" asChild>
            <Link href="/products" className="flex items-center gap-1">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <div className="aspect-video bg-muted relative">
                {/* Placeholder for product image */}
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  Product Image
                </div>
              </div>
              <CardHeader>
                <CardTitle>{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{product.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={`/products/${product.slug}`}>Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
