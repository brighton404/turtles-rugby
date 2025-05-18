import { supabase } from '@/utils/supabase';

/* export async function getBlogPosts() {
  const { data, error } = await supabase
    .from('TurtleNews')
    .select(`*, b_writer (Writers ( id, Name, ImageUrl)), c_categories ( Newscategories (id, name, color)) `);

  if (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }

  return data.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
} */
import { BlogPost } from './types';

export async function getBlogPosts(
  page: number = 1,
  pageSize: number = 5
): Promise<{ data: BlogPost[]; totalPages: number }> {
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  const { data, error, count } = await supabase
    .from('TurtleNews')
    .select(
      `*, 
       b_writer (Writers ( id, Name, ImageUrl)), 
       c_categories ( Newscategories (id, name, color))`,
      { count: 'exact' }
    )
    .order('date', { ascending: false })
    .range(from, to);

  if (error || !data) {
    console.error('Error fetching blogs:', error);
    return { data: [], totalPages: 1 };
  }

  const totalPages = Math.ceil((count ?? 0) / pageSize);
  return { data, totalPages };
}


export async function getWriters() {
  const { data, error } = await supabase.from('NewsWriters').select('*');

  if (error) {
    console.error('Error fetching writers:', error);
    return [];
  }

  return data;
  
}

export async function getPostById(id: string, title?: string) {
  let query = supabase.from('TurtleNews').select('*').eq('id', id);

  if (title) {
    query = query.eq('title', title);
  }

  const { data, error } = await query.single();

  if (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }

  return data;
}