import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getBlogPosts } from './lib/utils';
import { BlogList } from './lib/lister';
import { supabase } from '@/utils/supabase';
import { category } from './lib/types';

const Blog: React.FC = () => {
  const { data: posts, isLoading: loading, error } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: getBlogPosts,
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [categories, setCategories] = useState<category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data, error } = await supabase.from('Newscategories')
      .select(`*, c_categories ( Newscategories (id, name))`);
      if (error) {
        console.error('Error fetching categories:', error.message);
      } else if (data) {
        setCategories(data);
      }
    };
    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div className="layouts column align-y1 content-x1 loadingDiv">
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
          <button onClick={() => window.location.reload()}>Try again</button>
        </div>
      </div>
    );
  }

  const filteredPosts = posts?.filter(post => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase());
  
    const matchesCategory = selectedCategory
      ? post.c_categories.some((cat: { Newscategories: { id: string; }; }) => cat.Newscategories?.id === String(selectedCategory))
      : true;
  
    return matchesSearch && matchesCategory;
  }) ?? [];

  return (
    <section className="blog column">
      <div className="row BlogSearch-Wrap">
        <div className="selectStyle column align-y1 content-x1">
          <select
            value={selectedCategory || ''}
            onChange={e => setSelectedCategory(e.target.value || null)}

          >
            <option value=""> All Categories</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      <div className='categoryMap'>
      {categories.map(category => ( 
        <div className='categoryMap-wrapeach' key={category.id}>
          <div className="categoryDot" style={{ backgroundColor: category.color}}></div>
          <span className='Text_T_Normal'>{category.name}</span>
        </div> 
      ))}
      </div>
          <BlogList posts={filteredPosts} />
    </section>
  );
};

export default Blog;
