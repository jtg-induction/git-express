const express = require('express');
const router = express.Router();
const UserModel = require('../models/HubUserModel');

router.get('/:username/details', async (req, res) => {
  const username = req.params.username;
  const authToken = req.headers['authorization'];

  const userModel = new UserModel(username, authToken);
  try {
    const userData = await userModel.getUserDetails();
    res.json(userData);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

module.exports = router;
