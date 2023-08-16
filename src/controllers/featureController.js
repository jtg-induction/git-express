const express = require('express');
const router = express.Router();
const HubFeatureModel = require('../models/HubFeatureModel');

router.get('/suggestions', async (req, res) => {
  const authToken = req.headers['authorization'];
  const count = req.query.size || 4;

  const featureModel = new HubFeatureModel(authToken);
  try {
    const userData = await featureModel.getUserSuggestions(count);
    res.json(userData);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

router.get('/search', async (req, res) => {
  const authToken = req.headers['authorization'];

  const featureModel = new HubFeatureModel(authToken);
  try {
    const userData = await featureModel.getSearchUsers(req.query);
    res.json(userData);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

module.exports = router;
