import TeamMemberCard from "../card";
import { MenBanner } from "../teamBanners";
import { supabase } from "@/utils/supabase";
import { useState, useEffect } from "react";
import "../ghost.css"

// Ghost loading skeleton card
const SkeletonCard = () => (
  <div className="skeleton-card" />
);

const snrMen: React.FC = () => {
  const [TurtlePlayers, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    async function fetchItems() {
      setLoading(true);
      const { data, error } = await supabase
        .from("TurtlePlayers")
        .select("*")
        .eq("gender", "male")
        .eq("approved", true)
        /* .order("name", { ascending: true }); */
  
      if (data) { 
          data.sort((a, b) => {
          const aHasC = a.surname.includes("(c)") ? 0 : 1;
          const bHasC = b.surname.includes("(c)") ? 0 : 1;
          if (aHasC !== bHasC) return aHasC - bHasC; // prioritize (c) entries
          return a.name.localeCompare(b.name);       // fallback alphabetical
        });
      }
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
    <div className="space"></div>
      <MenBanner />
      <div className="team-container">
        {loading
          ? Array.from({ length: 20 }).map((_, idx) => <SkeletonCard key={idx} />)
          : TurtlePlayers.map((player) => (
              <TeamMemberCard key={player.id} member={player} />
            ))}
      </div>
    </>
  );
};

export default snrMen;
