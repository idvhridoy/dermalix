import React from 'react';

export default function ReviewsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Customer Reviews</h1>
      
      <div className="space-y-8">
        <section className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center space-x-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-6 h-6 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-2xl font-medium mb-2">4.8 out of 5</p>
          <p className="text-muted-foreground">Based on 1,482 reviews</p>
        </section>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-6 bg-card rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                <span className="text-lg font-semibold">SJ</span>
              </div>
              <div>
                <h3 className="font-semibold">Sarah Johnson</h3>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-muted-foreground">
              &ldquo;The anti-aging serum has made a remarkable difference in my skin&apos;s texture and appearance. 
              After just a few weeks of use, I noticed significant improvement in fine lines.&rdquo;
            </p>
            <p className="mt-2 text-sm text-muted-foreground">Verified Purchase - Anti-Aging Serum</p>
          </div>

          <div className="p-6 bg-card rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                <span className="text-lg font-semibold">MP</span>
              </div>
              <div>
                <h3 className="font-semibold">Michael Parker</h3>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-muted-foreground">
              &ldquo;Finally found a moisturizer that doesn&apos;t irritate my sensitive skin. The hydrating cream 
              is lightweight yet incredibly effective. My skin feels amazing!&rdquo;
            </p>
            <p className="mt-2 text-sm text-muted-foreground">Verified Purchase - Hydrating Cream</p>
          </div>

          <div className="p-6 bg-card rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                <span className="text-lg font-semibold">EL</span>
              </div>
              <div>
                <h3 className="font-semibold">Emma Liu</h3>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-muted-foreground">
              &ldquo;The vitamin C serum has completely transformed my skin. Dark spots have faded, and my 
              complexion is noticeably brighter. Worth every penny!&rdquo;
            </p>
            <p className="mt-2 text-sm text-muted-foreground">Verified Purchase - Vitamin C Serum</p>
          </div>

          <div className="p-6 bg-card rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                <span className="text-lg font-semibold">RD</span>
              </div>
              <div>
                <h3 className="font-semibold">Robert Davis</h3>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 4].map((star) => (
                    <svg
                      key={star}
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-muted-foreground">
              &ldquo;Great products overall. The face wash is gentle yet effective. Would love to see more 
              options for combination skin in the future.&rdquo;
            </p>
            <p className="mt-2 text-sm text-muted-foreground">Verified Purchase - Gentle Face Wash</p>
          </div>
        </div>

        <section className="mt-12 p-6 bg-primary/5 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Customer Satisfaction</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">98%</div>
              <p>Would recommend to friends</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">95%</div>
              <p>Saw visible results</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">92%</div>
              <p>Repeat customers</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
