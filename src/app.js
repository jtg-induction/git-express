const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Set static folder
app.use(express.static(path.join(__dirname, '../public')));

// EJS view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes
const mainController = require('./controllers/mainController');
app.use('/', mainController);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
