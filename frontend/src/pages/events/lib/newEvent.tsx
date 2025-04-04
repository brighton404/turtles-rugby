import { useEffect, useState } from 'react';
import { supabase } from '@/utils/supabase';
import { getUpcomingEvent } from './getCal';

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

export default function EventBanner() {
    const [event, setEvent] = useState<Event | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      async function fetchEvent() {
        setLoading(true);
        const upcomingEvent = await getUpcomingEvent();
        setEvent(upcomingEvent);
        setLoading(false);
      }
  
      fetchEvent();

    // Subscribe to live updates
    const channel = supabase
      .channel('events-updates')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'TurtleEvents' },
        async () => {
          console.log("Event table changed. Fetching new event...");
          const updatedEvent = await getUpcomingEvent();
          setEvent(updatedEvent);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel); // Cleanup subscription
    };
  }, []);

  
  if (loading) {
    return (
      <div className="column align-y1 content-x1 bannerGhost FeaturedEvent">
          <p style={{color: `white`}}>Loading banner...</p>
      </div>
    );
  }
  if (!event) return null;

  const styles = {
    background: {
      backgroundImage: `url('${event.imageUrl}')`,
      aspectRatio: `16 / 9`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: `center`,
      backgroundSize: `cover`,
    },
    shade: {
      background: `linear-gradient(45deg, rgba(18,18,18,1) 0%, rgba(12,12,12,1) 36%, rgba(255,255,255,0) 100%)`,
    }
  }

  return (
    <div className="FeaturedEvent" style={styles.background}>
      <div style={styles.shade} className='shade'>
        <div className="event-banner">
          <h2>{event.title}</h2>
          <div className='row m-column gap-10 content-x1'>
          <p className='event-dates'>{new Date(event.start).toLocaleDateString()} - {new Date(event.end).toLocaleDateString()}</p>
          <a href={event.gmaps} className='event-map'>{event.location}</a>
          </div>
          <p className='event-desc'>{event.description}</p>
        </div>
      </div>
    </div>
  );
}
