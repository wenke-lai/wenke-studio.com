"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/shadcn/card";
import { Badge } from "@/components/shadcn/badge";
import Link from "next/link";
import { Button } from "@/components/shadcn/button";
import { CalendarIcon } from "lucide-react";

export interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  tags: string[];
  slug: string;
  image?: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      {post.image && (
        <div className="aspect-video bg-muted relative">
          {/* Placeholder for blog post image */}
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
            Blog Image
          </div>
        </div>
      )}
      <CardHeader>
        <CardTitle className="line-clamp-2">{post.title}</CardTitle>
        <CardDescription className="flex items-center gap-1">
          <CalendarIcon className="h-4 w-4" />
          {new Date(post.date).toLocaleDateString()}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground line-clamp-3">{post.description}</p>
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
  );
}
