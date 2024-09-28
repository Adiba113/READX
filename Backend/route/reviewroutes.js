// routes/review.route.js
import express from 'express';
import Review from '../models/review.model.js';

const router = express.Router();

// Route to create a new review
router.post('/', async (req, res) => {
    try {
        const { user, reviewText, rating } = req.body;
        const newReview = new Review({ user, reviewText, rating });
        await newReview.save();
        res.status(201).json({ message: 'Review submitted successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to submit review', details: error });
    }
});

// Route to fetch all reviews
router.get('/', async (req, res) => {
    try {
        const reviews = await Review.find().populate('user');
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch reviews', details: error });
    }
});

export default router;
