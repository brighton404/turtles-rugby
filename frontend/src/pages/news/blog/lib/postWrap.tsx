import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getPostById } from './utils';
import { ButtonColor, ButtonState } from '../../../../assets/lib/actionButton';
import Button from '../../../../assets/lib/button';
import Icons from '../../../../assets/lib/icons';
import { marked } from 'marked';

export function BlogPage() {
  const { title} = useParams<{ id: string, title: string }>();
  
  const { data: post, isLoading, error } = useQuery({
    queryKey: ['blog-post', title],
    queryFn: () => getPostById(title!),
    enabled: !!title
  });

  if (isLoading) {
    return (
      <div className="layouts m-layouts column align-y1 content-x1 loadingDiv">
      <p style={{color: `black`}}>Loading post...</p>
  </div>
    );
  }
  
  if (error || !post) {
    return (
      <div>
        <div>
          <h2>Post not found</h2>
          <Button color={ButtonColor.Primary} state={ButtonState.Default} isOutlined={false} navigateTo="/news" icon={<Icons variant='chevron-left'/>}>
            Return to blog list
          </Button>
        </div>
      </div>
    );
  }

  // Parse the Markdown content
  const markdownContent = marked(post.content);

  return (
    <div>
      <main className="BlogMain">
        <Button color={ButtonColor.Primary} state={ButtonState.Default} isOutlined={false} navigateTo="/news" icon={<Icons variant='chevron-left'/>}>Back</Button>
        <h1>{post.title}</h1>
          <div className="row gap-10">
            <span>{new Date(post.date).toLocaleDateString()}</span>
            <span>•</span>
            <span>{post.author}</span>
          </div>
        <article className="Markdown" dangerouslySetInnerHTML={{ __html: markdownContent }} />
      </main>
    </div>
  );
}
