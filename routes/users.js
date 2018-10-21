var express = require('express');
var router = express.Router();
var knex = require('knex');
var knexFile = require('../knexfile');
var db = knex(knexFile[process.env.NODE_ENV || 'development']);

/* GET users listing. */
router.get('/', (req, res, next) => {
  db('users').select('*').then(users => {
    res.json(users);
  });
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  db('users').select('*').where({ id }).then(user => {
    if (user.length > 0) {
      res.json(user[0]);
    }

    res.json({ error: `There are not users with this id [${id}]` });
  });
});

module.exports = router;
