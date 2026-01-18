const express = require('express');
const router = express.Router();
const resourceController = require('../controllers/resourceController');

// GET - Support resources and tips
router.get('/', resourceController.getResources);

// GET - Motivational messages
router.get('/motivation/daily', resourceController.getMotivationalMessages);

// GET - FAQ
router.get('/faq/all', resourceController.getFAQ);

module.exports = router;
