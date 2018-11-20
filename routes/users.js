var express = require('express');
var router = express.Router();
var knex = require('knex');
var knexFile = require('../knexfile');
var db = knex(knexFile[process.env.NODE_ENV || 'development']);
const { verifyJWT_MW }  = require('../middlewares.js');

router.all('*', verifyJWT_MW);

/* GET users listing. */
router.get('/', (req, res, next) => {
  db('users').select('*').then(users => {
    res.json(users);
  });
});

router.get('/:id(\\d+)/', (req, res, next) => {
  const { id } = req.params;
  db('users').where({ id }).first().then(user => {
    typeof(user) != 'undefined' && res.json(user);
    res.json({ error: `There are not users with this id [${id}]` });
  });
});

router.get('/otra', (req, res, next) => {
  db('users').select('*').then(users => {
    res.json(users);
  });
});

module.exports = router;