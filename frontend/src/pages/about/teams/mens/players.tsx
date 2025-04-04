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
      const { data, error } = await supabase.from("TurtlePlayers").select("*");

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
