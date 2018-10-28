var express = require('express');
var router = express.Router();
var knex = require('knex');
var knexFile = require('../knexfile');
var db = knex(knexFile[process.env.NODE_ENV || 'development']);
const uuid = require('uuid/v4');
const jwt = require('jsonwebtoken');

// to test registration by curl:
// user_name=sskate&password=test123&first_name=sser&last_name=Batas&email=yassk8@mail.com&user_image=%20&phone_number=3121234826
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
      const JWTToken = jwt.sign({
        email: user_name,
        _id: uuid
      },
      'secret',
      {
        expiresIn: '2h'
      });
      
      return res.status(200).json({  
          success: 'User has been registered correctly',
          token: JWTToken 
      });
    })
    .catch(error => {
      res.json({ error: 'Has been an error during the registration process' });
    });
});

module.exports = router;
