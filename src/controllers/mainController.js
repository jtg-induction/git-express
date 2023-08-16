const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Home',
  });
});

router.get('/user/:username', (req, res) => {
  res.render('index', {
    title: 'User',
  });
});

router.get('/login', (req, res) => {
  res.render('index', {
    title: 'Login',
  });
});

module.exports = router;
