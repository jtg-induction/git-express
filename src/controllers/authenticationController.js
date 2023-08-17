const express = require('express');
const router = express.Router();

const AuthModel = require('../models/HubAuthModel');
const serverConfig = require('../serverConfig');

const authModel = new AuthModel(serverConfig.externalApi.baseUrl);

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const userData = await authModel.authenticateUser(username, password);
    res.json(userData);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

module.exports = router;
