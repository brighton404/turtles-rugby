/* import { Link } from 'react-router-dom'; */
import SidebarPreview from '@/assets/components/sidebarPreview';
import { BlogPost } from './types';
import { useState } from 'react';

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

  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = (post: BlogPost) => {
    setSelectedPost(post);
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSelectedPost(null);
    setSidebarOpen(false);
  };

  return (
    <section className="ListWrap layouts">
      {posts.map((post) => (
        <div key={post.id && post.title} /* to={`/news/${post.id}/${post.title}`} */>
          <div className="BlogCard" onClick={() => openSidebar(post)}>
            {/* <button >{post.title}</button> */}
            <div className="blogcard-banner" data-bg-class="bg-loaded" style={{backgroundImage: `url('${post.imageUrl}')`, aspectRatio: '16 / 9', backgroundRepeat: 'no-repeat', backgroundPosition: 'top', backgroundSize: 'cover',}}></div>
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
        </div>
      ))}
    <SidebarPreview
        post={selectedPost}
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
      />
    </section>
  );
}
