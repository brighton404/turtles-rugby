import { supabase } from '@/utils/supabase';

export async function getBlogPosts() {
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
/* 
export async function getPostById(id: string, title: string) {
  const { data, error } = await supabase
    .from('TurtleNews')
    .select('*')
    .eq('id', id)
    .eq('title', title)
    .single();

  if (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }

  return data; // includes title, content, etc.
}

*/

/* 
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

*/