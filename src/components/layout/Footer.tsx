"use client";

import Link from "next/link";
import { Separator } from "@/components/shadcn/separator";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Wenke Studio</h3>
            <p className="text-muted-foreground text-sm">
              Personal website showcasing my work, blog, and professional experience.
            </p>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-semibold">Pages</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/resume" className="text-muted-foreground hover:text-foreground text-sm">
                  Resume
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-foreground text-sm">
                  Products
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-semibold">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground text-sm"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground text-sm"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground text-sm"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-semibold">Contact</h3>
            <p className="text-muted-foreground text-sm">
              Feel free to reach out to me at:
              <br />
              <a href="mailto:contact@example.com" className="hover:text-foreground">
                contact@example.com
              </a>
            </p>
          </div>
        </div>
        
        <Separator className="my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Wenke Studio. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
