import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider'; // Assuming you have an AuthProvider for managing authentication

const ReviewPage = () => {
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);
  const [authUser] = useAuth(); // Get the current user from the context
  const navigate = useNavigate();

  // Function to handle review submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4001/review', {
        reviewText,
        rating,
      });
      toast.success('Review submitted successfully');
      setReviewText('');
      setRating(0);
    } catch (error) {
      toast.error('Failed to submit review');
    }
  };

  // If the user is not logged in, redirect to the login page or display a message
  if (!authUser) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-300 via-pink-100 to-pink-200 py-10 px-4">
        <h2 className="text-xl font-bold mb-4">You need to log in to write a review</h2>
        <button
          className="py-2 px-4 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
          onClick={() => navigate('/signup')}
        >
          Log in / Sign up
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-300 via-pink-100 to-pink-200 py-10 px-4">
      <div className="w-full max-w-md bg-beige-100 rounded-lg shadow-lg p-8 dark:bg-gray-800">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Write a Review</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="review" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Review
            </label>
            <textarea
              id="review"
              rows="4"
              className="block w-full p-3 mt-1 text-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write your review here..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              required
            ></textarea>
          </div>

          <div>
            <label htmlFor="rating" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Rating
            </label>
            <select
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="block w-full p-3 mt-1 text-sm rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value={0} disabled>
                Select a rating
              </option>
              <option value={1}>1 - Very Bad</option>
              <option value={2}>2 - Bad</option>
              <option value={3}>3 - Average</option>
              <option value={4}>4 - Good</option>
              <option value={5}>5 - Excellent</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 text-sm font-medium text-white bg-pink-500 rounded-lg hover:bg-pink-600 focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-800"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewPage;
