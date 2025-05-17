import { useEffect, useState } from 'react';
import { supabase } from '@/utils/supabase';
import { getUpcomingEvent } from './getCal';
import { LucideIcons } from '@/assets/lib/lucideIcons';

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
  }

  return (
    <section className="FeaturedEvent">
      <div style={styles.background}>
      <div className='shade'>
        <div className="event-banner">
          <h2>{event.title}</h2>
          <div className='column gap-10 content-x1 m-content-x m-align-y'>
            <div className='row content-x1 m-content-x m-align-y gap-4 event-dates'>
              <span><LucideIcons.calendar /></span>
              <p className=''>{new Date(event.start).toLocaleDateString()} - {new Date(event.end).toLocaleDateString()}</p>
            </div>
            <div className='row content-x1 align-y1 gap-10 event-map'>
              <span><LucideIcons.map /></span>
              <a href={event.gmaps}>{event.location}</a>
            </div>
          </div>
          {/* <p className='event-desc'>{event.description}</p> */}
        </div>
      </div>
      </div>
    </section>
  );
}
