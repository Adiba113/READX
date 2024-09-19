const mongoose = require('mongoose');
const reviewSchema = new mongoose.Schema({ /* schema fields */ });
module.exports = mongoose.model('Review', reviewSchema);
