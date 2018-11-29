
var express = require('express');
var router = express.Router();
var publicacionController = require('../controllers/publicacionController');


// Create
router.post('/', publicacionController.insert);

//Get all
router.get('/', publicacionController.getAll);


module.exports = router;