"use client";

import { useState } from "react";
import ProductCard, { Product } from "./ProductCard";
import { Input } from "@/components/shadcn/input";
import { Badge } from "@/components/shadcn/badge";
import { X } from "lucide-react";

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  
  // Get all unique technologies from products
  const allTechnologies = Array.from(
    new Set(products.flatMap(product => product.technologies || []))
  );
  
  // Filter products based on search term and selected technologies
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTechnologies = selectedTechnologies.length === 0 || 
                              (product.technologies && 
                               selectedTechnologies.every(tech => product.technologies?.includes(tech)));
    
    return matchesSearch && matchesTechnologies;
  });
  
  // Toggle technology selection
  const toggleTechnology = (tech: string) => {
    if (selectedTechnologies.includes(tech)) {
      setSelectedTechnologies(selectedTechnologies.filter(t => t !== tech));
    } else {
      setSelectedTechnologies([...selectedTechnologies, tech]);
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <Input
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md"
        />
        
        <div className="flex flex-wrap gap-2">
          {allTechnologies.map(tech => (
            <Badge 
              key={tech} 
              variant={selectedTechnologies.includes(tech) ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => toggleTechnology(tech)}
            >
              {tech}
              {selectedTechnologies.includes(tech) && (
                <X className="ml-1 h-3 w-3" />
              )}
            </Badge>
          ))}
        </div>
      </div>
      
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No products found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
