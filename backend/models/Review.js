const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  communityId: { type: mongoose.Schema.Types.ObjectId, ref: 'Community', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  text: { type: String, required: true },
  sentimentScore: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);
