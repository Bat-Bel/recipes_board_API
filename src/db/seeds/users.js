const uuid = require('uuid/v4');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del().then(function() {
    // Inserts seed entries
    return knex('users').insert([
      {
        id: uuid(),
        user_name: 'yasskate',
        first_name: 'Yasser',
        last_name: 'Batas',
        email: 'yassk8@gmail.com',
        user_image: '',
        phone_number: '3121234826'
      },
      {
        id: uuid(),
        user_name: 'sambelmor',
        first_name: 'Dzoara',
        last_name: 'Bello',
        email: 'sambelmor@gmail.com',
        user_image: '',
        phone_number: '3121113267'
      },
    ]);
  });
};
