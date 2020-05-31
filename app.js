const express = require('express');
const app     = express();
const port    = 3000;


app.set('port', port);

// Get views from the views directory
app.set('views', __dirname + '/views');

// Make the engine to be HTML
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
// Serve static assets (js, css, img)
app.use('/static', express.static('public'));


// Routes
app.get('/test', (req, res) =>{
	res.render('test.html');
});

app.get('/', (req, res) =>{
	res.render('index.html');
});


// Start the server
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
