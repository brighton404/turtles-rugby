/* Useless Component */

import React, { useState } from 'react';
import { BlogPost, Category, NewComment } from '../types';
import { formatDate } from '../formatDate';

interface BlogPostProps {
  post: BlogPost;
  categories: Category[];
  onEdit: (post: BlogPost) => void;
  onAddComment: (postTitle: string, comment: NewComment) => Promise<void>;
}

export const BlogPostComponent: React.FC<BlogPostProps> = ({
  post,
  categories,
  onEdit,
  onAddComment,
}) => {
  const [commentContent, setCommentContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentContent.trim()) return;

    setIsSubmitting(true);
    try {
      const newComment: NewComment = {
        content: commentContent.trim(),
        author: 'Current User', // In a real app, get from auth
        date: new Date().toISOString(),
      };

      await onAddComment(post.title, newComment);
      setCommentContent('');
    } catch (error) {
      console.error('Failed to add comment:', error);
      alert('Failed to add comment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <article>
      <div>
        <h2>{post.title}</h2>
        <div>
          <span>{formatDate(post.date)}</span>
          <span>•</span>
          <span>{post.author}</span>
        </div>
        <div>
          {categories.map(category => (
            <span key={category.id}>{category.name}</span>
          ))}
        </div>
      </div>
      <div>{post.content}</div>
      <div>
        <button onClick={() => onEdit(post)}> Edit post </button>
        <div>
        <h3>Comments</h3>
        {post.comments && post.comments.length > 0 ? (
          <div>
            {post.comments.map((comment) => (
              <div key={comment.id}>
                <div>
                  {comment.author} • {formatDate(comment.date)}
                </div>
                <div>{comment.content}</div>
              </div>
            ))}
          </div>
        ) : (
          <p>No comments yet</p>
        )}
        <form onSubmit={handleAddComment}>
          <textarea placeholder="Add a comment..." value={commentContent} onChange={(e) => setCommentContent(e.target.value)} rows={3}  required disabled={isSubmitting}/>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Adding...' : 'Add Comment'}
          </button>
        </form>
      </div>
      </div>
    </article>
  );
};