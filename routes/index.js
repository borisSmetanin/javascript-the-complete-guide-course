const express = require('express');
const router  = express.Router();

const config = require('../config');

/* GET home page. */
router.get('/', (req, res, next) => {

  const dynamic_data = { title: 'Test title ?' };

  res.render('index', Object.assign({}, config, dynamic_data));
});

router.get('/test', (req, res, next) => {
  res.render('test', { title: 'Express' });
});

module.exports = router;
