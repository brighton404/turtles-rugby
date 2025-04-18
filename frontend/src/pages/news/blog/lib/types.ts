// types that determine that a file is a blog
export interface BlogPost {
    id: string;
    title: string;
    content: string;
    author: string;
    date: string;
    categories: number[];
    created_at: string;
  }
  
  export interface Comment {
    id: string;
    author: string;
    content: string;
    date: string;
  }
  
  export interface NewComment {
    author: string;
    content: string;
    date: string;
  }
  
  export interface Category {
    id: number;
    name: string;
  }