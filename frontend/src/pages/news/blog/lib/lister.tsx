// Wraps blogposts inside a container and also creates thumbnails for them
import { Link } from 'react-router-dom';
import { BlogPost, Category } from './types';

interface BlogListProps {
  posts: BlogPost[];
  categories?: Category[]; 
}

export function BlogList({ posts, categories = [] }: BlogListProps) {
  if (!posts.length) return <div>No posts found</div>;

  return (
    <div className="ListWrap layouts">
      {posts.map((post) => (
        <Link key={post.id}  to={`/news/${post.title}`} >
          <div className='BlogCard'>
            <span className="Text_L_Normal no_margins">{post.title}</span>
            <div className="ArticlePropsWrap row gap-10 Text_T_Normal">
              <span>{new Date(post.date).toLocaleDateString()}</span>
              <span>•</span>
              <span>{post.author}</span>
            </div>
            {categories.length > 0 && (
              <div className="row gap-10">
                {post.categories.map(catId => {
                  const category = categories.find(c => c.id === catId);
                  return category ? (
                    <span key={category.id} className="displayTag Text_T_Normal">
                      {category.name}
                    </span>
                  ) : null;
                })}
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}

