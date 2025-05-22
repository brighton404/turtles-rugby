import { useEffect, useState } from 'react';
import { supabase } from '@/utils/supabase';
import DropdownTree from '@/assets/lib/dropdownTree';

const data = [
    { label: "What is?", link: "#aboutUs" },
    { label: "Fundamentals", link: "#History"    },
    { label: "Importance", link: "#History"    },
    { label: "Safe-guarding", link: "#Grounds"   },
  ];

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
    <>
      <section className="Grade-layouts">
      <hgroup>
          <span className="Text_Normal">Unlocking Potential</span>
          <h1 className="no_margins">Inspiring Brilliance: <br /> Early Development Programme</h1>
      </hgroup>
      <div className="container">
          <div className="shape-wrapper semi-left">
              <div className="circle-shape"></div>
          </div>
          <div className="shape-wrapper semi-right">
              <div className="circle-shape"></div>
          </div>
          <div className="shape-wrapper">
              <div className="full-circle shape-wrapper" data-bg-class="bg-loaded" style={{backgroundImage: `url('https://i.postimg.cc/W46Vh742/IMG-20250413-WA0011.jpg')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom', backgroundSize: 'cover',}}></div>
          </div>
          <div className="shape-wrapper">
              <div className="teardrop shape-wrapper" data-bg-class="bg-loaded" style={{backgroundImage: `url('https://i.postimg.cc/t4zyg5J9/IMG-20250412-WA0089.jpg')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover',}}></div>
          </div>
          <div className="shape-wrapper semi-right-again">
              <div className="circle-shape"></div>
          </div>
          <div className="shape-wrapper semi-left-reverse">
              <div className="circle-shape"></div>
          </div>
      </div>
      </section>
      <section className='row m-column E-ageGrade'>
        <DropdownTree data={data} />
        <div className='content-ageGrade'>
          <h2>Understanding Age Grade Rugby</h2>
          <div>
            <h2>What is Age Grade Rugby?</h2>
            <p>
              Age Grade Rugby is a structured development pathway designed for young players, typically from under-7 to under-18 levels. It introduces rugby to children and teenagers in a progressive way, adapting the game to be age-appropriate while emphasizing safety, skill development, and enjoyment.
            </p>
          </div>
          <div>
            <h2>Fundamentals</h2>
            <p>
              The core principles of Age Grade Rugby include player welfare, equal opportunity, skill progression, and fostering a lifelong passion for the sport. Modified rules are used at each age level to ensure safety and encourage learning. Coaching focuses on teamwork, respect, discipline, and inclusivity.
            </p>
          </div>
          <div>
            <h2>Importance to Society</h2>
            <p>
              Age Grade Rugby contributes significantly to societal development. It builds character, encourages physical activity, and creates a sense of community among players, families, and clubs. By engaging youth early, the sport helps nurture future leaders and instills values that extend beyond the field.
            </p>
          </div>
          <div>
            <h2>Safety and Staff Credibility</h2>
            <p>
              Safety is paramount in Age Grade Rugby. The program enforces strict guidelines to prevent physical harm and eliminate any form of bullying. All matches and practices are overseen with appropriate protective equipment and medical protocols. Coaches and staff members are vetted and certified through national governing bodies. These are not random volunteers but trained professionals with clearances and rugby coaching qualifications, ensuring a secure and supportive environment for minors.
            </p>
          </div>
          <div className="space"></div>
        </div>
        <div className='infobar'>
          <h2>Participating Schools</h2>
          <ul>
          {loading ? (
            <p className="loading">Loading schools...</p>
            ) : (
            <div className="school-list column gap-20">
              {schools.map((school) => (
                <div className="school-card " key={school.id}>
                  <h3 className='no_margins'>{school.name}</h3>
                  <p className='no_margins'>Location: {school.location}</p>
                </div>
            ))}
            </div>
          )}
          </ul>
      </div>
      </section>      
    </>
  );
}
