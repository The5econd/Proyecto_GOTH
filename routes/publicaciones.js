
var express = require('express');
var router = express.Router();
var publicacionController = require('../controllers/publicacionController');


// Create
router.post('/', publicacionController.insert);


module.exports = router;