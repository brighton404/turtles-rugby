import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase";
import MemberCard from "././assets/membercard"

const SkeletonCard = () => (
  <div className="skeleton-member" />
);

const MembersList: React.FC = ({ }) => {
      const [members, setItems] = useState<any[]>([]);
      const [loading, setLoading] = useState<boolean>(true);
      
      useEffect(() => {
        async function fetchItems() {
          setLoading(true);
          const { data, error } = await supabase
            .from("TurtleMembers")
            .select("*")
            .order('id', { ascending: true })
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
    <div>
      <h2>Club Members</h2>
      <ul>
          {loading
          ? Array.from({ length: 20 }).map((_, idx) => <SkeletonCard key={idx} />)
          : members.map((member) => (
            <MemberCard key={member.id} member={member} />
            ))}
      </ul>
    </div>
  );
};

export default MembersList;
