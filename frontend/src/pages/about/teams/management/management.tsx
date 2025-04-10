import { supabase } from "@/utils/supabase";
import { useState, useEffect } from "react";
import { ManagementBanner } from "../teamBanners";
import MemberCard from "../memberCards";

const SkeletonCard = () => (
  <div className="skeleton-card" />
);

const ClubManagement: React.FC = ({ }) => {

      const [TurtlePlayers, setItems] = useState<any[]>([]);
      const [loading, setLoading] = useState<boolean>(true);
      
      useEffect(() => {
        async function fetchItems() {
          setLoading(true);
          const { data, error } = await supabase
            .from("TurtleManagement")
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
      <div className="space"></div>
        <ManagementBanner />
        <div className="team-container">
        {loading
          ? Array.from({ length: 20 }).map((_, idx) => <SkeletonCard key={idx} />)
          : TurtlePlayers.map((player) => (
              <MemberCard key={player.id} member={player} />
            ))}
      </div>
      </>
    )
};
export default ClubManagement;