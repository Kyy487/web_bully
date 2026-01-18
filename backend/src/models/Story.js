const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 200
  },
  content: {
    type: String,
    required: true,
    minlength: 50
  },
  category: {
    type: String,
    enum: ['bullying', 'harassment', 'cyberbullying', 'discrimination', 'other'],
    default: 'bullying'
  },
  severity: {
    type: String,
    enum: ['mild', 'moderate', 'severe'],
    default: 'moderate'
  },
  typeOfBullying: {
    type: [String],
    enum: ['verbal', 'physical', 'social', 'cyber', 'prejudicial'],
    default: ['verbal']
  },
  location: {
    type: String,
    enum: ['school', 'workplace', 'online', 'home', 'other'],
    default: 'school'
  },
  emotion: {
    type: [String],
    default: []
  },
  resolved: {
    type: Boolean,
    default: false
  },
  resolutionStory: {
    type: String,
    default: null
  },
  createdAt: {
    type: Date,
    default: Date.now,
    index: true
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Story', storySchema);
