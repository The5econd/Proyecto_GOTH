var express = require('express');
const playlistController =require("../controllers/playlistController");
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('playlist');
});

router.post('/', playlistController.insert);

router.get('/', playlistController.getAll);

module.exports = router;