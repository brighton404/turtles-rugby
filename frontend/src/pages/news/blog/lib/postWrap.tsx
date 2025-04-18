import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getPostById } from './utils';
import { ButtonColor, ButtonState } from '@/assets/lib/actionButton';
import Button from '@/assets/lib/button';
import Icons from '@/assets/lib/icons';
import { marked } from 'marked';

export function BlogPage() {
  const { id, title } = useParams<{ id: string; title: string }>();

  const { data: post, isLoading, error } = useQuery({
    queryKey: ['blog-post', id, title],
    queryFn: () => getPostById(id!, title!),
    enabled: !!id && !!title, // enable only when both exist
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
      <>
        <div className="space"></div>
        <div className='layouts'>
          <Button color={ButtonColor.Secondary} state={ButtonState.Default} isOutlined={false} navigateTo="/news" icon={<Icons variant='chevron-left'/>}>
            Return to blog list
          </Button>
          <h2>Post not found</h2>
        </div>
      </>
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
