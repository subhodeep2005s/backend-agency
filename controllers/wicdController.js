const Wicd = require('../models/Wicd');

exports.getWicds = async (req, res) => {
  try {
    const wicds = await Wicd.find();
    res.json(wicds);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createWicd = async (req, res) => {
  const wicd = new Wicd({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    features: req.body.features,
    softwareUsed: req.body.softwareUsed,
    imageUrl: req.body.imageUrl
  });

  try {
    const newWicd = await wicd.save();
    res.status(201).json(newWicd);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

