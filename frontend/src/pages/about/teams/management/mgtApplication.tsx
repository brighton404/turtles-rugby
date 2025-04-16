import { useEffect, useState } from 'react';
import { supabase } from '@/utils/supabase';
import { JoinMgt } from '@/assets/components/ads/banners';

export const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
    message: '',
  });
  const [positions, setPositions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch open positions on mount
  useEffect(() => {
    const fetchPositions = async () => {
      const { data, error } = await supabase
        .from('TurtleMgtPositions')
        .select('title')
        .eq('status', 'open');

      if (error) {
        console.error('Error fetching positions:', error.message);
      } else if (data) {
        setPositions(data.map(pos => pos.title));
      }
    };

    fetchPositions();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.from('TurtleManagement').insert([formData]);

    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return <p>✅ Application submitted successfully! We’ll be in touch.</p>;
  }

  return (
    <>
    <JoinMgt />
    <div className="layouts joinmgt">
      <form onSubmit={handleSubmit} id="joinMgt">
        <h2>Apply for a Position</h2>
        <div className="form-children-wrap">
          <label>Name</label>
          <span className="Text_T_Normal description">This is your actual legal name</span>
          <input name="name" value={formData.name} onChange={handleChange} required/>
        </div>
        <div className="form-children-wrap">
          <label>Email</label>
          <span className="Text_T_Normal description">This is your public mail. Club Information would be passed via the provided mail.</span>
          <input name="email" type="email" value={formData.email} onChange={handleChange} required/>
        </div>
        <div className="form-children-wrap">
          <label>Phone</label>
          <span className="Text_T_Normal description">This is a number the club can easily reach you with.</span>
          <input name="email" type="email" value={formData.email} onChange={handleChange} required/>
        </div>
        <div className="form-children-wrap">
          <label>Position</label>
          <span className="Text_T_Normal description">Select the position you wish to apply for in the club</span>
          <select
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
          >
            <option value=""> Select an open position</option>
            {positions.map((title, index) => (
              <option key={index} value={title}>
                {title}
              </option>
            ))}
          </select>
        </div>
        <div className="form-children-wrap">
          <label>Message / Cover Letter</label>
          <span className="Text_T_Normal description">Paste an additional note/ cover letter </span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Submitting…' : 'Submit Application'}
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
    </>
  );
};
