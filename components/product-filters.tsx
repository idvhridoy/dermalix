'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Search } from 'lucide-react';

interface ProductFiltersProps {
  onCategoryChange: (category: string) => void;
  onSearchChange: (search: string) => void;
}

export function ProductFilters({ onCategoryChange, onSearchChange }: ProductFiltersProps) {
  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="search">Search Products</Label>
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            id="search"
            placeholder="Search..."
            className="pl-8"
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>
      <div>
        <Label>Categories</Label>
        <RadioGroup defaultValue="all" onValueChange={onCategoryChange} className="mt-2">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="all" />
            <Label htmlFor="all">All Products</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="face" id="face" />
            <Label htmlFor="face">Face Care</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="body" id="body" />
            <Label htmlFor="body">Body Care</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="anti-aging" id="anti-aging" />
            <Label htmlFor="anti-aging">Anti-Aging</Label>
          </div>
        </RadioGroup>
      </div>
      <Button variant="outline" className="w-full" onClick={() => {
        onCategoryChange('all');
        onSearchChange('');
      }}>
        Reset Filters
      </Button>
    </div>
  );
}