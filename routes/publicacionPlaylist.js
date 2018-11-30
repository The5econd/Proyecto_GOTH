var express = require('express');
var router = express.Router();
var playlistController = require('../controllers/playlistController');


// Create
router.post('/', playlistController.insert);

//Get all
router.get('/', playlistController.getAll);



module.exports = router; 