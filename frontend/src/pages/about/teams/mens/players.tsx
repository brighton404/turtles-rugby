import TeamMemberCard from "../card";
import { MenBanner } from "../teamBanners";
import { supabase } from "@/utils/supabase";
import { useState, useEffect } from "react";

const snrMen: React.FC = ({ }) => {
      const [TurtlePlayers, setItems] = useState<any[]>([]);

      useEffect(() => {
        async function fetchItems() {
          const { data, error } = await supabase.from('TurtlePlayers').select('*');
    
          if (error) {
            console.error('Error fetching items:', error);
          } else {
            setItems(data || []);
          }
        }
    
        fetchItems();
      }, []);
    return (
        <>
          <MenBanner />
          <div className="team-container">
          {TurtlePlayers.map((TurtlePlayers) => (
            <TeamMemberCard key={TurtlePlayers.id} member={TurtlePlayers} />
          ))}
          </div>
        </>
    );
};
export default snrMen;