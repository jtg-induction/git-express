const express = require('express');
const path = require('path');
const { client_build_id } = require('./serverConfig');

const app = express();

const environment = app.get('env');
require('dotenv').config({ path: `.env.${environment}` });

const port = process.env.PORT || 3000;

const loggerMiddleware = require('./middleware/loggerMiddleware');
app.use(loggerMiddleware);

// Set static folder
app.use(express.static(path.join(__dirname, '../build')));

// EJS view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes
const mainController = require('./controllers/mainController');
app.use('/', mainController);

app.locals.CACHE_BUSTER =
  process.env.NODE_ENV === 'production' ? `?v=${client_build_id}` : '';

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
