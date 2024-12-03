const mongoose = require('mongoose');

const HeroSchema = new mongoose.Schema({
  mainTitle: {
    type: String,
    required: true
  },
  ourStory: {
    type: String,
    required: true
  },
  projects: {
    type: Number,
    required: true
  },
  experience: {
    type: Number,
    required: true
  },
  happyClients: {
    type: Number,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Hero', HeroSchema);

