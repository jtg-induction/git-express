const express = require('express');
const router = express.Router();
/** Browser routes on client */
const routes = require('../../client/constants/routes');

router.get(routes.HOME, (req, res) => {
  res.render('index', {
    title: 'Home',
  });
});

router.get(routes.USER_DETAIL, (req, res) => {
  res.render('index', {
    title: 'User',
  });
});

router.get(routes.LOGIN, (req, res) => {
  res.render('index', {
    title: 'Login',
  });
});

module.exports = router;
