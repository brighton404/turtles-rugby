// blog.tsx
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getBlogPosts } from './lib/utils';
import { BlogList } from './lib/lister';
import { categories } from './lib/data';

const Blog: React.FC = () => {
  const { data: posts, isLoading: loading, error } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: getBlogPosts
  });
  
  const [] = useState(false);
  {/** const [showCreate, setShowCreate] = useState(false); */}
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  if (loading) {
    return (
      <div>
        <div>
          <div></div>
          <p>Loading posts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <div>
          {error instanceof Error ? error.message : 'An error occurred'}
          <button onClick={() => window.location.reload()}> Try again</button>
        </div>
      </div>
    );
  }

  const filteredPosts = posts?.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? post.categories.includes(selectedCategory) : true;
    return matchesSearch && matchesCategory;
  }) ?? [];


  return (
      <div className="blog column">
            <div className="row align-y1 BlogSearch-Wrap">
                <input type="text" placeholder="Search posts..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <div className="selectStyle column align-y1 content-x1">
                  <select value={selectedCategory || ''} onChange={(e) => setSelectedCategory(e.target.value ? Number(e.target.value) : null)}>
                    <option value="">All Categories</option>
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
            </div>
            <BlogList posts={filteredPosts} categories={categories}/>
      </div>
  );
};

export default Blog;