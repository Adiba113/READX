// models/Review.js

import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  reviewText: { type: String, required: true },
  rating: { type: Number, required: true },
  // Add any other fields you need, e.g., createdAt, updatedAt
}, { timestamps: true }); // This will automatically add createdAt and updatedAt fields

const Review = mongoose.model('Review', reviewSchema);

export default Review;
