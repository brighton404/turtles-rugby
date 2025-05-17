import { supabase } from '@/utils/supabase';
import { useState } from 'react';
import { LeaveReview } from './banners';
import { toast, ToastContainer } from '../extend/toast';

let lastSubmittedAt: number | null = null;

export function ReviewForm({ onNewReview }: { onNewReview: () => void }) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [Isindex, setIndex] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const now = Date.now();
    if (lastSubmittedAt && now - lastSubmittedAt < 1000) {
      toast("Too many requests", {
        type: "error",
        description: "Stop for a moment and try again later",
      });
      return;
    }

    if (!name.trim() || !message.trim()) {
      toast("Empty fields", {
        type: "error",
        description: "Name and message are required",
      });
      return;
    }

    setLoading(true);

    // Check for duplicates first
    const { data: duplicate, error: checkError } = await supabase
      .from('Reviews')
      .select('id')
      .eq('name', name.trim())
      .eq('message', message.trim())
      .maybeSingle();

    if (checkError) {
      console.log(checkError)
      toast("Something went wrong ", {
        type: "error",
        description: "Our Database isn't online try again later",
      });
      setLoading(false);
      return;
    }

    if (duplicate) {
      toast("Duplicate review detected", {
        type: "info",
        description: "You are trying to submite a similar review you already posted",
      });
      setLoading(false);
      return;
    }

    const { error } = await supabase
      .from('Reviews')
      .insert([{ name: name.trim(), message: message.trim(), index: Isindex }]);

    if (!error) {
      setName('');
      setMessage('');
      setIndex(false);
      lastSubmittedAt = Date.now();
      onNewReview();
      toast("Success", {
        type: "success",
        description: 'Your review was submitted'
      })
    } else {
      toast("Failed, try again later!", {
        type: "error",
        description: 'Your review was not submitted.',
      });
    }

    setLoading(false);
  };

  return (
    <div className='form-bannerWrap'>
    <LeaveReview/>
    <div className="layouts joinClub">
    <form onSubmit={handleSubmit} id='reviewForm' style={{ marginTop: '2rem' }}>
      <div>
        <h2>Leave a Review</h2>
        <span className="Text_Normal truncate description">
           Note that this review will be Available publicly unless you specify not to include it in the website review section.
        </span> 
      </div>
        <div className="form-wrap">
        <div className='form-children-wrap'> 
            <span>Name</span>        
            <input type="text" placeholder="Your name" value={name} required onChange={(e) => setName(e.target.value)} />
            <span className="Text_S_Normal description">This is your public display name. It can be your real name or a pseudonym.</span>
        </div>
        <div className='form-children-wrap'>
        <span>Your Message (Optional)</span>
            <textarea placeholder="write a review" value={message} required onChange={(e) => setMessage(e.target.value)} />
        </div>
        <div> 
          <label className='row gap-10 content-x1'>
              <input type="checkbox" checked={Isindex} onChange={(e) => setIndex(e.target.checked)}/>
                  Allow your review to be viewed publicly in the website?
          </label>
            </div>
        <button type="submit" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit Review'}
        </button>
      </div>
    </form>
    </div>
    <ToastContainer />
    </div>
  );
}
