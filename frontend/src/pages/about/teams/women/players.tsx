import TeamMemberCard from "../card";
import { supabase } from "@/utils/supabase";
import { WomenBanner } from "../teamBanners";
import { useState, useEffect } from "react";

const SkeletonCard = () => (
  <div className="skeleton-card" />
);

const snrWomen: React.FC = ({ }) => {
    const [TurtlePlayers, setItems] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    
    useEffect(() => {
      async function fetchItems() {
        setLoading(true);
        const { data, error } = await supabase
          .from("TurtlePlayers")
          .select("*")
          .eq("gender", "female"); 
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
        <WomenBanner />
        <div className="team-container">
        {loading
          ? Array.from({ length: 20 }).map((_, idx) => <SkeletonCard key={idx} />)
          : TurtlePlayers.map((player) => (
              <TeamMemberCard key={player.id} member={player} />
            ))}
      </div>
      </>
    )
};
export default snrWomen;