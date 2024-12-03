// const Pricing = require('../models/Pricing');

// // Get all pricing plans
// exports.getPricingPlans = async (req, res) => {
//   try {
//     const pricingPlans = await Pricing.find();
//     res.json(pricingPlans);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Create a new pricing plan
// exports.createPricingPlan = async (req, res) => {
//   const pricingPlan = new Pricing({
//     plan: req.body.plan,
//     price: req.body.price,
//     features: req.body.features,
//     examples: req.body.examples,
//     isPopular: req.body.isPopular
//   });

//   try {
//     const newPricingPlan = await pricingPlan.save();
//     res.status(201).json(newPricingPlan);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // Update a pricing plan
// exports.updatePricingPlan = async (req, res) => {
//   try {
//     const updatedPlan = await Pricing.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.json(updatedPlan);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // Delete a pricing plan
// exports.deletePricingPlan = async (req, res) => {
//   try {
//     await Pricing.findByIdAndDelete(req.params.id);
//     res.json({ message: 'Pricing plan deleted' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

const Pricing = require('../models/Pricing');

exports.getPricingPlans = async (req, res) => {
  try {
    const pricingPlans = await Pricing.find();
    res.json(pricingPlans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createPricingPlan = async (req, res) => {
  const pricingPlan = new Pricing({
    plan: req.body.plan,
    price: req.body.price,
    features: req.body.features,
    examples: req.body.examples,
    isPopular: req.body.isPopular
  });

  try {
    const newPricingPlan = await pricingPlan.save();
    res.status(201).json(newPricingPlan);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updatePricingPlan = async (req, res) => {
  try {
    const updatedPricingPlan = await Pricing.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPricingPlan);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deletePricingPlan = async (req, res) => {
  try {
    await Pricing.findByIdAndDelete(req.params.id);
    res.json({ message: 'Pricing plan deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

