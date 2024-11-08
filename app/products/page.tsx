'use client';

import { useState } from 'react';
import { ProductCard } from '@/components/product-card';
import { ProductFilters } from '@/components/product-filters';

const products = [
  {
    id: 1,
    title: 'Rejuvenating Serum',
    description: 'Advanced anti-aging formula with hyaluronic acid and peptides',
    price: 89.99,
    category: 'face',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 2,
    title: 'Hydrating Moisturizer',
    description: 'Deep hydration with natural ingredients for all skin types',
    price: 49.99,
    category: 'face',
    image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 3,
    title: 'Body Renewal Cream',
    description: 'Luxurious body cream for smooth, radiant skin',
    price: 39.99,
    category: 'body',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 4,
    title: 'Age Defense Complex',
    description: 'Powerful anti-aging treatment with retinol and vitamin C',
    price: 129.99,
    category: 'anti-aging',
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 5,
    title: 'Gentle Cleansing Foam',
    description: 'Soft, pH-balanced cleanser for daily use',
    price: 29.99,
    category: 'face',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 6,
    title: 'Night Repair Cream',
    description: 'Intensive overnight treatment for skin regeneration',
    price: 79.99,
    category: 'anti-aging',
    image: 'https://images.unsplash.com/photo-1614859324967-3df02391aa3f?auto=format&fit=crop&q=80&w=500',
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