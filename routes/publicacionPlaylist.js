var express = require('express');
var router = express.Router();
var playlistController = require('../controllers/playlistController');


// Create
router.post('/', playlistController.insert);

//Get all
router.get('/', playlistController.getAll);

// Delete
router.delete('/:id',playlistController.delete);

module.exports = router; 