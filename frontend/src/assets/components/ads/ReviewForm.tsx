import { supabase } from '@/utils/supabase';
import { useState } from 'react';
import { JoinPlayers } from './banners';


export function ReviewForm({ onNewReview }: { onNewReview: () => void }) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [Isindex, setIndex] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase
        .from('Reviews')
        .insert([{ name, message, index: Isindex,}]);

    if (!error) {
      setName('');
      setMessage('');
      setIndex(false)
      onNewReview();
    } else {
      alert('Failed to submit review');
    }
    setLoading(false);
  };

  return (
    <>
    <JoinPlayers/>
    <div className="layouts joinClub">
    <form onSubmit={handleSubmit} id='reviewForm' style={{ marginTop: '2rem' }}>
        <h2>Leave a Review</h2>
        <span className="Text_S_Normal truncate description">
           Note that this review will be Available publicly unless you specify not to include it in the website review section.
        </span> 
        <div className="form-wrap">
        <div className='form-children-wrap'> 
            <span>Name</span>        
            <input type="text" placeholder="Your name" value={name} required onChange={(e) => setName(e.target.value)} />
            <span className="Text_T_Normal description">This is your public display name. It can be your real name or a pseudonym.</span>
        </div>
        <div className='form-children-wrap'>
        <span>Your Message (Optional)</span>
            <textarea placeholder="write a review" value={message} required onChange={(e) => setMessage(e.target.value)} />
        </div>
        <div> 
                <label className='row gap-10 content-x1'>
                    <input
                    type="checkbox"
                    checked={Isindex}
                    onChange={(e) => setIndex(e.target.checked)}                    
                    />
                        Allow your review to be viewed publicly in the website?
                </label>
            </div>
        <button type="submit" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit Review'}
        </button>
      </div>
    </form>
    </div>
    </>
  );
}
