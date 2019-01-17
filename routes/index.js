var express = require('express');
var router = express.Router();

const indexController = require('../controllers/index');

router.get('/', indexController.search);
  
module.exports = router;
