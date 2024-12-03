const mongoose = require('mongoose');

const WicdSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    monthly: {
      type: Number,
      required: true
    },
    yearly: {
      type: Number,
      required: true
    },
    permanent: {
      type: Number,
      required: true
    }
  },
  description: {
    type: String,
    required: true
  },
  features: {
    type: [String],
    required: true
  },
  softwareUsed: {
    type: [String],
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Wicd', WicdSchema);

