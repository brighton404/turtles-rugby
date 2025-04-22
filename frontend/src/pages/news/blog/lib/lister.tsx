import { Link } from 'react-router-dom';
import { BlogPost } from './types';

interface BlogListProps {
  posts: BlogPost[];
}

export function BlogList({ posts }: BlogListProps) {

  if (!posts.length) {
    return (
      <div className="ListWrap layouts">
        <span>No Posts in this category</span>
      </div>
    );
  }

  return (
    <section className="ListWrap layouts">
      {posts.map((post) => (
        <Link key={post.id && post.title} to={`/news/${post.id}/${post.title}`}>
          <div className="BlogCard">
            <div className="blogcard-banner" style={{backgroundImage: `url('${post.imageUrl}')`, aspectRatio: '16 / 9', backgroundRepeat: 'no-repeat', backgroundPosition: 'top', backgroundSize: 'cover',}}></div>
            <div className="blog-desc">
              <div className="ArticlePropsWrap row gap-10 Text_T_Normal">              
              <span className='date'>{new Date(post.date).toLocaleDateString()}</span> 
              <span className='separator'>•</span>
              <ul className='blogcard-categoryList'>
                {Array.isArray(post.c_categories) && post.c_categories.length > 0 ? (
                    post.c_categories.map((bc, index) => {
                      const category = bc.Newscategories;
                      return category ? (
                        <div key={`writer-${category.id}-${post.id}`} className="displayTag cardLayout"  style={{backgroundColor: category.color}}>
                          <span className="Text_T_Normal">
                            {category.name}                            
                          </span>
                        </div>
                      ) : (
                        <span key={`no-category-${post.id}-${index}`} className="displayTag Text_T_Normal">No category</span>
                      );
                    })
                  ) : (
                    <span key={`no-author-info-${post.id}`}>No category</span>
                  )}
              </ul>  
              </div>
              <span className="Text_L_Normal no_margins">{post.title}</span>
                {Array.isArray(post.b_writer) && post.b_writer.length > 0 ? (
                  post.b_writer.map((bw, index) => {
                    const writer = bw.Writers;
                    return writer ? (
                      <span key={`writer-${writer.id}-${post.id}`} className="Text_T_Normal blogwriter-name">
                        by {writer.Name}
                      </span>
                    ) : (
                      <span key={`no-writer-${post.id}-${index}`} className='blogwriter-name'>No Author</span>
                    );
                  })
                ) : (
                  <span key={`no-author-info-${post.id}`} className='blogwriter-name'>No Author Info</span>
                )}
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}
