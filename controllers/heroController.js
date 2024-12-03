const Hero = require('../models/Hero');

exports.getHeroData = async (req, res) => {
  try {
    const heroData = await Hero.findOne();
    if (!heroData) {
      return res.status(404).json({ message: 'Hero data not found' });
    }
    res.json(heroData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateHeroData = async (req, res) => {
  try {
    let heroData = await Hero.findOne();
    if (heroData) {
      heroData.mainTitle = req.body.mainTitle;
      heroData.ourStory = req.body.ourStory;
      heroData.projects = req.body.projects;
      heroData.experience = req.body.experience;
      heroData.happyClients = req.body.happyClients;
      heroData.imageUrl = req.body.imageUrl;
      await heroData.save();
    } else {
      heroData = new Hero(req.body);
      await heroData.save();
    }
    res.json({ message: 'Hero data updated successfully', data: heroData });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

