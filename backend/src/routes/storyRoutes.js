const express = require('express');
const router = express.Router();
const storyController = require('../controllers/storyController');

// POST - Create new story
router.post('/', storyController.createStory);

// GET - Get all stories with filters
router.get('/', storyController.getAllStories);

// GET - Get single story by ID
router.get('/:id', storyController.getStory);

// PUT - Update story (mark resolved, etc)
router.put('/:id', storyController.updateStory);

// GET - Get statistics
router.get('/stats/overview', storyController.getStatistics);

module.exports = router;
