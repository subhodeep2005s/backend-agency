const mongoose = require('mongoose');

const PricingSchema = new mongoose.Schema({
  plan: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  features: {
    type: [String],
    required: true,
    validate: [arrayMinLength, 'At least 5 features are required']
  },
  examples: {
    type: String,
    required: true
  },
  isPopular: {
    type: Boolean,
    default: false
  }
});

function arrayMinLength(val) {
  return val.length >= 5;
}

module.exports = mongoose.model('Pricing', PricingSchema);

