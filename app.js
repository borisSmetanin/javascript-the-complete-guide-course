const express          = require('express');
const app              = express();
const mustache_express = require('mustache-express');

const {port, base_url} = require('./config');

app.set('port', port);

// Get views from the views directory
app.set('views', __dirname + '/views');

// Make the engine to be Mustache
app.engine('mustache', mustache_express());
app.set('view engine', 'mustache');

// Serve static assets (js, css, img)
app.use('/assets', express.static('public/assets'));

// Register routes
app.use('/', require('./routes/index'));

// Start the server
app.listen(port, () => {
	console.log(`Example app listening at ${base_url}`);
});
