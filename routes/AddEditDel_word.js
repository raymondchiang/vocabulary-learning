var express = require('express');
var router = express.Router();

const AddEditDel_Controller = require('../controllers/AddEditDel_word');

router.get('/', AddEditDel_Controller.search);
router.get('/delete', AddEditDel_Controller.delete);
router.get('/search', AddEditDel_Controller.search);
router.post('/create', AddEditDel_Controller.add);
router.post('/update', AddEditDel_Controller.update);

module.exports = router;
