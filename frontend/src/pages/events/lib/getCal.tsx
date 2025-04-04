import { supabase } from '@/utils/supabase';

interface Event {
  id: string;
  title: string;
  start: string;
  end: string;
  location: string;
  gmaps: string;
  description: string;
  imageUrl: string;
}

export async function getUpcomingEvent(): Promise<Event | null> {
  const today = new Date().toISOString();

  const { data, error } = await supabase
    .from('TurtleEvents')
    .select('*') // Ensure all necessary fields are selected
    .gte('start', today)
    .order('start', { ascending: true })
    .limit(1);

  if (error) {
    console.error('Error fetching event:', error);
    return null;
  }

  return data.length > 0 ? (data[0] as Event) : null;
}