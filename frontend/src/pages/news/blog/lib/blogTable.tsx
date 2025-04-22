import { BlogPost } from "./types";
import { Link } from "react-router";


interface BlogListProps {
  posts: BlogPost[];
}

export function ActivityTable({ posts }: BlogListProps) {
  

  if (!posts.length) {
    return (
      <div className="ListWrap layouts">
        <span>No Posts in this category</span>
      </div>
    );
  }
  
  return (
    <div className="activity-table-container">
      <div className="table">
        <div className="table-row table-header">
          <div className="table-cell">Title</div>
          <div className="table-cell">Tags</div>
          <div className="table-cell">Date</div>
          <div className="table-cell">Author</div>
        </div>
          {posts.map((post) => (
            <Link className="table-row" key={post.id} to={`/news/${post.id}/${post.title}`}>
              <div className="table-cell">
                <span className="Text_Normal">
                  {post.title}
                </span>
              </div>
              <div className="table-cell row gap-4">
              {Array.isArray(post.c_categories) && post.c_categories.length > 0 ? (
                  post.c_categories.map((bc, string) => {
                    const category = bc.Newscategories;
                    return category ? (
                      <span key={`category-${category.id}-${category.id}`} className="displayTag Text_T_Normal m-notruncate">
                        {category.name}
                      </span>
                    ) : (
                      <span key={`no-category-${post.id}-${string}`} className="Text_T_Normal">No category</span>
                    );
                  })
                ) : (
                  <span key={`no-author-info-${post.id}`}>No category</span>
                )}
              </div>
              <div className="table-cell">
                <span className="Text_T_Normal">{new Date(post.date).toLocaleDateString()}</span>                
              </div>
              <div className="table-cell">
                <div className="people">
                {Array.isArray(post.b_writer) && post.b_writer.length > 0 ? (
                  post.b_writer.map((bw, index) => {
                    const writer = bw.Writers;
                    return writer ? (
                      <div key={`writer-${writer.id}-${post.id}`} className="row content-x1 gap-4">
                      <img src={writer.ImageUrl} alt={`${writer.Name}'s Photo`} className="avatar" />
                      <span className="Text_T_Normal no_truncate m-notruncate">
                        {writer.Name}
                      </span>
                      </div>
                    ) : (
                      <span key={`no-writer-${post.id}-${index}`} className="Text_T_Normal">No Author</span>
                    );
                  })
                ) : (
                  <span key={`no-author-info-${post.id}`}>No Author Info</span>
                )}
                  </div>
              </div>
            </Link>
            ))}
      </div>
    </div>
  );
};

export default ActivityTable;