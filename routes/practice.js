var express = require('express');
var router = express.Router();

const practiceController = require('../controllers/practice');

router.get('/', practiceController.getWord);
  
module.exports = router;
