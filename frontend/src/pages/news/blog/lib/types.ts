// types that determine that a file is a blog
export interface BlogPost {
    id: string;
    title: string;
    content: string;
    date: string;
    created_at: string;
    imageUrl: string;
    c_categories: { // categories
      id: string;
      Newscategories: {
        id: string;
        name: string;
        color: string;
      } | null;
    }[];
    b_writer: {
      id: string;
      Writers: {
        id: string;
        Name: string;
        ImageUrl: string;
      } | null;
    }[];
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

export interface category {
  id: string;
  name: string;
  color: string;
  Newscategories: {
    id: string;
    name: string;
    color: string;
  };
}

export interface blogWriter {
  id: string;
  Name: string;
  Writers: {
    id: string;
    Name: string;
    ImageUrl: string;
  };
}