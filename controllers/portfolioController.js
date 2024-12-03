const Portfolio = require('../models/Portfolio');

// Create a new portfolio item
exports.createPortfolioItem = async (req, res) => {
  try {
    const newPortfolioItem = new Portfolio(req.body);
    const savedPortfolioItem = await newPortfolioItem.save();
    res.status(201).json(savedPortfolioItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all portfolio items
exports.getPortfolioItems = async (req, res) => {
  try {
    const portfolioItems = await Portfolio.find();
    res.json(portfolioItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};