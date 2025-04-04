import { supabase } from '@/utils/supabase';

export async function getBlogPosts() {
  const { data, error } = await supabase.from('TurtleNews').select('*');

  if (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }

  return data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
}

export async function getPostById(title: string) {
  const { data, error } = await supabase.from('TurtleNews').select('*').eq('title', title).single();

  if (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }

  return data;
}