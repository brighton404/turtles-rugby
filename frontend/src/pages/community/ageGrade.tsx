import { useEffect, useState } from 'react';
import { supabase } from '@/utils/supabase';

export default function AgeGradePage() {
  const [schools, setSchools] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSchools = async () => {
      const { data, error } = await supabase.from('AgeGrade').select('*');
      if (error) console.error('Error fetching schools:', error);
      else setSchools(data);
      setLoading(false);
    };

    fetchSchools();
  }, []);

  return (
    <div className="ageGrade">
        <div className="space"></div>
      <h1 className="title">🏉 Age Grade Rugby Schools</h1>
      {loading ? (
        <p className="loading">Loading schools...</p>
      ) : (
        <div className="school-list">
          {schools.map((school) => (
            <div className="school-card" key={school.id}>
              <h2>{school.name}</h2>
              <p>Location: {school.location}</p>
              <p>Age Group: {school.age_group}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
