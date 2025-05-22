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
        .order("start", { ascending: false })
        .limit(6);
        /* 
              if (data) { 
          data.sort((a, b) => {
          const aHasC = a.surname.includes("(c)") ? 0 : 1;
          const bHasC = b.surname.includes("(c)") ? 0 : 1;
          if (aHasC !== bHasC) return aHasC - bHasC; // prioritize (c) entries
          return a.name.localeCompare(b.name);       // fallback alphabetical
        });
         */

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
