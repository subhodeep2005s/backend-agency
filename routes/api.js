const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');
const portfolioController = require('../controllers/portfolioController');
const pricingController = require('../controllers/pricingController');

const wicdController = require('../controllers/wicdController');
const heroController = require('../controllers/heroController');

// Existing routes...

// WICD routes
router.get('/wicds', wicdController.getWicds);
router.post('/wicds', wicdController.createWicd);
// Pricing routes
// router.get('/pricingcd ', pricingController.getPricingPlans);
router.get('/pricing', pricingController.getPricingPlans);

router.post('/pricing', pricingController.createPricingPlan);
router.put('/pricing/:id', pricingController.updatePricingPlan);
router.delete('/pricing/:id', pricingController.deletePricingPlan);

// Service routes
router.post('/services', serviceController.createService);
router.get('/services', serviceController.getServices);

// Portfolio routes
router.post('/portfolio', portfolioController.createPortfolioItem);
router.get('/portfolio', portfolioController.getPortfolioItems);
// hero page routes
router.get('/hero', heroController.getHeroData);
router.post('/hero', heroController.updateHeroData);

module.exports = router;
