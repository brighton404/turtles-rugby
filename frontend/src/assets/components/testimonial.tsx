import { useEffect, useState } from 'react';
import { supabase } from '@/utils/supabase';

type Review = {
  id: string;
  name: string;
  message: string;
  created_at: string;
};

export function ReviewsList() {
  const [reviews, setReviews] = useState<Review[]>([]);

  const fetchReviews = async () => {
    const { data, error } = await supabase
      .from('Reviews')
      .select('*')
      .eq("index", "true")
      .order('created_at', { ascending: true });

    if (!error && data) setReviews(data);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
        <div className='reviews-container'>
            {reviews.map((review) => (
              <div className="review-Card" key={review.id}>
                <li style={{ marginBottom: '1rem', listStyle: 'none', margin: '0px' }}>
                    <span><strong>{review.name}</strong> said:</span>
                    <div className="review-message">
                      <p>{review.message}</p>
                    </div>                    
                    <small>{new Date(review.created_at).toLocaleString()}</small>
                </li>
              </div>
            ))}
        </div>
  );
}