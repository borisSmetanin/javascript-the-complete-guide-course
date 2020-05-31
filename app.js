const express          = require('express');
const app              = express();

const {port, base_url} = require('./config');

app.set('port', port);

// Get views from the views directory
app.set('views', __dirname + '/views');

// Make the engine to be HTML
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Serve static assets (js, css, img)
app.use('/static', express.static('public'));

// Register routes
app.use('/', require('./routes/index'));

// Start the server
app.listen(port, () => {
	console.log(`Example app listening at ${base_url}`);
});
