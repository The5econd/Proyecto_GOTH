var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');

  let data = {
    tit: JSON.parse(req.session.publicaciones).titulo,
    cue: JSON.parse(req.session.publicaciones).texto
  }
  console.log(data.tit);
});

module.exports = router;

