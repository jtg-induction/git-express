const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const config = require('./serverConfig');

const app = express();

const environment = app.get('env');
require('dotenv').config({ path: `.env.${environment}` });

const loggerMiddleware = require('./middleware/loggerMiddleware');
app.use(loggerMiddleware);

// Set static folder
app.use(express.static(path.join(__dirname, '../build')));

// EJS view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Parse JSON bodies
app.use(bodyParser.json());

// Routes
const mainController = require('./controllers/mainController');
app.use('/', mainController);

const authenticationController = require('./controllers/authenticationController');
app.use('/', authenticationController);

const userController = require('./controllers/userController');
app.use('/', userController);

const featureController = require('./controllers/featureController');
app.use('/', featureController);

// Route to render custom 404 template
app.use((req, res) => {
  res.status(404).render('404', {
    title: 'Error page',
  });
});

app.locals.CACHE_BUSTER =
  process.env.NODE_ENV === 'production' ? `?v=${config.clientBuildId}` : '';

// Start the server
app.listen(process.env.EXPRESS_SERVER_PORT, () => {
  console.log(
    `Server is running on http://localhost:${process.env.EXPRESS_SERVER_PORT}`,
  );
});
