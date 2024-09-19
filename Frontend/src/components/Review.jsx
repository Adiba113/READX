import React, { useState } from 'react';

const Review = ({ productId }) => {
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit review logic
    console.log(`Review submitted for product: ${productId}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea 
        value={review} 
        onChange={(e) => setReview(e.target.value)} 
        placeholder="Write your review"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Review;
