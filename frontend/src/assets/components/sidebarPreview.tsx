import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '@/pages/news/blog/lib/types';
import { marked } from 'marked';
import { AnimatePresence, motion } from 'framer-motion';
import Icons from '../lib/icons';
/* import './SidebarPreview.css'; */ // we'll create this file for styles

interface SidebarPreviewProps {
  post: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
}

const SidebarPreview: React.FC<SidebarPreviewProps> = ({ post, isOpen, onClose }) => {

  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!post) return null;

  const markdownContent = marked(post.content);

  return (
    <AnimatePresence>
    {isOpen && post && (
      <motion.div
        className="sidebar-prev"
        ref={sidebarRef}
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '100%', opacity: 0 }}
        transition={{ type: 'tween', duration: 0.3 }}
      >
        <div className="space"></div>
        <div className='carriers'>             
            {/* <button className="sidebar-close-button" onClick={onClose}></button> */}
            <Link to={`/news/${post.id}/${post.title}`} className="read-more">
            <Icons  variant='expand'/>
        </Link>
            <button className="sidebar-close-button" onClick={onClose}><Icons variant='close' /></button>
        </div>
        <div className='column'>
        <h2>{post.title}</h2>
        <article className="Markdown" dangerouslySetInnerHTML={{ __html: markdownContent }} />
        <Link to={`/news/${post.id}/${post.title}`} className="read-more">
          Read Full Blog
        </Link>
        </div>
        <div className="space"></div>
      </motion.div>
    )}
  </AnimatePresence>

  );
};

export default SidebarPreview;

/* 
    <div className={`sidebar-prev ${isOpen ? 'open' : ''}`} ref={sidebarRef}>
      <button className="close-button" onClick={onClose}>×</button>
      <h2>{post.title}</h2>
      <article className="Markdown" dangerouslySetInnerHTML={{ __html: markdownContent }} />
      <Link to={`/news/${post.id}/${post.title}`} className="read-more">
        Read Full Blog
      </Link>
    </div>
*/