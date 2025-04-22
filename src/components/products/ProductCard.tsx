"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/shadcn/card";
import { Badge } from "@/components/shadcn/badge";
import { Button } from "@/components/shadcn/button";
import Link from "next/link";

export interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  slug: string;
  features?: string[];
  technologies?: string[];
  demoUrl?: string;
  githubUrl?: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="aspect-video bg-muted relative">
        {/* Placeholder for product image */}
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
          Product Image
        </div>
      </div>
      <CardHeader>
        <CardTitle>{product.title}</CardTitle>
        <CardDescription className="line-clamp-2">{product.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        {product.technologies && (
          <div className="flex flex-wrap gap-2 mt-2">
            {product.technologies.map((tech) => (
              <Badge key={tech} variant="outline">{tech}</Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button asChild className="flex-1">
          <Link href={`/products/${product.slug}`}>View Details</Link>
        </Button>
        {product.demoUrl && (
          <Button variant="outline" asChild>
            <a href={product.demoUrl} target="_blank" rel="noopener noreferrer">Demo</a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
