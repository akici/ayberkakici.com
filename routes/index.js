var express = require('express');
var router = express.Router();
var assets = require('../assets.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ayberk Akıcı - Frontend Developer located in Berlin', url: req.hostname, assets: assets.main });
});

/* GET home page. */
router.get('/works', function(req, res, next) {
  res.render('works', { title: 'Works - Ayberk Akıcı - Frontend Developer located in Berlin', url: req.hostname + req.path, assets: assets.main});
});

/* GET home page. */
router.get('/notifyMe.js', function(req, res, next) {
  res.render('notifyMeJs', { title: 'NotifyMe.js - Text notifications on screen corners', url: req.hostname + req.path});
});

module.exports = router;
