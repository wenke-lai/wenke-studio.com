"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/shadcn/avatar";
import { Button } from "@/components/shadcn/button";
import { Card, CardContent } from "@/components/shadcn/card";
import Link from "next/link";

export default function Profile() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Hi, I'm Wenke Lai
        </h1>
        <p className="text-xl text-muted-foreground">
          A passionate developer and creator building innovative solutions and sharing knowledge through my blog.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild size="lg">
            <Link href="/resume">View Resume</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/blog">Read My Blog</Link>
          </Button>
        </div>
      </div>
      <div className="flex justify-center">
        <Avatar className="h-64 w-64">
          <AvatarImage src="/profile.jpg" alt="Wenke Lai" />
          <AvatarFallback className="text-4xl">WL</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
