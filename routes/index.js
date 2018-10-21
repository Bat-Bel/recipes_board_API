var express = require('express');
var router = express.Router();
var knex = require('knex');
var knexFile = require('../knexfile');
var db = knex(knexFile[process.env.NODE_ENV || 'development']);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
