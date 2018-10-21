var express = require('express');
var router = express.Router();
var knex = require('knex');
var knexFile = require('../knexfile');
var db = knex(knexFile[process.env.NODE_ENV || 'development']);
const uuid = require('uuid/v4');

router.post('/signup', function(req, res, next) {
  const {
    user_name,
    password,
    first_name,
    last_name,
    email,
    user_image,
    phone_number
  } = req.body;

  db('users')
    .insert({
      uuid: uuid(),
      user_name,
      password,
      first_name,
      last_name,
      email,
      user_image,
      phone_number
    })
    .then(data => {
      res.json({ success: 'User has been registered correctly' });
    })
    .catch(error => {
      res.json({ error: 'Has been an error during the registration process' });
    });
});

module.exports = router;
