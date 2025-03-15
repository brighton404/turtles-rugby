/* useless component */
import { useQuery } from '@tanstack/react-query';
import { getBlogPosts } from '../utils';
import { BlogList } from '../lister';

export function BlogListPage() {
  const { data: posts, isLoading } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: getBlogPosts
  });

  if (isLoading) return <div>Loading...</div>;
  if (!posts) return <div>No posts found</div>;

  return (
    <div className="row spread"> 
      <BlogList posts={posts} />
    </div>
  );
}