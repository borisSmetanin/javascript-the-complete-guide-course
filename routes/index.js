const express = require('express');
const router  = express.Router();

const config = require('../config');

/* GET home page. */
router.get('/', (req, res, next) => {

  const dynamic_data = {};

  res.render('index', Object.assign({}, config, dynamic_data));
});

router.get('/:page.html', (req, res, next) => {

  const dynamic_data = {};
  res.render(req.params.page, Object.assign({}, config, dynamic_data));
});

module.exports = router;
