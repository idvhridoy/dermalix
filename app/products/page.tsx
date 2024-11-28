'use client';

import { useState } from 'react';
import { ProductCard } from '@/components/product-card';
import { ProductFilters } from '@/components/product-filters';

const products = [
  {
    id: 1,
    title: 'Gentle Cleansing Foam',
    description: 'A gentle, pH-balanced cleanser for all skin types',
    price: 29.99,
    category: 'cleansers',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 2,
    title: 'Vitamin C Serum',
    description: 'Brightening and antioxidant protection serum',
    price: 59.99,
    category: 'serums',
    image: 'https://images.unsplash.com/photo-1620756236308-65c3ef5d25f3?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 3,
    title: 'Hydrating Moisturizer',
    description: 'Deep hydration for all skin types',
    price: 49.99,
    category: 'moisturizers',
    image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&q=80&w=500',
  },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <div className="bg-muted py-20">
        <div className="container">
          <h1 className="text-4xl font-bold text-center mb-4">Our Products</h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto">
            Discover our range of innovative skincare solutions, scientifically formulated for exceptional results.
          </p>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <aside className="md:sticky md:top-20 h-fit">
            <ProductFilters
              onCategoryChange={setSelectedCategory}
              onSearchChange={setSearchQuery}
            />
          </aside>
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  image={product.image}
                  category={product.category}
                />
              ))}
            </div>
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No products found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}