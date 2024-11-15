import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Dermalix",
  description: "Stay updated with the latest skincare trends, tips, and research from Dermalix experts.",
};

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Understanding the Science of Skin Aging",
      date: "March 15, 2024",
      excerpt: "Discover the biological processes behind skin aging and learn effective prevention strategies.",
      category: "Skin Science",
      image: "https://images.unsplash.com/photo-1556229174-5e42a09e45af?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "The Role of Niacinamide in Skincare",
      date: "March 10, 2024",
      excerpt: "Learn how this versatile ingredient benefits multiple skin concerns and why it's in our products.",
      category: "Ingredients",
      image: "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Building Your Perfect Skincare Routine",
      date: "March 5, 2024",
      excerpt: "A step-by-step guide to creating an effective skincare routine for your specific needs.",
      category: "Skincare Tips",
      image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=2069&auto=format&fit=crop"
    }
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Dermalix Blog</h1>
      <p className="text-lg text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
        Explore our collection of expert articles, skincare tips, and the latest research in dermatology and skin health.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <article key={index} className="group bg-background/50 rounded-lg overflow-hidden border border-primary/10 hover:border-primary/20 transition-colors">
            <div className="relative h-48 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-primary/90 text-white text-sm rounded-full">
                  {post.category}
                </span>
              </div>
            </div>
            <div className="p-6">
              <time className="text-sm text-foreground/60">{post.date}</time>
              <h2 className="text-xl font-semibold mt-2 mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-foreground/70 mb-4">
                {post.excerpt}
              </p>
              <button className="text-primary hover:text-primary/80 font-medium transition-colors">
                Read More →
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
