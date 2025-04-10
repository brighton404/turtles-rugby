import { supabase } from "@/utils/supabase";
import { useState, useEffect } from "react";
import EventCard from "./eventCard";

// Ghost loading skeleton card
const SkeletonCard = () => (
  <div className="skeleton-card" />
);

const compiledEvents: React.FC = () => {
  const [TurtleEvents, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    async function fetchItems() {
      setLoading(true);
      const { data, error } = await supabase
        .from("TurtleEvents")
        .select("*")
  
      if (error) {
        console.error("Error fetching items:", error);
      } else {
        setItems(data || []);
      }
      setLoading(false);
    }
  
    fetchItems();
  }, []);

  return (
    <>
        {loading
          ? Array.from({ length: 20 }).map((_, idx) => <SkeletonCard key={idx} />)
          : TurtleEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
    </>
  );
};

export default compiledEvents;
