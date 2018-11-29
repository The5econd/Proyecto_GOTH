var express = require('express');
var router = express.Router();
var UserController = require('../controllers/userControllers');
var playlistControler = require("../controllers/playlistController");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('profileGeneral',{ first_name:'Javier' , email:'00076017@uca.edu.sv'});
});

router.get('/General', function(req, res, next) {
  res.render('profileGeneral',{ first_name:'Javier' , email:'00076017@uca.edu.sv'});
});

router.get('/Seguridad', function(req, res, next) {
  res.render('profileSeguridad');
});

router.get('/Foros', function(req, res, next) {
  res.render('profileForos');
});

router.get('/Foros/:username',playlistControler.show);

router.get('/Playlist', function(req, res, next) {
  res.render('profilePlaylist');
});

router.get('/playlist',)

router.post('/', UserController.update);


module.exports = router;