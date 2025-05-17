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
    <section className="ageGrade layouts m-layouts column gap-20">
        <div className="space"></div>
        <div className='column gap-2'>
          <h1 className="title no_margins">Age Grade</h1>
          <span className="Text_Normal no_margins">Schools under our age grade rugby program</span>
        </div>
      {loading ? (
        <p className="loading">Loading schools...</p>
      ) : (
        <div className="school-list column gap-20">
          {schools.map((school) => (
            <div className="school-card " key={school.id}>
              <h2 className='no_margins'>{school.name}</h2>
              <p className='no_margins'>Location: {school.location}</p>
              <p className='no_margins'>Age Group: {school.age_group}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
