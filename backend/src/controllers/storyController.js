const Story = require('../models/Story');

// Create a new story
exports.createStory = async (req, res) => {
  try {
    const { title, content, category, severity, typeOfBullying, location, emotion } = req.body;

    // Validation
    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required' });
    }

    if (content.length < 50) {
      return res.status(400).json({ error: 'Story must be at least 50 characters long' });
    }

    const story = new Story({
      title,
      content,
      category,
      severity,
      typeOfBullying,
      location,
      emotion
    });

    await story.save();
    res.status(201).json({
      message: 'Story submitted successfully',
      story: story
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all stories (for testimonials/public view)
exports.getAllStories = async (req, res) => {
  try {
    const { category, severity, location, page = 1, limit = 10 } = req.query;
    
    let filter = {};
    if (category) filter.category = category;
    if (severity) filter.severity = severity;
    if (location) filter.location = location;

    const skip = (page - 1) * limit;

    const stories = await Story.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Story.countDocuments(filter);

    res.json({
      stories,
      pagination: {
        total,
        pages: Math.ceil(total / limit),
        currentPage: parseInt(page)
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get single story by ID
exports.getStory = async (req, res) => {
  try {
    const story = await Story.findById(req.params.id);
    
    if (!story) {
      return res.status(404).json({ error: 'Story not found' });
    }

    res.json(story);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update story (mark as resolved, add resolution story)
exports.updateStory = async (req, res) => {
  try {
    const { resolved, resolutionStory } = req.body;
    
    const story = await Story.findByIdAndUpdate(
      req.params.id,
      { 
        resolved,
        resolutionStory,
        updatedAt: Date.now()
      },
      { new: true, runValidators: true }
    );

    if (!story) {
      return res.status(404).json({ error: 'Story not found' });
    }

    res.json({
      message: 'Story updated successfully',
      story
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get statistics
exports.getStatistics = async (req, res) => {
  try {
    const totalStories = await Story.countDocuments();
    const resolvedStories = await Story.countDocuments({ resolved: true });
    const categoryCounts = await Story.aggregate([
      { $group: { _id: '$category', count: { $sum: 1 } } }
    ]);
    const locationCounts = await Story.aggregate([
      { $group: { _id: '$location', count: { $sum: 1 } } }
    ]);

    res.json({
      totalStories,
      resolvedStories,
      resolutionRate: ((resolvedStories / totalStories) * 100).toFixed(2) + '%',
      byCategory: categoryCounts,
      byLocation: locationCounts
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
